<script>
    import {v4} from "uuid";
  import Button from "./Button.svelte";
  import { createEventDispatcher } from "svelte";

  export let todos = [];
  let inputText = "";

  // We are creating custom event here to pass the data from child to parent component.
  let dispatch = createEventDispatcher();

  function handleAddTodo(){
   const isCancelable = dispatch("addTodo", {id: v4(), title: inputText, completed: false},{cancelable: true});

   if(isCancelable){
     inputText = "";
   }
  }
</script>

<div>
  <ul>
    {#each todos as todo, index (todo.id)}
      {@const number = index + 1}
      <li>{number}- {todo.title}</li>
    {/each}
  </ul>

  <form on:submit|preventDefault={handleAddTodo} >
    <input type="text" bind:value={inputText}>
    <Button type="submit" disabled={!inputText}>Add Todo</Button>
  </form>
</div>
