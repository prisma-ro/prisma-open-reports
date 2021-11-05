<script lang="ts">
  import Datepicker from "./datepicker.svelte";
  import StepModal from "./stepModal.svelte";
  import Timepicker from "./timepicker.svelte";

  let selectedDate: Date;
  let selectedTime: string;
  let honeyPot: string;
  let type: string;
  let details: string;

  export let data: ReportData;

  export let cancelCallback: () => any;
  export let okCallback: () => any;
</script>

<StepModal>
  <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
    <div class="sm:flex sm:items-start">
      <div class="mt-3 sm:mt-0 sm:ml-4 sm:text-left">
        <p class="text-sm md:text-base text-gray-600 text-center">
          Te rugăm sa ne mai dai câteva detalii despre incidentul respectiv.
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
              <input
                class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="incident_type"
                type="text"
                placeholder="ex: Urmărire, Catcalling, etc"
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
              <div class="flex flex-row mx-8 mt-3">
                <div class="w-1/3 mt-2 text-gray-500">La ora:</div>
                <div class="w-2/3">
                  <Timepicker bind:time={selectedTime} />
                </div>
              </div>
            </div>
          </div>
          <div class="md:flex md:items-center">
            <div class="md:w-1/3">
              <label
                class="block text-gray-500 md:text-right mb-1 md:mb-0 pr-4"
                for="incident_details"
              >
                Mai multe detalii
              </label>
            </div>
            <div class="md:w-2/3">
              <textarea
                class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="incident_details"
                placeholder="Optional, max. 1000 caractere"
                maxlength="1000"
                bind:value={details}
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
  <div
    class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row sm:justify-center"
  >
    <button
      type="button"
      class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-prisma-purple-500 text-base font-medium text-white hover:bg-prisma-purple-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-prisma-purple-300 sm:ml-3 sm:w-auto sm:text-sm"
      on:click={() => {
        data = {
          date: selectedDate,
          time: selectedTime,
          honeyPot,
          type,
          details,
        };
        okCallback();
      }}
    >
      Trimite!
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
