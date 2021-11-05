<!-- 
Copyright 2021 Prisma

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

  http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
-->
<script lang="ts">
  import Navbar from "./components/navbar.svelte";
  import About from "./screens/about.svelte";
  import DataProtection from "./screens/dataProtection.svelte";
  import Map from "./screens/map.svelte";

  import IntroModal from "./components/introModal.svelte";

  import { onMount } from "svelte";
  import { currentPage } from "./stores";

  let showInfoModal = false;

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
  });
</script>

{#if showInfoModal}
  <IntroModal bind:modalShown={showInfoModal} />
{/if}

<main class="antialiased">
  <Navbar bind:showInfoModal />

  {#if $currentPage == "about"}
    <About />
  {:else if $currentPage == "dataProtection"}
    <DataProtection />
  {:else}
    <Map />
  {/if}
</main>

<style global lang="postcss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>
