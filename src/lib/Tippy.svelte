<script>
  import tippy from "tippy.js";
  import tippyAction from "../actions/tippy";
  import { onMount } from "svelte";
  let button;
  let content = "Hello";

  onMount(() => {
    tippy(button, {
      content: "I'm a tooltip for button 2",
      placement: "right",
    });

    tippy(".tippy-tooltip", {
      content: "I'm a tooltip for button 1",
      placement: "bottom",
    });
  });
</script>

<div>
  <button class="tippy-tooltip">Button 1</button>
  <button bind:this={button}>Button 2</button>

  <!-- using actions for tippy js -->
   <input bind:value={content} type="text" />
  <button use:tippyAction={{content, theme : "light"}}>Action Button</button>
</div>
