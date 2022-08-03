<script lang="ts">
  import { intl } from "../../stores";

  export let id: string;
</script>

<input type="checkbox" {id} class="modal-toggle" />
<div class="modal modal-bottom sm:modal-middle">
  <div class="modal-box">
    <h3 class="font-bold text-lg">
      {$intl.bottomControls.regionChangeModal.title}
    </h3>
    <p class="py-4">
      {@html $intl.bottomControls.regionChangeModal.bodyHTML}
    </p>
    <div class="modal-action">
      <label for={id} class="btn">
        {$intl.bottomControls.regionChangeModal.save}
      </label>
    </div>
  </div>
</div>
