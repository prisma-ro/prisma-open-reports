<script lang="ts">
  export let onClickCallback: () => any;
  export let hide: boolean = false;
  
  let isLoading = false;
</script>

<button
  class="{hide ? 'hidden' : 'fixed'} p-2 z-30 {isLoading ? 'w-1/2' : 'w-5/6'} bottom-8 right-1/2 transform translate-x-1/2 md:w-auto md:bottom-10 md:right-4 md:translate-x-0 rounded-full text-white {isLoading ? 'bg-gray-500' : 'bg-prisma-purple-400'} active:shadow-lg shadow focus:outline-none"
  style="transition: width .3s ease-in-out, background-color .1s ease-in;"
  disabled={isLoading}
  on:click={() => {
    if (isLoading) return;

    isLoading = true;
    onClickCallback();
  }}
>
  <div
    class="flex flex-row items-center justify-center px-2"
  >
    <svg
      class="h-5 w-5 mr-2 text-white"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <!--! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc.-->
      <path
        fill="currentColor"
        d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm-24 152c0-13.2 10.8-24 24-24s24 10.75 24 24v128a24 24 0 0 1-48 0V152zm24 248a31.44 31.44 0 1 1 .01-62.89A31.44 31.44 0 0 1 256 400z"
      />
    </svg>
    <span class="whitespace-nowrap">
      {isLoading ? "Se încarcă" : "Vezi rapoartele altor persoane"}
    </span>
  </div>
</button>
