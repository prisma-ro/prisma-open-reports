<script lang="ts">
  import Account from "./_account.svelte";
  import Login from "./_login.svelte";

  import { supabaseClient } from "../../constants";
  import { isAccountModalOpen } from "../../stores";
</script>

{#if $isAccountModalOpen}
  <aside
    class="modal modal-bottom modal-open sm:modal-middle select-none z-40"
  >
    <div class="modal-box relative">
      <!-- Close button -->
      <button
        class="btn btn-circle btn-ghost absolute right-2 top-2"
        on:click={() => {
          isAccountModalOpen.set(false);
        }}
      >
        ✕
      </button>

      <!-- Main content -->
      {#if supabaseClient.auth.user()}
        <Account />
      {:else}
        <Login />
      {/if}
      <!-- END: Main content -->
    </div>
  </aside>
{/if}
