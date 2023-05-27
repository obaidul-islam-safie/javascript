//ludo khaler 1 thake 6 number randomly ki vabe print korte pari.
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }
  console.log(getRandomNumber(1, 6));