<script lang="ts">
  import Map from "../components/map/map.svelte";

  import { onMount } from "svelte";
  import { MixpanelService } from "../lib/mixpanel";
  import { HistoryManager } from "../lib/historyManager";
  import { SettingsService } from "../lib/settingsService";

  const s = SettingsService.instance;

  onMount(() => {
    MixpanelService.event("Page View", { page: "Map" });

    // Check for an initial page in the url
    HistoryManager.processInitialUrl();
  });
</script>

<section class="h-screen relative">
  <Map
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
  />
</section>
