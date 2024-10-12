<script>
  import Button from "./Button.svelte";
  import DiCodeigniter from 'svelte-icons/di/DiCodeigniter.svelte'

  let count = 0;
  let count2 = 0;
  
  const setCount2 = (x)=>{
    count2 = x;
  }

  $: setCount2(count);
  $: string = `Count2 is ${count2}`

  const increment = () => {
    count += 1
  }
  

</script>

<button on:click={increment}>
  Clicks {count}
</button>

<Button>
  <div slot="icon-div" style:width="20px"><DiCodeigniter /></div>
  My Button</Button>

<h3>{string}</h3>

<style lang="scss">
  button{
    color : #ffffff;
    background: #000;
    &:hover {
      background: variables.$color;
    }
  }
</style>