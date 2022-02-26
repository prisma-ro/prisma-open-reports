<script lang="ts">
  // Copy&Pasted from 'prisma-account'
  export let selectedDate: Date;

  let selectedDay: any;
  let selectedMonth: any;
  let selectedYear: any;
  // Src: https://stackoverflow.com/questions/315760/what-is-the-best-way-to-determine-the-number-of-days-in-a-month-with-javascript
  function daysInMonth(month, year) {
    // Use 1 for January, 2 for February, etc.
    return new Date(year, month, 0).getDate();
  }
  const onchange = (event: any) => {
    if (selectedDay > daysInMonth(selectedMonth - 1, selectedYear)) {
      selectedDay = daysInMonth(selectedMonth - 1, selectedYear);
    } else {
      let d = new Date();
      d.setFullYear(selectedYear, selectedMonth - 1, selectedDay);
      if (d.toString() !== "Invalid Date") {
        selectedDate = d;
        // console.log(selectedDate);
      }
    }
  };
</script>

<div class="flex flex-row">
  <select
    class="bg-gray-200 appearance-none text-center border-2 border-gray-200 rounded w-1/3 mx-1 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-prisma-purple-100"
    name="dp-day"
    id="dp-day"
    bind:value={selectedDay}
    on:change={onchange}
  >
    <option class="text-gray-700 block text-sm" selected disabled hidden>
      Zi
    </option>
    {#each [...[...Array(31).keys()].map((e) => e + 1)] as d}
      <option class="text-gray-700 block text-sm">
        {d}
      </option>
    {/each}
  </select>

  <select
    class="bg-gray-200 appearance-none text-center border-2 border-gray-200 rounded w-1/3 mx-1 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-prisma-purple-100"
    name="dp-mth"
    id="dp-mth"
    bind:value={selectedMonth}
    on:change={onchange}
  >
    <option class="text-gray-700 block text-sm" selected disabled hidden>
      Lună
    </option>
    {#each [...[...Array(12).keys()].map((e) => e + 1)] as m}
      <option class="text-gray-700 block text-sm">
        {m}
      </option>
    {/each}
  </select>

  <select
    class="bg-gray-200 appearance-none text-center border-2 border-gray-200 rounded w-1/3 mx-1 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-prisma-purple-100"
    name="dp-year"
    id="dp-year"
    bind:value={selectedYear}
    on:change={onchange}
  >
    <option class="text-gray-700 block text-sm" selected disabled hidden>
      An
    </option>
    {#each [...[...Array(5).keys()].map((e) => new Date().getFullYear() - e)] as y}
      <option class="text-gray-700 block text-sm">
        {y}
      </option>
    {/each}
  </select>
</div>