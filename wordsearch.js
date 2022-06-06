const wordSearch = (letters, word) => {

  if (letters.length === 0 || word === '') {
    return false;
  }

  const horizontalJoin = letters.map(ls => ls.join(''));
  for (const l of horizontalJoin) {
    if (l.includes(word))
      return true;
  }

  const verticalJoin = [];
  const verticalLength = letters.length;
  const horizontalLength = letters[0].length;

  for (let h = 0; h < horizontalLength; h++) {
    let word = '';
    for (let v  = 0; v < verticalLength; v++) {
      word += letters[v][h];
    }
    verticalJoin.push(word);
  }

  for (const l of verticalJoin) {
    if (l.includes(word))
      return true;
  }


  return false;
};

module.exports = wordSearch;