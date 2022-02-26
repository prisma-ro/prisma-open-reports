<script lang="ts">
  import Datepicker from "./datepicker.svelte";
  import StepModal from "./stepModal.svelte";
  import Timepicker from "./timepicker.svelte";

  let selectedDate: Date;
  let selectedTime: string;
  let honeyPot: string;
  let type: string;

  const OPTION_OTHER = "Altceva";
  let activeOption: string = OPTION_OTHER;

  export let error: string = "";
  export let showError: boolean = false;

  export let data: Step2AData;

  export let cancelCallback: () => any;
  export let okCallback: () => any;
</script>

<StepModal>
  <div class="bg-white px-4 pt-4 pb-4 sm:p-6 sm:pb-4">
    <div class="sm:flex sm:items-start">
      <div class="mt-3 sm:mt-0 sm:ml-4 sm:text-left">
        <p class="text-base text-gray-600 text-center leading-tight">
          <span class="underline underline-offset-1"
            >Câteva detalii de bază</span
          >
          <br />
          <small>
            La pasul următor, vei avea ocazia să ne dai mai multe detalii despre
            ce s-a întâmplat.
          </small>
        </p>
        <form class="w-full mt-2 max-w-sm">
          <!-- Honeypot -->
          <label class="hidden" aria-hidden="true" for="c@FgB*9Z">Email</label>
          <input
            class="hidden"
            aria-hidden="true"
            type="text"
            id="c@FgB*9Z"
            bind:value={honeyPot}
          />
          <!-- END:Honeypot -->

          <div class="md:flex md:items-center mb-6">
            <div class="md:w-1/3">
              <label
                class="block text-gray-500 md:text-right mb-1 md:mb-0 pr-4"
                for="incident_type"
              >
                Tipul incidentului
              </label>
            </div>

            <div class="md:w-2/3">
              <div class="grid grid-cols-2 mb-2">
                {#each ["Hărțuire fizică", "Hărțuire verbală", "Urmărire", "Frică", "Furt", "Altceva"] as option}
                  <button
                    on:click={(e) => {
                      e.preventDefault();
                      activeOption = option;
                    }}
                    class="{activeOption == option
                      ? 'bg-indigo-100 text-prisma-purple-500'
                      : 'bg-gray-200 text-gray-800'} text-sm font-medium m-1 px-2 py-1 rounded transition duration-300"
                  >
                    {option}
                  </button>
                {/each}
              </div>

              <input
                disabled={activeOption != OPTION_OTHER}
                class="{activeOption == OPTION_OTHER
                  ? 'bg-gray-200 text-gray-700 border-gray-200'
                  : 'bg-gray-50 text-gray-100 border-gray-100'} appearance-none border-2 rounded w-full py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-prisma-purple-100 transition duration-300"
                id="incident_type"
                type="text"
                placeholder={activeOption != OPTION_OTHER
                  ? activeOption
                  : "Nu e mai sus? Completează-tu aici!"}
                bind:value={type}
              />
            </div>
          </div>
          <div class="md:flex md:items-center mb-6">
            <div class="md:w-1/3">
              <label
                class="block text-gray-500 md:text-right mb-1 md:mb-0 pr-4"
                for="incident_time"
              >
                Când s-a întâmplat
              </label>
            </div>
            <div class="md:w-2/3">
              <Datepicker bind:selectedDate />
              <div class="flex flex-row mx-8 mt-3 leading-4 md:mx-4">
                <div class="w-1/3 mt-2 text-gray-500">
                  La ora:
                  <br />
                  <small><i>(aproximativ)</i></small>
                </div>
                <div class="w-2/3 pl-2 md:pl-6">
                  <Timepicker bind:time={selectedTime} />
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
      {@html error}
    </p>
  {/if}

  <div
    class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row sm:justify-center"
  >
    <button
      type="button"
      class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-prisma-purple-500 text-base font-medium text-white hover:bg-prisma-purple-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-prisma-purple-300 sm:ml-3 sm:w-auto sm:text-sm"
      on:click={() => {
        data = {
          date: selectedDate,
          time: selectedTime ?? "1.00",
          type: activeOption === OPTION_OTHER ? type : activeOption,
          honeyPot,
        };
        console.log(data);
        okCallback();
      }}
    >
      Continuă
    </button>
    <button
      type="button"
      class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
      on:click={cancelCallback}
    >
      Înapoi
    </button>
  </div>
</StepModal>
