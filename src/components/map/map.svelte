<script lang="ts">
  import type { LngLat, LngLatLike } from "mapbox-gl";

  import { onDestroy, setContext } from "svelte";
  import { mapbox, MAPBOX_KEY } from "./mapbox.js";
  import { MAPBOX_STYLES } from "../../constants.js";
  import { SettingsService } from "../../lib/settingsService.js";
  import { currentSettings } from "../../stores.js";

  setContext(MAPBOX_KEY, {
    getMap: () => map,
  });

  onDestroy(() => {
    if (map) map.remove();
  });

  const s = SettingsService.instance;

  let container: HTMLElement;
  let map: mapbox.Map;

  export let onClick: (pos: LngLat) => void;
  export let onMoveEnd: (center: LngLat) => void;
  export let onZoomEnd: (zoom: number) => void;

  function load() {
    map = new mapbox.Map({
      container,
      style: s.settings.useSatellite
        ? MAPBOX_STYLES.SATELLITE
        : MAPBOX_STYLES.NORMAL,
      center: s.settings.lastLocation as LngLatLike,
      zoom: s.settings.lastZoom,
      maxBounds: [
        s.settings.mapLimits.boundsBtmLeft as LngLatLike,
        s.settings.mapLimits.boundsTopRight as LngLatLike,
      ],
      maxZoom: s.settings.mapLimits.maxZoom,
      minZoom: s.settings.mapLimits.minZoom,
    });

    map.on("click", (ev) => {
      onClick(ev.lngLat);
    });
    map.on("moveend", (_) => {
      onMoveEnd(map.getCenter());
    });
    map.on("zoomend", (_) => {
      onZoomEnd(map.getZoom());
    });

    currentSettings.subscribe((settings) => {
      if (settings.useSatellite) {
        map.setStyle(MAPBOX_STYLES.SATELLITE);
      } else {
        map.setStyle(MAPBOX_STYLES.NORMAL);
      }
    });
  }
</script>

<svelte:head>
  <link
    rel="stylesheet"
    href="https://unpkg.com/mapbox-gl/dist/mapbox-gl.css"
    on:load={load}
  />
</svelte:head>

<div class="h-full w-full" bind:this={container}>
  {#if map}
    <slot />
  {/if}
</div>
