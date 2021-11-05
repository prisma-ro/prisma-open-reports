<script lang="ts">
  import StepModal from "./stepModal.svelte";

  export let okCallback: () => any;
</script>

<StepModal>
  <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
    <div class="sm:flex sm:items-start">
      <div class="mt-3 sm:mt-0 sm:ml-4 sm:text-left">
        <h1 class="text-gray-800 text-center text-lg font-bold">Success!</h1>
        <img class="mx-auto" src="success.gif" alt="Success!" />
        <p class=" text-gray-600 text-center">
          Raportul tău a fost trimis cu success! Îți mulțumim pentru ajutor 💖
        </p>
      </div>
    </div>
  </div>
  <div
    class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-col sm:justify-center text-center"
  >
    <button
      type="button"
      class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
      on:click={okCallback}
    >
      Închide
    </button>
    <small class="text-gray-300">
      Animație creată de <a
        class="text-gray-400"
        href="https://lottiefiles.com/13816-confirmation-animation#"
      >
        Carlos E. Ochoa
      </a>
    </small>
  </div>
</StepModal>
