const set = {};

set['apple'] = 1;
set['banana'] = 1;
set['cucumber'] = 1;

function hasDuplicateValue(array) {
  const existingValues = {};

  for (let i = 0; i< array.length; i++) {
    if (existingValues[array[i]] === undefined) {
      existingValues[array[i]] = 1;
    } else {
      return true;
    }
  }

  return false;
}

const votes = {};

function addVote(candidate) {
  if (votes[candidate]) {
    votes[candidate]++;
  } else {
    votes[candidate] = 1;
  }
}