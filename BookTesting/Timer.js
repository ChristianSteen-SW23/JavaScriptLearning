async function waitOneSecond() {
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log('One second has passed!');
  }

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  async function example() {
    console.log('Start');
    await sleep(1000); // Sleep for 1 second (1000 milliseconds)
    console.log('End');
  }

  for(let i=0; i<300; i++){
    console.log(i);
    example();
  }