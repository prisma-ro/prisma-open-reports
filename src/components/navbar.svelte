<script lang="ts">
  import { changePage } from "../stores";

  export let showInfoModal;

  let showMenu = false;
  const toggleMenu = () => {
    showMenu = !showMenu;
  };
</script>

<div class="w-full absolute top-0 z-10 text-gray-700 bg-transparent pt-5 px-2">
  <div
    class="flex flex-col max-w-screen-xl bg-white {showMenu
      ? 'rounded-xl'
      : 'rounded-full'} shadow-lg px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8"
  >
    <div class="flex flex-row items-center justify-between p-4 select-none">
      <button
        on:click={() => {
          changePage("map");
          showMenu = false;
        }}
        class="text-lg text-gray-900 rounded-lg focus:outline-none focus:shadow-outline"
      >
        <span class="text-prisma-purple-500 font-semibold"> Prisma </span>
        <span class="ml-1"> Open Reports </span>
      </button>
      <button
        class="rounded-lg md:hidden focus:outline-none focus:shadow-outline"
        on:click={toggleMenu}
      >
        <svg fill="currentColor" viewBox="0 0 20 20" class="w-6 h-6">
          {#if showMenu}
            <path
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          {:else}
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
              clip-rule="evenodd"
            />
          {/if}
        </svg>
      </button>
    </div>
    <nav
      class="flex-col flex-grow pb-4 md:pb-0 justify-start md:flex md:justify-end md:flex-row {showMenu
        ? 'flex'
        : 'hidden'}"
    >
      <button
        on:click={() => {
          changePage("about");
          showMenu = false;
        }}
        class="px-4 py-2 mt-2 text-sm text-left font-semibold bg-transparent rounded-lg md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
      >
        Despre
      </button>
      <button
        on:click={() => {
          showInfoModal = true;
          showMenu = false;
        }}
        class="px-4 py-2 mt-2 text-sm text-left font-semibold bg-transparent rounded-lg md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
      >
        Cum poți ajuta
      </button>
      <button
        on:click={() => {
          changePage("dataProtection");
          showMenu = false;
        }}
        class="px-4 py-2 mt-2 text-sm text-left font-semibold bg-transparent rounded-lg md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
      >
        Protecția Datelor
      </button>
      <a
        href="https://www.prisma-safety.com"
        target="_blank"
        rel="noopener"
        class="px-4 py-2 mt-2 text-sm text-left font-semibold bg-transparent rounded-lg md:mt-0 md:ml-4 text-prisma-purple-500 hover:text-prisma-purple-600 focus:text-prisma-purple-600 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
      >
        Află mai multe despre Prisma
      </a>
    </nav>
  </div>
</div>
