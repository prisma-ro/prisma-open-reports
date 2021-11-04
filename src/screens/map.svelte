<script lang="ts">
  import { onMount } from "svelte";
  import { Map, Marker } from "@beyonk/svelte-mapbox";

  import IntroModal from "../components/introModal.svelte";
  import Step1Controls from "../components/step1Controls.svelte";

  export let showInfoModal = false;

  let mapComponent: Map;
  let markerOptions = {
    exists: false,
    lat: 0,
    long: 0,
  };
  const oneMonth = 60 * 60 * 24 * 30 * 1000;

  onMount(() => {
    const shownIntroAt = window.localStorage.getItem("shownIntroAt");
    if (
      shownIntroAt == null ||
      new Date().getTime() - new Date(shownIntroAt).getTime() > oneMonth
    ) {
      document.querySelector("body").classList.add("overflow-hidden");
      showInfoModal = true;
    }

    console.log(mapComponent);
  });

  const onMapClick = (e: any) => {
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
</script>

{#if showInfoModal}
  <IntroModal bind:modalShown={showInfoModal} />
{/if}

{#if markerOptions.exists}
  <Step1Controls
    okCallback={() => {
      alert('Work in progress');
    }}
    cancelCallback={() => {
      markerOptions.exists = false;
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
