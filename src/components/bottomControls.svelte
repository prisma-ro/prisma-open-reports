<script lang="ts">
  import { SettingsService } from "../lib/settingsService";
  import { intl } from "../stores";

  const s = SettingsService.instance;

  let useSatellite: boolean = s.settings.useSatellite;

  const onChangeUseSatellite = () => {
    s.settings.useSatellite = useSatellite;
    s.applyUpdate();
  };
</script>

<!-- Update Map Region Modal -->
<input type="checkbox" id="update-region-modal" class="modal-toggle" />
<div class="modal modal-bottom sm:modal-middle">
  <div class="modal-box">
    <h3 class="font-bold text-lg">
      {$intl.bottomControls.regionChangeModal.title}
    </h3>
    <p class="py-4">
      {@html $intl.bottomControls.regionChangeModal.bodyHTML}
    </p>
    <div class="modal-action">
      <label for="update-region-modal" class="btn">
        {$intl.bottomControls.regionChangeModal.save}
      </label>
    </div>
  </div>
</div>
<!-- END:Update Map Region Modal -->

<section
  class="fixed flex justify-between py-2 px-6 z-30 bottom-8 right-1/2 transform translate-x-1/2 w-full md:w-auto md:bottom-10 md:right-10 md:translate-x-0 md:rounded-xl md:bg-white md:bg-opacity-60"
>
  <div class="dropdown dropdown-top md:mr-6">
    <!-- svelte-ignore a11y-label-has-associated-control -->
    <label
      tabindex="0"
      class="btn btn-ghost btn-circle glassmorphism text-primary border-2 border-gray-200"
    >
      <svg
        class="h-6 w-6"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        fill="currentColor"
      >
        <!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc.-->
        <path
          d="M495.9 166.6c3.3 8.6.5 18.3-6.3 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4 0 8.6-.6 17.1-1.7 25.4l43.3 39.4c6.8 6.3 9.6 16 6.3 24.6-4.4 11.9-9.7 23.4-15.7 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.3-6 7.1-15.7 9.6-24.5 6.8l-55.7-17.8c-13.4 10.3-29.1 18.9-44 25.5l-12.5 57.1c-2 9-9 15.4-18.2 17.8-13.8 2.3-28 3.5-43.4 3.5-13.6 0-27.8-1.2-41.6-3.5-9.2-2.4-16.2-8.8-18.2-17.8l-12.5-57.1c-15.8-6.6-30.6-15.2-44-25.5l-55.66 17.8c-8.84 2.8-18.59.3-24.51-6.8a262.4 262.4 0 0 1-22.11-31.3l-4.68-8.1a249.41 249.41 0 0 1-15.78-34.3c-3.24-8.6-.51-18.3 6.35-24.6l43.26-39.4a193.5 193.5 0 0 1 0-50.8l-43.26-39.4c-6.86-6.3-9.59-15.9-6.35-24.6a250.6 250.6 0 0 1 15.78-34.3l4.67-8.1c6.61-11 14.01-21.4 22.12-31.25 5.92-7.15 15.67-9.63 24.51-6.81l55.66 17.76a192.31 192.31 0 0 1 44-25.47l12.5-57.1c2-9.08 9-16.29 18.2-17.82C227.3 1.21 241.5 0 256 0s28.7 1.2 42.5 3.51c9.2 1.53 16.2 8.74 18.2 17.82l12.5 57.1c14.9 6.53 30.6 15.13 44 25.47l55.7-17.76c8.8-2.82 18.5-.34 24.5 6.81a258.9 258.9 0 0 1 22.1 31.25l4.7 8.1c6 10.9 11.3 22.4 15.7 34.3zM256 336c44.2 0 80-35.8 80-80.9 0-43.3-35.8-80-80-80s-80 36.7-80 80c0 45.1 35.8 80.9 80 80.9z"
        />
      </svg>
    </label>
    <ul
      tabindex="0"
      class="dropdown-content menu mb-3 p-2 shadow bg-base-100 rounded-box w-52"
    >
      <li>
        <div class="form-control hover:bg-zinc-200">
          <label class="label cursor-pointer">
            <span class="mr-8">{$intl.bottomControls.satellite}</span>
            <input
              type="checkbox"
              class="toggle toggle-primary"
              bind:checked={useSatellite}
              on:change={onChangeUseSatellite}
            />
          </label>
        </div>
      </li>
      <hr />
      <div class="w-full mt-2 text-center">
        {$intl.bottomControls.region}: 🇷🇴
      </div>
      <li>
        <label for="update-region-modal" class="btn btn-ghost normal-case">
          {$intl.bottomControls.change}
        </label>
      </li>
    </ul>
  </div>

  <!-- Right -->
  <button
    class="btn btn-ghost rounded-xl glassmorphism text-primary border-2 border-gray-200 normal-case"
  >
    {$intl.bottomControls.addReport}
  </button>
</section>
