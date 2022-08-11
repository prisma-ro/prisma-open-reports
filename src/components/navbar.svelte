<script lang="ts">
  import { HistoryManager } from "../lib/historyManager";
  import { changePage, currentSettings } from "../stores";
  import { Language, TranslationProvider } from "../i18n/provider";
  import { intl } from "../stores";

  const updateLanguage = (lang: Language) => {
    console.log(`[Navbar] Updating language to ${lang}`);
    TranslationProvider.updateLanguage(lang);
  };

  const goTo = (page: PrismaPage) => {
    changePage(page);
    HistoryManager.goTo(page);
  };

  const login = () => {
    alert("todo");
  };
</script>

<nav
  class="navbar absolute top-0 z-20 border-b border-b-gray-200 glassmorphism select-none {$currentSettings.useSatellite
    ? 'bg-white bg-opacity-75'
    : ''}"
>
  <div class="navbar-start">
    <div class="dropdown">
      <!-- svelte-ignore a11y-label-has-associated-control -->
      <label tabindex="0" class="btn btn-ghost btn-circle">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h7"
          />
        </svg>
      </label>
      <ul
        tabindex="0"
        class="menu menu-compact dropdown-content mt-6 p-2 shadow bg-base-100 rounded-box w-52"
      >
        <li>
          <button
            class="btn-ghost"
            on:click={() => {
              goTo("about");
            }}
          >
            {$intl.navbar.about}
          </button>
        </li>
        <li><button class="btn-ghost"> {$intl.navbar.help} </button></li>
        <li>
          <button
            class="btn-ghost"
            on:click={() => {
              goTo("dataProtection");
            }}
          >
            {$intl.navbar.dataProtection}
          </button>
        </li>
        <hr class="my-2" />
        <li>
          <button
            class="btn btn-primary normal-case text-white"
            on:click={login}
          >
            {$intl.navbar.login}
          </button>
        </li>
        <li>
          <a
            class="btn-ghost btn-sm my-1"
            href="https://www.prisma-safety.com/"
            rel="noopener"
            target="_blank"
          >
            {$intl.navbar.more}
          </a>
        </li>
      </ul>
    </div>
  </div>

  <div class="navbar-center flex flex-col items-center">
    <a href="/" class="font-semibold py-1 text-xl"> Prisma Reports </a>
    <div
      class="tooltip tooltip-bottom tooltip-accent"
      data-tip={$intl.navbar.mode.tooltipView}
    >
      <div class="badge badge-ghost badge-outline">
        {$intl.navbar.mode.view}
      </div>
    </div>
  </div>

  <div class="navbar-end flex">
    <div class="dropdown dropdown-end">
      <!-- svelte-ignore a11y-label-has-associated-control -->
      <label tabindex="0" class="btn btn-ghost btn-circle">
        <svg
          class="h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 640 512"
          fill="currentColor"
        >
          <!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc.-->
          <path
            d="M448 164c11 0 20 8.1 20 20v4h60c11 0 20 8.1 20 20 0 11-9 20-20 20h-2l-1.6 4.5c-8.9 23.6-22.5 46.6-39.7 65.4.9.5 1.8.2 2.7 1.6l18.9 11.3c9.5 5.7 12.5 18 6.8 27.5a19.87 19.87 0 0 1-27.4 6.8l-18.9-11.3c-4.4-2.7-9.7-5.5-13.1-8.5-10.5 7.5-21.9 14-33.9 19.4l-3.7 1.6a20 20 0 1 1-16.2-36.6l3.6-1.6c6.4-2.9 12.6-7 18.5-9.8l-12.1-12.2c-7.9-7.8-7.9-20.4 0-28.2 7.8-7.9 20.4-7.9 28.2 0l14.6 14.5.6-.3c12.4-12.2 22.5-27.4 29.8-45H376c-11.9 0-20-8.1-20-20 0-11 8.1-20 20-20h52v-4c0-11 8.1-20 20-20v.9zm-288 69.2 19 42.8h-38.9l19.9-42.8zM0 128a64 64 0 0 1 64-64h512c35.3 0 64 28.65 64 64v256c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V128zm320 256h256V128H320v256zM178.3 175.9A20.08 20.08 0 0 0 160 164c-7.9 0-15.1 4.7-18.3 11.9l-63.98 144c-4.48 9.2.06 21.9 10.16 26.4a20.03 20.03 0 0 0 26.42-10.2l8.9-21h73.6l8.9 21a20 20 0 0 0 26.4 10.2c10.1-4.5 14.7-17.2 10.2-26.4l-64-144z"
          />
        </svg>
      </label>
      <ul
        tabindex="0"
        class="menu dropdown-content p-2 shadow bg-base-100 rounded-box w-52 mt-6"
      >
        <li>
          <button
            class="btn btn-ghost"
            on:click={() => {
              updateLanguage("ro-RO");
            }}
          >
            🇷🇴 - Română
          </button>
        </li>
        <li>
          <button
            class="btn btn-ghost"
            on:click={() => {
              updateLanguage("en-GB");
            }}
          >
            🇬🇧 - English
          </button>
        </li>
      </ul>
    </div>
  </div>
</nav>

<!-- <script lang="ts">
  import { HistoryManager } from "../lib/historyManager";

  import { changePage } from "../stores";

  export let showInfoModal: boolean;

  let showMenu = false;
  const toggleMenu = () => {
    showMenu = !showMenu;
  };
</script>

<div
  class="w-full absolute top-0 z-10 text-gray-700 bg-transparent pt-5 px-2 select-none"
>
  <div
    class="flex flex-col max-w-screen-xl bg-white {showMenu
      ? 'rounded-xl'
      : 'rounded-full'} shadow-lg px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8"
  >
    <div class="flex flex-row items-center justify-between p-4 select-none">
      <button
        on:click={() => {
          changePage("map");
          HistoryManager.goTo("map");
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
          HistoryManager.goTo("about");
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
        Ajutor
      </button>
      <button
        on:click={() => {
          changePage("dataProtection");
          HistoryManager.goTo("dataProtection");
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
</div> -->
