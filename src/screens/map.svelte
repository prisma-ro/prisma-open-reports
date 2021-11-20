<script lang="ts">
  import { Map, Marker } from "@beyonk/svelte-mapbox";

  import { currentStep } from "../stores";
  import { APIService } from "../lib/apiService";
  import { validateReportData } from "../lib/validators";

  import StepOne from "../components/stepOne.svelte";
  import StepTwo from "../components/stepTwo.svelte";
  import StepThree from "../components/stepThree.svelte";

  /** bounding of the @beyonk/svelte-mapbox Map component */
  let mapComponent: any;
  let markerOptions = {
    exists: false,
    lat: 0,
    long: 0,
  };

  let reportData: ReportData;
  let hasError: boolean = false;
  let errorText: string = "";
  let isLoading = false;

  let ignoreClick = false;

  const onMapClick = (e: any) => {
    if (ignoreClick) return;

    if (e instanceof CustomEvent) {
      // console.log(`Map clicked @ ${e.detail.lat} / ${e.detail.lng}`);

      // Set marker options
      markerOptions.lat = e.detail.lat;
      markerOptions.long = e.detail.lng;
      markerOptions.exists = true;

      // Center the map a bit lower than the click point
      mapComponent.flyTo({
        center: [e.detail.lng, e.detail.lat - 0.002],
        zoom: 15,
      });
    }
  };

  const submit = async () => {
    if (!validateReportData(reportData)) {
      errorText =
        "Următoarele câmpuri sunt obligatorii: Tipul incidentului, zi/lună/an, ora, iar câmpul detalii poate avea maxim 2000 de caractere!";
      hasError = true;
      return;
    }

    isLoading = true;

    const success = await APIService.submitReport(reportData, [
      markerOptions.lat,
      markerOptions.long,
    ]);

    isLoading = false;

    if (success) {
      currentStep.set(3);
    } else {
      errorText = "Ceva nu a mers bine...";
      hasError = true;
    }
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
  <StepTwo
    bind:data={reportData}
    bind:error={errorText}
    bind:showError={hasError}
    bind:isLoading
    okCallback={() => {
      if (isLoading) return;
      submit();
    }}
    cancelCallback={() => {
      if (isLoading) return;
      currentStep.set(1);
      ignoreClick = false;
    }}
  />
{:else if $currentStep == 3}
  <StepThree
    okCallback={() => {
      markerOptions.exists = false;
      ignoreClick = false;
      currentStep.set(1);
    }}
  />
{/if}

<section class="h-screen">
  <Map
    accessToken="pk.eyJ1IjoicHJpc21hLWRhdmlkcCIsImEiOiJja3ZlMGs3bm00N3NyMm9scHYxcDcwMW5lIn0.al4e5xd-S95t1srowwoWXw"
    style="mapbox://styles/prisma-davidp/ckt6xnv4c1ut617ns7444v18e"
    center={[23.591675, 46.770764]}
    zoom="13"
    bind:this={mapComponent}
    on:click={onMapClick}
    options={{
      minZoom: 6,
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
        color="#AA4465"
      />
    {/if}
  </Map>
</section>
