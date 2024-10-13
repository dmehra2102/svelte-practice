<script>
  import { onMount } from "svelte";
  import Head from "./lib/Head.svelte";
  import Home from "./pages/Home.svelte";
  import Setting from "./pages/Setting.svelte";

  let page;

  function handleRouteChange(){
    const path = window.location.hash.slice(1);

    if(path === "/"){
      page = "home";
    }else if(path === "/settings"){
      page = "settings";
    }else{
      page = "/";
    }
  }

  onMount(()=>{
    handleRouteChange();
  })
</script>

<Head />

<!-- This is the svelte component which bind to window -->
<svelte:window on:hashchange={handleRouteChange} />

<nav>
  <a href="#/">Home</a>
  <a href="#/settings">Setting</a>
</nav>

{#if page === "settings"}
  <Setting />
{:else if page === "home"}
  <Home />
{/if}
