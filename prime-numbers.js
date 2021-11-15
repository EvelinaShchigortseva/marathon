function presentNumber(n) {
  let counter = 0;

  for (let i = 1; i <= n; i++) {
    for (let j = 2; j < i; j++) {
      if (i % j == 0) {
        counter++;
      }
    }

    if (!counter) console.log(i);
    counter = 0;
  }
}

presentNumber(150);
