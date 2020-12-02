for (let index = 0; index < 100; index++) {
    let number ;
      if (index % 3) {
          console.log ("Fizz")
      }
      if (index % 5) {
          console.log("Buzz")
      }
    console.log(number || index)
  }
  