<!-- 
Copyright 2021-2022 Prisma Safety

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
  import Map from "./screens/map.svelte";
  import { isLoading } from "./stores";
</script>

<!-- <script lang="ts">
  import Navbar from "./components/navbar.svelte";
  import About from "./screens/about.svelte";
  import DataProtection from "./screens/dataProtection.svelte";
  import Map from "./screens/map.svelte";

  import IntroModal from "./components/introModal.svelte";

  import { onMount } from "svelte";
  import { currentPage } from "./stores";
  import { COOKIE_CONSENT, SHOWN_INTRO } from "./lib/constants";
  import { MixpanelService } from "./lib/mixpanel";

  let showInfoModal = false;

  const oneMonth = 60 * 60 * 24 * 30 * 1000;

  onMount(() => {
    const shownIntroAt = window.localStorage.getItem(SHOWN_INTRO);
    if (
      shownIntroAt == null ||
      new Date().getTime() - new Date(shownIntroAt).getTime() > oneMonth
    ) {
      document.querySelector("body")?.classList.add("overflow-hidden");
      showInfoModal = true;

      // Revoke cookie consent
      window.localStorage.removeItem(COOKIE_CONSENT);
    }

    MixpanelService.init();
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
</main> -->

<main class="antialiased">
  <Navbar />
  <Map />

  {#if $isLoading}
    <progress class="progress absolute top-0 z-10 w-full rounded-none" />
  {/if}
</main>

<style global lang="postcss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

  @layer components {
    .glassmorphism {
      @apply bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30
    }
  }
</style>
