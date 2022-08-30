<script lang="ts">
  import { supabaseClient } from "../../constants";
  import { intl } from "../../stores";

  console.log(supabaseClient.auth.user());
</script>

<div class="my-2 flex flex-col">
  <h1 class="font-bold text-lg">{$intl.account.yourAccount}</h1>

  {supabaseClient.auth.user()?.id}

  <button
    on:click={async () => {
      const { error } = await supabaseClient.auth.signOut();

      if (error) {
        alert(error);
      } else {
        window.location.reload();
      }
    }}>Logout</button
  >
</div>
