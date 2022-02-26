<script lang="ts">
  import StepModal from "./stepModal.svelte";

  let honeyPot: string;
  let details: string;
  let notifiedAuthorities: boolean;

  export let error: string = "";
  export let showError: boolean = false;

  export let data: Step2BData;

  export let isLoading: boolean = false;

  export let cancelCallback: () => any;
  export let okCallback: () => any;
</script>

<StepModal>
  <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
    <div class="sm:flex sm:items-start">
      <div class="mt-3 sm:mt-0 sm:ml-4 sm:text-left">
        <p class="text-sm md:text-base text-gray-600 text-center">
          Dacă vrei să menționezi mai multe detalii, o poți face acum.
        </p>
        <form class="w-full mt-2 max-w-sm">
          <!-- Honeypot -->
          <label class="hidden" aria-hidden="true" for="b^%fgfA">Email</label>
          <input
            class="hidden"
            aria-hidden="true"
            type="text"
            id="b^%fgfA"
            bind:value={honeyPot}
          />
          <!-- END:Honeypot -->

          <div class="md:flex md:items-center">
            <div class="md:w-1/3">
              <label
                class="block text-gray-500 md:text-right mb-1 md:mb-0 pr-4"
                for="incident_details"
              >
                Detalii
              </label>
            </div>
            <div class="md:w-2/3">
              <textarea
                class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-prisma-purple-100"
                id="incident_details"
                placeholder="Optional, max. 1000 caractere"
                maxlength="1000"
                bind:value={details}
              />
              <small class="text-gray-400">
                Te rugăm nu include nume de persoane!
              </small>
            </div>
          </div>

          <div class="md:flex md:items-center mt-2">
            <div class="md:w-1/3">
              <h2 class="block text-gray-500 md:text-right mb-1 md:mb-0 pr-4">
                Date opționale
              </h2>
            </div>
            <div class="md:w-2/3">
              <div class="flex items-center mx-2 my-3">
                <div class="flex items-center h-5">
                  <input
                    id="notifiedAuthorities"
                    aria-describedby="notifiedAuthorities"
                    type="checkbox"
                    class="w-4 h-4 bg-gray-50 rounded border focus:ring-3 focus:ring-prisma-purple-300"
                    bind:checked={notifiedAuthorities}
                  />
                </div>
                <div class="ml-3 text-sm">
                  <label for="notifiedAuthorities" class="font-medium text-gray-600">
                    Am raportat acest incident și autorităților
                  </label>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>

  {#if showError}
    <p class="text-prisma-red-300 font-bold text-sm text-center my-2 mx-1">
      {error}
    </p>
  {/if}

  <div
    class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row sm:justify-center"
  >
    <button
      type="button"
      class="{isLoading
        ? 'cursor-not-allowed'
        : ''} w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-prisma-purple-500 text-base font-medium text-white hover:bg-prisma-purple-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-prisma-purple-300 sm:ml-3 sm:w-auto sm:text-sm"
      on:click={() => {
        data = {
          honeyPot,
          details,
          notifiedAuthorities,
        };
        okCallback();
      }}
    >
      Trimite!
      {#if isLoading}
        <svg
          class="animate-spin ml-2 h-5 w-5 text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            class="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            stroke-width="4"
          />
          <path
            class="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      {/if}
    </button>
    <button
      type="button"
      class="{isLoading
        ? 'cursor-not-allowed'
        : ''} mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
      on:click={cancelCallback}
    >
      Înapoi
    </button>
  </div>
</StepModal>
