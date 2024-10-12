<script>
    import {v4} from "uuid";
  import Button from "./Button.svelte";
  import { createEventDispatcher, afterUpdate } from "svelte";

  export let todos = [];
  let inputText = "";
  let inputField;
  let listDiv;

  export function clearInput(){
    inputText = "";
  }

  export function focusInput(){
    inputField.focus();
  }

  // We are creating custom event here to pass the data from child to parent component.
  let dispatch = createEventDispatcher();
  let autoScroll = false;

  function handleAddTodo(){
   const isCancelable = dispatch("addTodo", {id: v4(), title: inputText, completed: false},{cancelable: true});
  }

  function handleRemoveTodo(removeTodoId){
    dispatch("removeTodo", {id: removeTodoId});
  }

  // /using afterUpdate lifecycle method to scroll after todo list is updated.
  afterUpdate(()=>{
    if(autoScroll){
      listDiv.scrollTo(0, listDiv.scrollHeight);
    }
    autoScroll = false;
  })

  let prevTodo = todos;
  
  $:{
    autoScroll = prevTodo.length !== todos.length;
    prevTodo = todos;
  }
</script>

<div >
  <ul bind:this={listDiv} class="list-div">
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

<style>
  .list-div{
    height: 210px;
    overflow-y: auto;
    border : 3px solid red;
  }
</style>