function calculateWendler(maxWeight) {
  const baseNumber = maxWeight * 0.9;
  return [
    { week:1, sets: calculateSet(1, baseNumber) },
    { week:2, sets: calculateSet(2, baseNumber) },
    { week:3, sets: calculateSet(3, baseNumber) },
    { week:4, sets: calculateSet(4, baseNumber) }
  ];
}

function calculateSet(week, baseNumber){
  switch(week) {
    case 1:
      return calculateWeekOne(baseNumber);
      break;
    case 2:
      return calculateWeekTwo(baseNumber)
      break;
    case 3:
      return calculateWeekThree(baseNumber)
      break;
    case 4:
      return calculateWeekFour(baseNumber)
      break;
  }
}

function calculateWeekOne(weight) {
  const round = Math.round;
  let firstSet = round(weight * 0.65);
  let secondSet = round(weight * 0.75);
  let thirdSet = round(weight * 0.85);


  return [`<span class='set'>${firstSet}</span> <span class='x'>x</span><span class='rep'>5</span>`, `<span class='set'>${secondSet}</span> <span class='x'>x</span> <span class='rep'>5</span>`, `<span class='set'>${thirdSet}</span> <span class='x'>x</span> <span class='rep'>5+</span>`];
}

function calculateWeekTwo(weight) {
  const round = Math.round;
  let firstSet = round(weight * 0.7);
  let secondSet = round(weight * 0.8);
  let thirdSet = round(weight * 0.9);


  return [`<span class='set'>${firstSet}</span> <span class='x'>x</span><span class='rep'>3</span>`, `<span class='set'>${secondSet}</span> <span class='x'>x</span> <span class='rep'>3</span>`, `<span class='set'>${thirdSet}</span> <span class='x'>x</span> <span class='rep'>3+</span>`];
}

function calculateWeekThree(weight) {
  const round = Math.round;
  let firstSet = round(weight * 0.75);
  let secondSet = round(weight * 0.85);
  let thirdSet = round(weight * 0.95);


  return [`<span class='set'>${firstSet}</span> <span class='x'>x</span><span class='rep'>5</span>`, `<span class='set'>${secondSet}</span> <span class='x'>x</span> <span class='rep'>3</span>`, `<span class='set'>${thirdSet}</span> <span class='x'>x</span> <span class='rep'>1+</span>`];
}

function calculateWeekFour(weight) {
  const round = Math.round;
  let firstSet = round(weight * 0.4);
  let secondSet = round(weight * 0.5);
  let thirdSet = round(weight * 0.6);


  return [`<span class='set'>${firstSet}</span> <span class='x'>x</span><span class='rep'>5</span>`, `<span class='set'>${secondSet}</span> <span class='x'>x</span> <span class='rep'>5</span>`, `<span class='set'>${thirdSet}</span> <span class='x'>x</span> <span class='rep'>5</span>`];
}
