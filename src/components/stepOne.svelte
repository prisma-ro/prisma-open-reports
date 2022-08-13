<script lang="ts">
  import StepModal from "./stepModal.svelte";

  export let cancelCallback: () => any;
  export let okCallback: () => any;
</script>

<StepModal>
  <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
    <div class="sm:flex sm:items-start">
      <div class="mt-3 sm:mt-0 sm:ml-4 sm:text-left">
        <p class="text-sm md:text-base text-gray-600 text-center">
          Dacă vrei să schimbi locația incidentului, doar apasă din nou pe
          hartă!
        </p>
      </div>
    </div>
  </div>
  <div class="bg-gray-50 px-4 py-3 sm:px-6 flex flex-col justify-center">
    <div class="sm:flex sm:flex-row sm:justify-center">
      <button
        type="button"
        class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-prisma-purple-500 text-base font-medium text-white hover:bg-prisma-purple-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-prisma-purple-300 sm:ml-3 sm:w-auto sm:text-sm"
        on:click={okCallback}
      >
        Continuă!
      </button>
      <button
        type="button"
        class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        on:click={cancelCallback}
      >
        Șterge marker-ul
      </button>
    </div>
    <div class="text-gray-600 text-center leading-4 mt-2">
      <small>
        <a
          href="docs/Acord_Prelucrarea_Datelor__Data_Processing_Agreement__Open_Reports.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Important: Continuarea reprezintă acceptul dvs. al
          <span class="whitespace-nowrap">
            Acordului de Prelucrare a Datelor Furnizate
          </span>
        </a>.
      </small>
    </div>
  </div>
</StepModal>
