<script lang="ts">
  import Map from "../components/map/map.svelte";
  import Marker from "../components/map/marker.svelte";

  import { onMount } from "svelte";
  import { MixpanelService } from "../lib/mixpanelService";
  import { SettingsService } from "../lib/settingsService";
  import { intl, isLoading } from "../stores";
  import type { AnyReport, PublicReport } from "../models/report";
  import { ReportsService } from "../lib/reportsService";
  import ErrorModal from "../components/errorModal.svelte";

  const s = SettingsService.instance;
  let reports: AnyReport[] = [];
  let error: string | null = null;

  onMount(() => {
    isLoading.set(true);
    MixpanelService.event("Page View", { page: "Map" });
  });

  const fetchReports = async () => {    
    const res = await ReportsService.fetchPublicReports(
      s.settings.selectedCountries
    );

    if (!res.wasSuccessful) {
      error = `Oops! ${$intl.generic.error}`;
      setTimeout(() => {
        error = null;
      }, 3000);
    }

    reports = res.data;
  };

  const onReportClicked = (report: AnyReport) => {
    alert(`ID: ${report.id}`);
  };
</script>

{#if error}
  <ErrorModal {error} />
{/if}

<section class="h-screen relative">
  <Map
    onLoad={async () => {
      await fetchReports();
      isLoading.set(false);
    }}
    onClick={(pos) => {
      console.log(`Clicked: ${pos}`);
    }}
    onMoveEnd={(center) => {
      s.settings.lastLocation = [center.lng, center.lat];
      s.applyUpdate();
    }}
    onZoomEnd={(zoom) => {
      // If the zoom level > 10, save it's value -2 to see more of the map on
      // restart
      s.settings.lastZoom = zoom < 10 ? zoom : zoom - 2;
      s.applyUpdate();
    }}
  >
    {#each reports as report}
      <Marker {report} onClick={onReportClicked}/>
    {/each}
  </Map>
</section>
