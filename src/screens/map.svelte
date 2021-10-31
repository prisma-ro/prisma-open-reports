<script lang="ts">
  import { Map } from "@beyonk/svelte-mapbox";

  const accessToken =
    "pk.eyJ1IjoicHJpc21hLWRhdmlkcCIsImEiOiJja3ZlMGs3bm00N3NyMm9scHYxcDcwMW5lIn0.al4e5xd-S95t1srowwoWXw";

  let mapComponent: Map;
</script>

<section class="h-screen">
  <Map
    {accessToken}
    style="mapbox://styles/prisma-davidp/ckt6xnv4c1ut617ns7444v18e"
    bind:this={mapComponent}
    center={[23.591675, 46.770764]}
    zoom="13"
  >
  </Map>
</section>
