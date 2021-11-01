<script lang="ts">
  import { onMount } from "svelte";
  import { Map } from "@beyonk/svelte-mapbox";

  import IntroModal from "../components/introModal.svelte";

  const accessToken =
    "pk.eyJ1IjoicHJpc21hLWRhdmlkcCIsImEiOiJja3ZlMGs3bm00N3NyMm9scHYxcDcwMW5lIn0.al4e5xd-S95t1srowwoWXw";

  let mapComponent: Map;

  const oneMonth = 60 * 60 * 24 * 30 * 1000;
  export let showInfoModal = false;

  onMount(() => {
    const shownIntroAt = window.localStorage.getItem("shownIntroAt");
    if (
      shownIntroAt == null ||
      new Date().getTime() - new Date(shownIntroAt).getTime() > oneMonth
    ) {
      document.querySelector("body").classList.add("overflow-hidden");
      showInfoModal = true;
    }
  });
</script>

{#if showInfoModal}
  <IntroModal bind:modalShown={showInfoModal} />
{/if}

<section class="h-screen">
  <Map
    {accessToken}
    style="mapbox://styles/prisma-davidp/ckt6xnv4c1ut617ns7444v18e"
    bind:this={mapComponent}
    center={[23.591675, 46.770764]}
    zoom="13"
  />
</section>
