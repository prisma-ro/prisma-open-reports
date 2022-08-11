<script lang="ts">
  export let title: string;
  export let text: string;
  export let isPrimary: boolean = true;
</script>

<div
  class="flex rounded-lg p-3 my-2 text-sm {isPrimary
    ? 'bg-purple-100 text-primary'
    : 'bg-prisma-fuchsia-100 bg-opacity-10 text-accent'}"
>
  <div>
    <span class="font-bold">{title}</span>
    {text}
  </div>
</div>
