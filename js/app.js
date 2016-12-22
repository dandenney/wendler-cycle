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
  const outputPlan = document.querySelector( '#plan' );
  let mrWendler = calculateWendler( this.value );

  // Clear the content
  outputPlan.innerHTML = '';

  // Output values of each week
  mrWendler.forEach( weight => {

    console.log(weight);

    // Output markup and values
    // Need a dynamic solution for the hardcoded keys
    outputPlan.innerHTML += `
      <article class='week'>
        <h5>Week ${weight.week}</h5>
        <ol>
          ${ weight.sets.map( set => `<li>${set}</li>` ).join( '') }
        </ol>
      </article>
    `

  });

}

getWeight();
