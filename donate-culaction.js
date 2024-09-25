

// select donate and history button;
let donate = document.getElementById('donate');
let history = document.getElementById('donate-history');
let donateCardContainer = document.getElementById('donate-container');
let donateCulection = document.getElementById('donate-culection');
donate.addEventListener('click', function(){
    console.log('donate click is occured');
    donate.style.backgroundColor = '#B4F461';
    history.style.backgroundColor = 'white';
    donate.style.color = 'black';

    // working here card container by hidden and block
    donateCardContainer.classList.remove('hidden');
    donateCulection.classList.add('hidden');
});

history.addEventListener('click', function(){
    history.style.backgroundColor = '#B4F461';
    donate.style.backgroundColor = 'white';
    history.style.color = 'black';

    // working here added remove and add ;
    donateCardContainer.classList.add('hidden');
    donateCulection.classList.remove('hidden');
});
// donate and button work have completed;

// add the Donate Culaction data
let dataCard = document.getElementById('data');
// select donate Now button
let donateAmount = document.getElementById("donate-amount");
let donateBtn = document.getElementById('donate-btn01');
donateBtn.addEventListener('click', function(event){
    event.preventDefault();
    let mainBalance = document.getElementById('main-balance').innerText;
    let donateCurrentBalance = document.getElementById('current-balance').innerText;
    let inputBalance = document.getElementById('donate-amount').value;
    // Decriment money of the main balance for the donate;
    let donate = parseInt(mainBalance) - parseInt(inputBalance);
    document.getElementById('main-balance').innerText = donate;
    // add the money in donate current balance;
    let addCurrentBalance = parseInt(donateCurrentBalance) + parseInt(inputBalance);
    document.getElementById('current-balance').innerText = addCurrentBalance;

    // clear input field;
    document.getElementById('donate-amount').value = '';
})
