<script lang="ts">
  export let cancelCallback: () => any;
  export let okCallback: () => any;
</script>

<div
  class="fixed bottom-0 md:right-5 z-10 flex items-end justify-center pt-4 px-4 pb-5 text-center sm:block"
>
  <div
    class="inline-block align-bottom drop-shadow-2xl border-prisma-purple-500 border-2 bg-white rounded-lg text-left overflow-hidden transform transition-all sm:my-2 sm:align-middle sm:max-w-lg sm:w-full"
  >
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
    <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row sm:justify-center">
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
  </div>
</div>
