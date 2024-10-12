<script>
    import {v4} from "uuid";
  import Button from "./Button.svelte";
  import { createEventDispatcher } from "svelte";

  export let todos = [];
  let inputText = "";
  let inputField;

  export function clearInput(){
    inputText = "";
  }

  export function focusInput(){
    inputField.focus();
  }

  // We are creating custom event here to pass the data from child to parent component.
  let dispatch = createEventDispatcher();

  function handleAddTodo(){
   const isCancelable = dispatch("addTodo", {id: v4(), title: inputText, completed: false},{cancelable: true});
  }

  function handleRemoveTodo(removeTodoId){
    dispatch("removeTodo", {id: removeTodoId});
  }
</script>

<div>
  <ul>
    {#each todos as todo, index (todo.id)}
      {@const number = index + 1}
      <li>
        <input type="checkbox" bind:checked={todo.completed} />
        <!-- svelte-ignore a11y-label-has-associated-control -->
        <label>
          {number}- {todo.title}
        </label>
        <button on:click={() => handleRemoveTodo(todo.id)}>Remove</button>
      </li>
    {/each}
  </ul>

  <form on:submit|preventDefault={handleAddTodo} >
    <input type="text" bind:this={inputField} bind:value={inputText}>
    <Button type="submit" disabled={!inputText}>Add Todo</Button>
  </form>
</div>
