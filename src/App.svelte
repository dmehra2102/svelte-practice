<script>
  import {v4} from "uuid";
  import TodoList from "./lib/TodoList.svelte";
    let todos = [
        {id: v4(), title: "Learn Svelte", completed: false},
        {id: v4(), title: "Learn React", completed: true},
        {id: v4(), title: "Learn Vue", completed: false},
    ];

    function handleChange(event){
      // event.preventDefault();
     todos = [...todos, event.detail];
    }
  
</script>


<div>
  <!-- We are binding the props here, so that whenever todos props change inside child component parent component will also know about it. -->
  <h3>{todos.length} Todos</h3>
  <TodoList bind:todos on:addTodo={handleChange}/>
</div>