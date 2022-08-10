<script lang="ts">
  export let title: string;
  export let text: string;
</script>

<div
  class="flex bg-purple-100 rounded-lg p-3 my-2 text-sm text-primary"
>
  <div>
    <span class="font-bold">{title}</span>
    {text}
  </div>
</div>
