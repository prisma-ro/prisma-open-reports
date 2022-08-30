<script lang="ts">
  import { AUTH_REDIRECT_TO, supabaseClient } from "../../constants";
  import { intl } from "../../stores";
  import type { Provider } from "@supabase/supabase-js";
  import LoginProviderButton from "./_loginProviderButton.svelte";

  const loginWithProvider = async (provider: Provider) => {
    await supabaseClient.auth.signIn(
      { provider },
      { redirectTo: AUTH_REDIRECT_TO }
    );
  };
</script>

<div class="my-2 flex flex-col">
  <h1 class="font-bold text-lg md:mx-2 md:mb-4">{$intl.account.yourAccount}</h1>
  <h2 class="md:mx-2">{@html $intl.account.login.promptHTML}</h2>

  <div class="my-4 md:mx-2 flex flex-row justify-evenly">
    <LoginProviderButton
      imgSrc="/logos/google.png"
      imgAlt="Google"
      onClick={() => {
        loginWithProvider("google");
      }}
    />
    <LoginProviderButton
      imgSrc="/logos/facebook.png"
      imgAlt="Facebook"
      onClick={() => {
        loginWithProvider("facebook");
      }}
    />
    <LoginProviderButton
      imgSrc="/logos/twitter.png"
      imgAlt="Twitter"
      onClick={() => {
        loginWithProvider("twitter");
      }}
    />
    <LoginProviderButton
      imgSrc="/logos/apple.png"
      imgAlt="Apple"
      onClick={() => {
        loginWithProvider("apple");
      }}
    />
  </div>

  <hr class="my-3" />

  <p class="my-2 md:mx-2 text-gray-600">{$intl.account.login.dataPrivacy}</p>

  <small class="md:mx-2 text-gray-500">
    {@html $intl.account.login.noticeHTML}
  </small>
</div>
