<script>
    let content = "";
    let show = true;
  
    function greet(node) {
      const greetEvent = new CustomEvent("greet", { detail: "hi" });
      node.dispatchEvent(greetEvent);
  
      return {
        update(newContent) {
          console.log({ newContent });
        },
        destroy() {
          console.log("Hello I'm destroyed.");
        },
      };
    }
  
    function greetPeople(event) {
      console.log("Hello People", event.detail); // Log event detail
    }
  </script>
  
  <div>
    <input bind:value={content} />
    <label><input bind:checked={show} type="checkbox" /> Hide/Show</label>
    {#if show}
      <p use:greet on:greet={greetPeople}>Hello World</p>
    {/if}
  </div>
  