

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
    console.log('history click is occured');
    history.style.backgroundColor = '#B4F461';
    donate.style.backgroundColor = 'white';
    history.style.color = 'black';

    // working here added remove and add ;
    donateCardContainer.classList.add('hidden');
    donateCulection.classList.remove('hidden');
});