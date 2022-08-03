<script lang="ts">
  import { AVAILABLE_COUNTRIES } from "../../constants";
  import type { Country } from "../../constants";
  import { intl, isLoading } from "../../stores";
  import { SettingsService } from "../../lib/settingsService";
  import type { Settings_SelectedCountries } from "../../models/settings";
  import { ReportsService } from "../../lib/reportsService";

  export let id: string;
  export let selectedCountries: Country[];

  const onCountryClicked = (country: Country) => {
    if (selectedCountries.includes(country)) {
      selectedCountries = selectedCountries.filter((c) => c != country);
    } else {
      selectedCountries = [...selectedCountries, country];
    }
  };

  const onSaveClicked = async (ev: Event) => {
    isLoading.set(true);

    const s = SettingsService.instance;
    s.settings.selectedCountries = selectedCountries.map(
      (c) => c.countryCode
    ) as Settings_SelectedCountries;
    s.applyUpdate();

    await ReportsService.fetchReports();

    isLoading.set(false);
  };
</script>

<input type="checkbox" {id} class="modal-toggle" />
<div class="modal modal-bottom sm:modal-middle">
  <div class="modal-box">
    <h3 class="font-bold text-lg">
      {$intl.bottomControls.regionChangeModal.title}
    </h3>
    <div class="my-4 flex flex-row">
      {#each Object.values(AVAILABLE_COUNTRIES) as country}
        <button
          class="btn btn-accent btn-outline gap-2 mr-4"
          on:click={() => {
            onCountryClicked(country);
          }}
        >
          {#if selectedCountries.includes(country)}
            <svg
              class="h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              fill="currentColor"
            >
              <!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
              <path
                d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM371.8 211.8C382.7 200.9 382.7 183.1 371.8 172.2C360.9 161.3 343.1 161.3 332.2 172.2L224 280.4L179.8 236.2C168.9 225.3 151.1 225.3 140.2 236.2C129.3 247.1 129.3 264.9 140.2 275.8L204.2 339.8C215.1 350.7 232.9 350.7 243.8 339.8L371.8 211.8z"
              />
            </svg>
          {:else}
            <svg
              class="h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              fill="currentColor"
            >
              <!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
              <path
                d="M175 175C184.4 165.7 199.6 165.7 208.1 175L255.1 222.1L303 175C312.4 165.7 327.6 165.7 336.1 175C346.3 184.4 346.3 199.6 336.1 208.1L289.9 255.1L336.1 303C346.3 312.4 346.3 327.6 336.1 336.1C327.6 346.3 312.4 346.3 303 336.1L255.1 289.9L208.1 336.1C199.6 346.3 184.4 346.3 175 336.1C165.7 327.6 165.7 312.4 175 303L222.1 255.1L175 208.1C165.7 199.6 165.7 184.4 175 175V175zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z"
              />
            </svg>
          {/if}
          {country.emojiFlag}
        </button>
      {/each}
    </div>

    <p class="py-2 text-justify text-sm">
      {@html $intl.bottomControls.regionChangeModal.bodyHTML}
    </p>

    <div class="modal-action">
      <label
        for={id}
        class="btn btn-primary {$isLoading ? 'loading disabled' : ''}"
        on:click|once={onSaveClicked}
      >
        {$intl.bottomControls.regionChangeModal.save}
      </label>
    </div>
  </div>
</div>
