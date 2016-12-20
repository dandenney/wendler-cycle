// *************************************
//
//   Get Weight
//   -> Get weight from user input
//
// *************************************

function getWeight () {

  // Private variables
  const weightInput = document.querySelector('#weight-input');

  // Set event handler
  weightInput.addEventListener('blur', outputWendler);

}

function outputWendler () {

  // Private variables
  const outputPlan = document.querySelector('#plan');
  let mrWendler = calculateWendler( this.value );

  // Clear the content
  outputPlan.innerHTML = '';

  // Output values of each week
  mrWendler.forEach( weight => {

    // Output markup and values
    // Need a dynamic solution for the hardcoded keys
    outputPlan.innerHTML += `
      <ul>
        <li>
          Week: ${weight.week}
          <ol>
            <li>${weight.sets[0]}</li>
            <li>${weight.sets[1]}</li>
            <li>${weight.sets[2]}</li>
          </ol>
        </li>
      </ul>
    `

  });

}

getWeight();
