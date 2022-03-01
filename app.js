// import functions

// grab DOM elements

const showButton = document.getElementById('button');

const animalDiv = document.getElementById('animal');

showButton.addEventListener('click', () => {

    animalDiv.classList.remove('hidden');
    showButton.classList.add('hidden');


}
);
// set event listeners 
    // get user input
    // use user input to update state 
    // update DOM to reflect the new state
