let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = getMoveName(randomNumber);

printMessage('Mój ruch to: ' + argComputerMove);


let playerMove = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerMove);

let playerMove = getMoveName(randomNumber);

if (getMoveName == 2 || getMoveName == 3) {
    printMessage('papier' || 'nozyczki')
}

function displayResult(ComputerMove, PlayerMove){
    printMessage ('Zagrałem' + ComputerMove + 'a Ty zagrałeś' PlayerMove)
}

printMessage('Twój ruch to: ' + PlayerMove);

if( ComputerMove == 'kamień' && PlayerMove == 'papier'){
    printMessage('Ty wygrywasz!');
} else (ComputerMove == 'kamień' && PlayerMove == 'nozyczki'){
    printMessage('Ty wygrywasz!');
} else (ComputerMove == 'papier' && PlayerMove == 'kamień'){
    printMessage('Ty przegrywasz!');
} else (ComputerMove == 'papier' && PlayerMove == 'nozyczki'){
    printMessage('Ty przegrywasz!');
} else  (PlayerMove == 'nieznany ruch'){
    printMessage('Błąd');
} else if(ComputerMove == PlayerMove){
    printMessage('Remis');
}

