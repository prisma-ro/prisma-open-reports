<script lang="ts">
  let hours: string;
  let minutes: string;

  export const time = `${hours}.${minutes}`;
</script>

<div
  class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
>
  <div class="flex justify-center">
    <select
      name="hours"
      class="bg-transparent appearance-none outline-none"
      bind:value={hours}
    >
      {#each [...[...Array(24).keys()].map((e) => e + 1)] as hr}
        <option value={hr}>{hr}</option>
      {/each}
    </select>
    <span class="text-xl mr-3">:</span>
    <select
      name="minutes"
      class="bg-transparent appearance-none outline-none"
      bind:value={minutes}
    >
      {#each ["00", "15", "30", "45"] as min}
        <option value={min}>{min}</option>
      {/each}
    </select>
  </div>
</div>
