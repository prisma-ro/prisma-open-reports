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
  import About from "./screens/about.svelte";
  import DataProtection from "./screens/dataProtection.svelte";
  import BottomControls from "./components/bottomControls/bottomControls.svelte";
  import OnboardingModal from "./components/onboarding/onboardingModal.svelte";

  import { isLoading, currentPage } from "./stores";
  import { TranslationProvider } from "./i18n/provider";
  import { SettingsService } from "./lib/settingsService";
  import {
    COOKIE_CONSENT,
    CURRENT_ONBOARDING_REF,
    ONE_MONTH_MS,
    SHOWN_ONBOARDING,
  } from "./constants";

  TranslationProvider.initialize();
  SettingsService.initialize();

  const needsToShowOnboarding = (): boolean => {
    const cookies = window.localStorage.getItem(COOKIE_CONSENT);
    const saved = window.localStorage.getItem(SHOWN_ONBOARDING);

    // Never got shown
    if (!saved || !cookies) return true;

    // Outdated onboarding
    if (saved !== CURRENT_ONBOARDING_REF) return true;

    // Expired cookie consent (3 months)
    if (
      new Date().getTime() - new Date(cookies.split("+")[1]).getTime() >
      3 * ONE_MONTH_MS
    ) {
      window.localStorage.removeItem(COOKIE_CONSENT);
      window.localStorage.removeItem(SHOWN_ONBOARDING);

      return true;
    }

    // Ok, do not show onboaading
    return false;
  };
</script>

<main class="antialiased">
  <Navbar />

  {#if $currentPage == "about"}
    <About />
  {:else if $currentPage == "dataProtection"}
    <DataProtection />
  {:else}
    <Map />
    <BottomControls />
  {/if}

  {#if $isLoading}
    <progress class="progress absolute top-0 z-10 w-full rounded-none" />
  {/if}

  {#if needsToShowOnboarding()}
    <OnboardingModal id="onboarding" />
  {/if}
</main>

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
<style global lang="postcss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

  @layer components {
    .glassmorphism {
      @apply bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30;
    }
  }
</style>
