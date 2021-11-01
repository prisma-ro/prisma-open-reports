<script lang="ts">
  export let title: string;
  export let text: string;
</script>

<div
  class="flex bg-purple-100 rounded-lg p-4 mb-4 text-sm text-prisma-purple-300"
>
  <div>
    <span class="font-medium">{title}</span>
    {text}
  </div>
</div>
