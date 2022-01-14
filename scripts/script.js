function getRandomIndex(arrLength, usedPositions) {
    const randomPosition = Math.floor(Math.random() * (arrLength + 1));
    if (usedPositions.includes(randomPosition)) {
      return getRandomIndex(arrLength, usedPositions);
    }
  
    return randomPosition;
  }
  
  function insertWordInto(str) {
    const arr = str.split(' ');
    let usedPositions = [];
  
    return function (word) {
      if (usedPositions.length === arr.length + 1) usedPositions = [];
      const randomPosition = getRandomIndex(arr.length, usedPositions);
  
      if (arr.includes(word)) {
        arr.splice(arr.indexOf(word), 1);
      }
  
      arr.splice(randomPosition, 0, word);
  
      if (!usedPositions.includes(randomPosition)) {
        usedPositions.push(randomPosition);
      }
      let newString = arr.join(' ');
      arr.splice(randomPosition, 1);
      return newString;
    };
  }