function factorialize(p) {
  let result = 1;

  if (p == 0) {
    console.log(0);
  } else if (p == 1) {
    console.log(1);
  } else {
    for (let i = 1; i < p; i++) {
      result *= i;
    }
  }


  let r = (result + 1) % (p * p);

  if (r == 0) {
    console.log(true);
  } else {
    console.log(false);
  }
}
factorialize(5);
