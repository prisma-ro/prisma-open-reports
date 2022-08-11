<script lang="ts">
  import { onMount } from "svelte";
  import { intl } from "../../stores";
  import {
    COOKIE_CONSENT,
    CURRENT_ONBOARDING_REF,
    SHOWN_ONBOARDING,
  } from "../../constants";

  import IntroTile from "./introTile.svelte";

  export let id: string;
  let modal: HTMLElement;

  onMount(() => {
    modal.classList.add("modal-open");
  });

  const onClickNo = () => {
    window.localStorage.setItem(SHOWN_ONBOARDING, CURRENT_ONBOARDING_REF);
    window.localStorage.setItem(
      COOKIE_CONSENT,
      `no+${new Date().toISOString()}`
    );

    console.log("[OnboardingModal] Refused cookies");
    modal.classList.remove("modal-open");
  };

  const onClickYes = () => {
    window.localStorage.setItem(SHOWN_ONBOARDING, CURRENT_ONBOARDING_REF);
    window.localStorage.setItem(
      COOKIE_CONSENT,
      `yes+${new Date().toISOString()}`
    );

    console.log("[OnboardingModal] Refused cookies");
    modal.classList.remove("modal-open");
  };
</script>

<aside bind:this={modal} class="modal modal-bottom sm:modal-middle select-none">
  <!-- Modal Container -->
  <div class="modal-box">
    <h3 class="font-bold text-lg">{$intl.onboarding.title}</h3>

    <!-- Main Body -->
    <div class="my-4 flex flex-col">
      <span> {$intl.onboarding.newReport.title} </span>

      <!-- Steps -->
      <div class="my-1">
        <IntroTile
          title={$intl.onboarding.newReport.steps.one.title}
          text={$intl.onboarding.newReport.steps.one.body}
        />
        <IntroTile
          title={$intl.onboarding.newReport.steps.two.title}
          text={$intl.onboarding.newReport.steps.two.body}
        />
        <IntroTile
          title={$intl.onboarding.newReport.steps.three.title}
          text={$intl.onboarding.newReport.steps.three.body}
        />
      </div>
      <!-- End: Steps -->

      <hr class="mb-1" />

      <!-- View Reports -->
      <div class="mb-2 leading-5">
        <IntroTile
          title={$intl.onboarding.viewReports.card.title}
          text={$intl.onboarding.viewReports.card.body}
          isPrimary={false}
        />
        <span class="text-xs">
          <span class="font-bold">
            {$intl.onboarding.viewReports.tips.title}
          </span>
          {$intl.onboarding.viewReports.tips.content}
        </span>
      </div>
      <!-- End: View Reports -->

      <hr class="mb-4" />

      <!-- Bottom Section -->
      <span> {$intl.onboarding.cookies.title} </span>
      <span class="text-xs my-1 leading-5">
        <span class="font-bold">
          {$intl.onboarding.cookies.privacy.noWorries}
        </span>
        {$intl.onboarding.cookies.privacy.content}
        <a
          class="text-primary"
          href="https://www.prisma-safety.com/privacy"
          target="_blank"
          rel="noopener"
        >
          {$intl.onboarding.cookies.privacy.policy}
        </a>
      </span>
      <div class="flex flex-col mt-2 modal-action">
        <button
          class="btn btn-primary btn-link btn-sm normal-case"
          on:click|once|preventDefault={onClickNo}
        >
          {$intl.onboarding.cookies.no}
        </button>
        <button
          class="btn btn-primary normal-case mt-1"
          on:click|once|preventDefault={onClickYes}
        >
          {$intl.onboarding.cookies.yes}
        </button>
      </div>
      <span class="text-xs text-center font-bold pt-4">
        {$intl.onboarding.thanks}
      </span>
      <!-- End: Bottom Section -->
    </div>
    <!-- End: Main Body -->
  </div>
  <!-- End: Modal Container -->
</aside>
