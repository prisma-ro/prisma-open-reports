<script lang="ts">
  import IntroTile from "./introTile.svelte";

  export let modalShown: boolean;

  const hide = (acceptCookies: boolean) => {
    document.querySelector("body")?.classList.remove("overflow-hidden");
    modalShown = false;

    window.localStorage.setItem("shownIntroAt", new Date().toISOString());

    if (acceptCookies) {
      window.localStorage.setItem(
        "acceptedCookies",
        `yes+statistics+${new Date().toISOString()}`
      );
    }
  };
</script>

<div
  class="fixed z-20 inset-0 overflow-y-auto"
  aria-labelledby="modal-title"
  role="dialog"
  aria-modal="true"
>
  <div
    class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
  >
    <div
      class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
      aria-hidden="true"
    />

    <!-- This element is to trick the browser into centering the modal contents. -->
    <span
      class="hidden sm:inline-block sm:align-middle sm:h-screen"
      aria-hidden="true">&#8203;</span
    >

    <div
      class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
    >
      <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
        <div class="sm:flex sm:items-start">
          <div
            class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-purple-100 sm:mx-0 sm:h-10 sm:w-10"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              class="h-6 w-6 text-prisma-purple-300"
              viewBox="0 0 192 512"
            >
              <path
                fill="currentColor"
                d="M20 424.23h20V279.77H20a20 20 0 0 1-20-20V212a20 20 0 0 1 20-20h112a20 20 0 0 1 20 20v212.23h20a20 20 0 0 1 20 20V492a20 20 0 0 1-20 20H20a20 20 0 0 1-20-20v-47.77a20 20 0 0 1 20-20zM96 0a72 72 0 1 0 0 144A72 72 0 0 0 96 0z"
              />
            </svg>
          </div>
          <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
            <h3
              class="text-lg leading-6 font-medium text-gray-900"
              id="modal-title"
            >
              Bun venit
            </h3>
            <div class="mt-2">
              <p class="text-sm text-gray-600 mb-2">
                Pentru inceput, îți mulțumim că ne ajuți ❤️
                <br />
                Uite ce trebuie să faci pentru a ne spune ce s-a întâmplat:
              </p>

              <IntroTile
                title="Pasul 1:"
                text="Apasă oriunde pe hartă pentru a adauga un incident"
              />
              <IntroTile
                title="Pasul 2:"
                text="Apeși butonul 'Continuă' și ne mai dai încă câteva detalii"
              />
              <IntroTile
                title="Pasul 3:"
                text="Apeși 'Trimite' și gata, raportul a ajuns la noi 🌟"
              />

              <p class="text-sm text-gray-400">
                Poți revedea oricând acest mesaj dacă mergi în meniu si apeși pe
                'Ajutor'
              </p>

              <hr class="my-2" />

              <p class="text-sm text-gray-500 font-bold">
                Prin apăsarea butonului 'Ok' îți exprimi acordul ca Prisma să
                stocheze cookie-uri folosite pentru statistici pe device-ul tău.
                Poți consulta Politica noastră de Confidențialitate
                <a
                  href="https://www.prisma-safety.com/privacy"
                  target="_blank"
                  rel="noopener"
                >
                  aici
                </a>
              </p>

              <p
                class="mt-2 text-sm text-prisma-purple-500 font-bold cursor-pointer"
                on:click={() => {hide(false)}}
              >
                Continuă fară cookie-uri
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
        <button
          type="button"
          class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-prisma-purple-500 text-base font-medium text-white hover:bg-prisma-purple-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-prisma-purple-300 sm:ml-3 sm:w-auto sm:text-sm"
          on:click={() => {hide(true)}}
        >
          Ok
        </button>
      </div>
    </div>
  </div>
</div>
