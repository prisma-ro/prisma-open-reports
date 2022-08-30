<script lang="ts">
  export let imgSrc: string;
  export let imgAlt: string;
  export let onClick: () => void;
</script>

<button
  class="btn btn-ghost bg-gray-200 gap-2 mx-2 grow prisma_provider-button"
  on:click={onClick}
>
  <img src={imgSrc} alt={imgAlt} height="24px" width="24px" />
</button>

<style>
  .prisma_provider-button:first-child {
    margin-left: 0px;
  }

  .prisma_provider-button:last-child {
    margin-right: 0px;
  }
</style>
