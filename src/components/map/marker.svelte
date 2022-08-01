<script lang="ts">
  import { getContext } from "svelte";
  import { IMapboxContext, mapbox, MAPBOX_KEY } from "./mapbox.js";

  const { getMap } = getContext<IMapboxContext>(MAPBOX_KEY);
  const map = getMap();

  export let lat: number;
  export let lon: number;
  export let color: string;

  export let onClick: mapbox.EventedListener = () => {};

  export const marker = new mapbox.Marker({
    color: color,
  })
    .setLngLat([lon, lat])
    .on("click", onClick)
    .addTo(map);
</script>
