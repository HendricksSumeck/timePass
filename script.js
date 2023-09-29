function calculateTime() {
    const inputDate = document.getElementById('inputDate').value;
    const selectedDate = new Date(inputDate);
    const currentDate = new Date();

    const timeDifference = Math.abs(currentDate - selectedDate);
    const hoursPassed = Math.floor(timeDifference / (1000 * 60 * 60));

    const days = Math.floor(hoursPassed / 24);
    const remainingHours = hoursPassed % 24;
    const minutes = Math.floor((timeDifference / (1000 * 60)) % 60);

    const resultContainer = document.getElementById('result');
    const timePassedElement = document.getElementById('timePassed');
    const timePassedInWordsElement = document.getElementById('timePassedInWords');

    timePassedElement.innerText = `Tempo passado em horas: ${hoursPassed} horas`;
    timePassedInWordsElement.innerText = `Tempo passado em palavras: ${days} dias, ${remainingHours} horas, ${minutes} minutos`;

    resultContainer.style.display = 'block';
}
