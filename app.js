let score = {
    win : 0,
    lost : 0,
    tie : 0,
};

function playGame(userChoice) {
    console.log(`You have selected ${userChoice}.`);

    // Generate a random number between 0 and 2 and map it to choices
    const choices = ['Bat', 'Ball', 'Stump'];
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    console.log(`Computer choice is ${computerChoice}`);

    // Determine the outcome based on user choice and computer choice
    if (userChoice === 'Bat') {
        if (computerChoice === 'Ball') {
            console.log('User Wins!');
            score.win++;
        } else if (computerChoice === 'Stump') {
            console.log('Computer Wins!');
            score.lost++;
        } else {
            console.log('Match is a Tie...');
            score.tie++
        }
    } else if (userChoice === 'Ball') {
        if (computerChoice === 'Bat') {
            console.log('Computer Wins!');
            score.lost++;
        } else if (computerChoice === 'Stump') {
            console.log('User Wins!');
            score.win++;
        } else {
            console.log('Match is a Tie...');
            score.tie++;
        }
    } else if (userChoice === 'Stump') {
        if (computerChoice === 'Bat') {
            console.log('User Wins!');
            score.win++;
        } else if (computerChoice === 'Ball') {
            console.log('Computer Wins!');
            score.lost++;
        } else {
            console.log('Match is a Tie...');
            score.tie++;
        }
    }
     // Update the score on the page
     document.getElementById('win').innerText = score.win;
     document.getElementById('lost').innerText = score.lost;
     document.getElementById('tie').innerText = score.tie;
     
}

function reset(){
    score.win = 0;
    score.lost = 0;
    score.tie = 0;

    document.getElementById('win').innerText = score.win;
    document.getElementById('lost').innerText = score.lost;
    document.getElementById('tie').innerText = score.tie;
}
