<script lang="ts">
  let hours: string = '1';
  let minutes: string = '00';

  export let time: string;

  const setTime = () => {
    time = `${hours}.${minutes}`;
  }
</script>

<div
  class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
>
  <div class="flex justify-center">
    <select
      name="hours"
      class="bg-transparent appearance-none outline-none"
      bind:value={hours}
      on:change={setTime}
    >
      <!-- vvv Used to artificially make the select dropdown wider -->
      <option value="wwwww" hidden aria-hidden="true">wwwww</option>
      {#each [...[...Array(24).keys()].map((e) => (e + 1).toString())] as hr}
        <option class="block w-10 text-center" value={hr}>{hr}</option>
      {/each}
    </select>
    <span class="text-xl">:</span>
    <select
      name="minutes"
      class="bg-transparent appearance-none outline-none"
      bind:value={minutes}
      on:change={setTime}
    >
      <!-- vvv Used to artificially make the select dropdown wider -->
      <option value="wwwww" hidden aria-hidden="true">wwwww</option>
      {#each ["00", "15", "30", "45"] as min}
        <option class="block w-10 text-center" value={min}>{min}</option>
      {/each}
    </select>
  </div>
</div>
