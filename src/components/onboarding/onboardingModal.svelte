<script lang="ts">
  import { onMount } from "svelte";
  import IntroTile from "./introTile.svelte";

  export let id: string;
  let modal: HTMLElement;

  onMount(() => {
    modal.classList.add("modal-open");
  });
</script>

<input type="checkbox" {id} class="modal-toggle" />
<div bind:this={modal} class="modal modal-bottom sm:modal-middle">
  <div class="modal-box">
    <h3 class="font-bold text-lg">Bun venit!</h3>
    <div class="my-4 flex flex-col">
      <span>Pentru inceput, îți mulțumim că ne ajuți ❤️</span>
      <span class="text-sm">
        Uite ce trebuie să faci pentru a ne spune ce s-a întâmplat:
      </span>
      <div class="my-1">
        <IntroTile
          title="Pasul 1:"
          text="Intră în modul de adăugare apăsând butonul din dreapta jos"
        />
        <IntroTile
          title="Pasul 2:"
          text="Apasă oriunde pe hartă pentru a adăuga un incident"
        />
        <IntroTile
          title="Pasul 3:"
          text="Ne mai dai încă câteva detalii, apeși 'Trimite' și gata, raportul a ajuns la noi 🌟"
        />
      </div>
      <hr class="mb-1" />
      <span class="text-sm">
        <IntroTile
          title="Dorești doar să descoperi rapoartele deja existente?"
          text="Apasă pe unul dintre ele!"
        />
        <span class="text-xs">
          <span class="font-bold">Tips: </span> Pentru mai multe opțiuni, precum
          regiunea rapoartelor apasă butonul din stânga jos!
        </span>

        <!-- Dacă doar dorești să descoperi rapoartele deja existente, doar apasă pe
        unul dintre ele!
        <br />
        <span class="text-primary">
          <span class="font-bold">Tips: </span> Pentru mai multe opțiuni, precum
          regiunea rapoartelor apasă butonul din stânga jos!
        </span> -->
      </span>
      <hr class="mt-2 mb-4" />
      <span>Dorim să colectăm date statistice, ești de acord?</span>
      <span class="text-sm">
        <span class="font-bold">Stai fără griji!</span> Rapoartele tale vor fi
        anonime pentru totdeauna!
        <a
          class="text-primary"
          href="https://www.prisma-safety.com/privacy"
          target="_blank"
          rel="noopener"
        >
          Consultă Politica de Confidențialitate
        </a>
      </span>
      <div class="flex flex-col my-2">
        <div class="btn btn-ghost btn-sm normal-case">
          Nu, continuă fără cookies
        </div>
        <div class="btn btn-primary normal-case mt-1">Sigur, e ok!</div>
      </div>
    </div>
  </div>
</div>
