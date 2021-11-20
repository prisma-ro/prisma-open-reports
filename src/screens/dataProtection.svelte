<script lang="ts">
  import { onMount } from "svelte";
  import { MixpanelService } from "../lib/mixpanel";

  onMount(() => {
    MixpanelService.event("Page View", { page: "Data Protection" });
  });

  const getCookieStatus = (): string => {
    // @ts-expect-error
    return window.PRISMA_STAT_INIT ? "active" : "inactive";
  };
</script>

<section class="mt-32 mx-4 md:mx-64">
  <h1
    class="font-extrabold leading-10 tracking-tight text-center text-gray-900 sm:leading-none"
  >
    <span
      class="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-prisma-purple-500 to-purple-800 md:text-6xl lg:text-8xl"
    >
      Protejarea Datelor Tale
    </span>
    <br />
    <br />
    <span class="text-2xl md:block md:text-3xl lg:text-4xl">
      Toate rapoartele furnizate sunt anonime.
    </span>
  </h1>

  <p class="my-4 md:my-12 md:mx-24 text-justify md:text-xl">
    La Prisma, protectia datelor tale e principala noastră prioritate.
  </p>

  <p class="my-4 md:my-12 md:mx-24 text-justify md:text-xl">
    Vrem să știi că pe platforma Open Reports nu colectăm date cu caracter
    personal, mai exact nu colectăm:
  </p>
  <ul class="mx-8 mb-4 list-disc md:my-12 md:mx-36 md:text-xl">
    <li>
      Nume (și din considerente legale te rugam si pe tine să nu incluzi nume de
      persoane în descrierea raportului)
    </li>
    <li>
      Adresa / Locatia ta (ne intereseaza locatia unde s-a întâmplat incidentul)
    </li>
    <li>Identificatori (Cookie-uri / Adrese IP)</li>
  </ul>

  <span
    class="my-4 md:my-12 md:mx-24 text-3xl md:block md:text-3xl lg:text-4xl"
  >
    Mai multe detalii
  </span>

  <p class="my-4 md:my-12 md:mx-24 md:text-xl">
    Pentru mai multe detalii te invitam sa citești
    <br class="md:hidden" />
    <br class="md:hidden" />
    <a
      href="https://www.prisma-safety.com/privacy"
      target="_blank"
      rel="noopener"
      class="px-4 py-2 md:ml-2 text-sm text-left font-semibold bg-transparent rounded-lg text-prisma-purple-500 hover:text-prisma-purple-600 focus:text-prisma-purple-600 hover:bg-gray-200 focus:bg-gray-200 border-2 border-prisma-purple-500"
    >
      Politica noastră de confidențialitate
    </a>
  </p>

  <p class="my-6 md:my-12 md:mx-24 text-justify text-gray-500 md:text-xl">
    Datele colectate sunt supuse <a
      href="docs/Acord-Prelucrarea-Datelor-Furnizate-pe-Platforma-Open-Reports.pdf"
      class="text-gray-800"
    >
      Acordului de Prelucrare a Datelor Furnizate
    </a>.
  </p>

  <hr class="my-5 mx-2" />

  <span
    class="my-4 md:my-12 md:mx-24 text-3xl md:block md:text-3xl lg:text-4xl"
  >
    Cookies
  </span>

  <p class="my-4 md:my-12 md:mx-24 md:text-xl">
    Status cookie-uri: {getCookieStatus()}
    <br />
    Poți oricând să
    <span
      class="text-prisma-purple-500 cursor-pointer"
      on:click={() => {
        MixpanelService.clearStorage();
        setTimeout(() => {
          window.location.reload();
        }, 500);
      }}
    >
      ștergi setările de pe Open Reports
    </span>.
  </p>
</section>
