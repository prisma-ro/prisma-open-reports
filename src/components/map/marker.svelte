<script lang="ts">
  import type { AnyReport } from "../../models/report.js";
  import { getContext } from "svelte";
  import { IMapboxContext, mapbox, MAPBOX_KEY } from "./mapbox.js";

  const { getMap } = getContext<IMapboxContext>(MAPBOX_KEY);
  const map = getMap();

  export let report: AnyReport;
  export let onClick: (report: AnyReport) => void;

  let markerElement = document.createElement("div");
  markerElement.className = "marker";
  markerElement.style.height = "4em";
  markerElement.style.width = "4em";
  markerElement.style.backgroundSize = "100%";
  markerElement.style.backgroundImage = "url('/map-marker.png')";

  markerElement.addEventListener("click", () => {
    onClick(report);
  });

  export const marker = new mapbox.Marker(markerElement)
    .setLngLat([report.long, report.lat])
    .addTo(map);
</script>
