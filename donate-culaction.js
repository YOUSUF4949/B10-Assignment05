

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
    if((parseInt(mainBalance) > parseInt(inputBalance) && parseInt(inputBalance) > 0)){ 
        let updateMainBalance = parseInt(mainBalance) - parseInt(inputBalance);
        document.getElementById('main-balance').innerText = updateMainBalance;
        // add the current balance
        let donateAddition = parseInt(donateCurrentBalance) + parseInt(inputBalance);
        document.getElementById('current-balance').innerText = donateAddition;

        // History empty page hidden;
        let emptyPage = document.getElementById('no-culaction');
            emptyPage.classList.add('hidden');
        // Culaction Data added in history page;
        let parent = document.getElementById('culection-data-container')
        let dataBox = document.createElement('div');
        let donateTitle01 = document.getElementById('donateTitle01').innerText;

        parent.appendChild(dataBox);
        // create donate colaction title and text;
        let createDonateTitle = document.createElement('h2');
        let createText = document.createTextNode(`${inputBalance}, ${donateTitle01}`);
        createDonateTitle.appendChild(createText);
        dataBox.appendChild(createDonateTitle);
        console.log(createDonateTitle)
        // create date donation;
        let date = new Date();
        let donateTime = document.createElement('p');
        let createTimeText = document.createTextNode(` ${date}`);
        donateTime.appendChild(createTimeText);
        console.log(donateTime)
        // add the create all elements in parent(data) Tag
        dataBox.appendChild(createDonateTitle);
        dataBox.appendChild(donateTime);
        // styling the create element;
        dataBox.classList.add('border', 'py-4', 'px-3', 'lg:px-10');
        createDonateTitle.classList.add('font-bold','text-xl', 'lg:text-2xl', 'pb-5');
        donateTime.classList.add('font-semibold')
        // clear input field after the submit balance;
        document.getElementById('donate-amount').value = '';
    }else{
        alert('Invalid Amount');
    }
})


