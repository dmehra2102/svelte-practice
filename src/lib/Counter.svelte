<script>
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

<h3>{string}</h3>