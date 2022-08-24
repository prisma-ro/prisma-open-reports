<script lang="ts">
  import Map from "../components/map/map.svelte";
  import Marker from "../components/map/marker.svelte";

  import { onMount } from "svelte";
  import { MixpanelService } from "../lib/mixpanelService";
  import { SettingsService } from "../lib/settingsService";
  import { isLoading } from "../stores";
  import type { PublicReport } from "../models/report";
  import { ReportsService } from "../lib/reportsService";

  const s = SettingsService.instance;
  let reports: PublicReport[] = [];

  onMount(() => {
    isLoading.set(true);
    MixpanelService.event("Page View", { page: "Map" });
  });

  const fetchReports = async () => {
    const res = await ReportsService.fetchPublicReports(
      s.settings.selectedCountries
    );

    if (!res.wasSuccessful) {
      alert("failed to fetch reports!");
    }

    reports = res.data;
  };
</script>

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
      <Marker lat={report.lat} lon={report.long} color={"#ff0000"} />
    {/each}
  </Map>
</section>
