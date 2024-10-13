<script>
  import settings from "../stores/setting.js";

</script>

<div>
  <h2>Setting Page</h2>

  <div>
    <label>
      <input
        type="radio"
        bind:group={$settings.colorScheme}
        name="colorScheme"
        value="dark"
      /> Dark
    </label>
    <label>
      <input
        type="radio"
        bind:group={$settings.colorScheme}
        name="colorScheme"
        value="light"
      /> Light
    </label>
  </div>
</div>
