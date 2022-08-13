<script lang="ts">
  import { onMount } from "svelte";
  import { HistoryManager } from "../lib/historyManager";
  import { MixpanelService } from "../lib/mixpanelService";
  import { changePage, intl } from "../stores";

  onMount(() => {
    MixpanelService.event("Page View", { page: "Data Protection" });

    const historyManager = new HistoryManager();

    if (!historyManager.hasValidState) {
      console.log("Invalid or missing returnTo query!");
    }

    window.onpopstate = () => {
      historyManager.onPopStateCallback();
    };

    historyManager.clearLink();
  });
</script>

<section class="mt-32 mx-4 md:mx-64">
  <div class="mb-16">
    <h1
      class="text-center text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-prisma-purple-500 to-purple-800 md:text-6xl lg:text-8xl"
    >
      {$intl.dataProtection.title}
    </h1>
  </div>

  {#each $intl.dataProtection.sections as section}
    <article>
      <h2
        class="my-2 md:my-8 md:mx-24 text-3xl md:block md:text-3xl lg:text-4xl"
      >
        {section.title}
      </h2>
      <p class="my-2 md:my-8 md:mx-24 text-justify md:text-xl">
        {@html section.bodyHTML}
      </p>
    </article>
  {/each}

  <div class="flex flex-row justify-center my-6">
    <button
      class="mr-2 btn btn-primary btn-outline rounded-full normal-case"
      on:click|preventDefault={() => {
        changePage("map");
        HistoryManager.goTo("map");
      }}
    >
      {$intl.generic.backToMap}
    </button>
    <button
      class="ml-2 btn btn-primary btn-outline rounded-full normal-case"
      on:click|preventDefault={() => {
        alert('todo');
      }}
    >
      {$intl.generic.cookieSettings}
    </button>
  </div>
</section>
