<script lang="ts">
  import { Map, Marker } from "@beyonk/svelte-mapbox";

  import { onMount } from "svelte";
  import { currentStep } from "../stores";
  import { APIService } from "../lib/apiService";
  import {
    validateReportData,
    validateStep2A,
    validateStep2B,
  } from "../lib/validators";
  import { MixpanelService } from "../lib/mixpanel";
  import { HistoryManager } from "../lib/historyManager";

  import StepOne from "../components/stepOne.svelte";
  import StepTwoA from "../components/stepTwoA.svelte";
  import StepTwoB from "../components/stepTwoB.svelte";
  import StepThree from "../components/stepThree.svelte";
  import ShowReportsButton from "../components/showReportsButton.svelte";

  onMount(() => {
    MixpanelService.event("Page View", { page: "Map" });

    // Check for an initial page in the url
    HistoryManager.processInitialUrl();
  });

  /** bounding of the @beyonk/svelte-mapbox Map component */
  let mapComponent: any;
  let markerOptions = {
    exists: false,
    lat: 0,
    long: 0,
  };

  let reportData: ReportData;
  let step2AData: Step2AData;
  let step2BData: Step2BData;

  let hasError: boolean = false;
  let errorText: string = "";
  let isLoading = false;

  let previousReports: ReportDataWithId[] = [];
  let hideGetPreviousReports = false;

  let ignoreClick = false;

  const onMapClick = (e: any) => {
    if (ignoreClick) return;

    if (e instanceof CustomEvent) {
      // console.log(`Map clicked @ ${e.detail.lat} / ${e.detail.lng}`);

      // Set marker options
      markerOptions.lat = e.detail.lat;
      markerOptions.long = e.detail.lng;
      markerOptions.exists = true;

      // Get the current zoom
      const currentZoom = mapComponent.getMap().transform.tileZoom ?? 10;

      // If the zoom level is < 15, zoom in, otherwise keep the current zoom.
      // Also move the view down a bit (very small values, esp. for high zoom)
      mapComponent.flyTo({
        center: [
          e.detail.lng,
          currentZoom < 15 ? e.detail.lat - 0.002 : e.detail.lat - 0.0003,
        ],
        zoom: currentZoom < 15 ? 15 : currentZoom,
      });

      MixpanelService.event("Map Clicked", {
        lat: markerOptions.lat,
        long: markerOptions.long,
      });
    }
  };

  const submit = async () => {
    isLoading = true;

    const success = await APIService.submitReport(reportData, [
      markerOptions.lat,
      markerOptions.long,
    ]);

    isLoading = false;

    if (success) {
      currentStep.set(4);
    } else {
      errorText =
        "Ceva nu a mers bine... Urmărim aceste erori automat, dar ne poți contacta dacă problema persistă!";
      hasError = true;
    }
  };

  const getReports = async () => {
    previousReports = await APIService.getReports();
    hideGetPreviousReports = true;
  };
</script>

{#if markerOptions.exists && $currentStep == 1}
  <StepOne
    okCallback={() => {
      ignoreClick = true;
      currentStep.set(2);
    }}
    cancelCallback={() => {
      markerOptions.exists = false;
    }}
  />
{:else if $currentStep == 2}
  <StepTwoA
    bind:data={step2AData}
    bind:error={errorText}
    bind:showError={hasError}
    okCallback={() => {
      if (!validateStep2A(step2AData)) {
        errorText =
          "Câmpuri obligatorii: Tipul incidentului, zi/lună/an, ora.<br /><br />Știm că poate fi greu să îți amintești o dată specifică, dar încearcă sa aproximezi (dacă e un incident repetat, menționează la pasul urmator!).";
        hasError = true;
      } else {
        errorText = "";
        hasError = false;
        currentStep.set(3);
      }
    }}
    cancelCallback={() => {
      if (isLoading) return;
      MixpanelService.event("Cancelled Report");
      currentStep.set(1);
      ignoreClick = false;
    }}
  />
{:else if $currentStep == 3}
  <StepTwoB
    bind:data={step2BData}
    bind:error={errorText}
    bind:showError={hasError}
    bind:isLoading
    okCallback={() => {
      if (isLoading) return;

      if (!validateStep2B(step2BData)) {
        errorText = "Câmpul detalii este limitat la 1000 de caractere.";
        hasError = true;
      } else {
        errorText = "";
        hasError = false;

        reportData = {
          honeyPots: [step2AData.honeyPot, step2BData.honeyPot],
          date: step2AData.date,
          time: step2AData.time,
          type: step2AData.type,
          details: step2BData.details,
          notifiedAuthorities: step2BData.notifiedAuthorities,
        };

        submit();
      }
    }}
    cancelCallback={() => {
      if (isLoading) return;
      currentStep.set(2);
      ignoreClick = false;
    }}
  />
{:else if $currentStep == 4}
  <StepThree
    okCallback={() => {
      markerOptions.exists = false;
      ignoreClick = false;
      currentStep.set(1);
    }}
  />
{/if}

<section class="h-screen relative">
  <ShowReportsButton
    bind:hide={hideGetPreviousReports}
    onClickCallback={getReports}
  />
  <Map
    accessToken="pk.eyJ1IjoicHJpc21hLWRhdmlkcCIsImEiOiJja3ZlMGs3bm00N3NyMm9scHYxcDcwMW5lIn0.al4e5xd-S95t1srowwoWXw"
    style="mapbox://styles/prisma-davidp/ckt6xnv4c1ut617ns7444v18e"
    center={[24.849442, 46.069881]}
    zoom="5.5"
    bind:this={mapComponent}
    on:click={onMapClick}
    options={{
      minZoom: 5,
      maxBounds: [
        [19, 43],
        [30, 49],
      ],
    }}
  >
    {#if markerOptions.exists}
      <Marker
        lng={markerOptions.long}
        lat={markerOptions.lat}
        popup={false}
        color="#462255"
      />
    {/if}
    {#each previousReports as prevReport}
      <Marker
        lng={prevReport.reportDetails.location[1]}
        lat={prevReport.reportDetails.location[0]}
        popup={false}
        color="#AA4465"
      >
        <div style="content: url('/map-marker.png'); height: 4em;" />
      </Marker>
    {/each}
  </Map>
</section>
