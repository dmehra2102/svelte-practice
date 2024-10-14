<script>
  import settings from "../stores/setting.js";
  import location from "../stores/location.js";
</script>

<div>
  {#if $location && !$location.error}
    <p>Latitude : {$location?.latitude} - Longitude : {$location?.longitude}</p>
  {/if}

  {#if $location && $location.error}
    <p>{$location.error}</p>
  {/if}
</div>

<div>
  <h1>{$settings.colorScheme}</h1>
  <h2>Home Page</h2>
</div>
