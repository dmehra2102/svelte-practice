<script>
    import {v4} from "uuid";
  import Button from "./Button.svelte";

  export let todos = [];
  let inputText = "";

  function handleAddTodo(){
    todos = [...todos, { id : v4(), title: inputText, completed: false}];
    inputText = "";
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
