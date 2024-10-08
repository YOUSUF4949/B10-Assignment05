

// select donate and history button;
let donate = document.getElementById('donate');
let history = document.getElementById('donate-history');
let donateCardContainer = document.getElementById('donate-container');
let donateCulection = document.getElementById('donate-culection');
donate.addEventListener('click', function(){
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
// select donate Now button 01
let donateAmount = document.getElementById("donate-amount");
let donateBtn = document.getElementById('donate-btn01');
donateBtn.addEventListener('click', function(event){
    event.preventDefault();
    let mainBalance = document.getElementById('main-balance').innerText;
    let donateCurrentBalance = document.getElementById('current-balance').innerText;
    let inputBalance = document.getElementById('donate-amount').value;
    if(parseInt(mainBalance) > parseInt(inputBalance) && parseInt(inputBalance) > 0 && !isNaN(inputBalance)){ 
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
        // create date donation;
        let date = new Date();
        let donateTime = document.createElement('p');
        let createTimeText = document.createTextNode(` ${date}`);
        donateTime.appendChild(createTimeText);
        // add the create all elements in parent(data) Tag
        dataBox.appendChild(createDonateTitle);
        dataBox.appendChild(donateTime);
        // styling the create element;
        dataBox.classList.add('border', 'py-4', 'px-3', 'lg:px-10');
        createDonateTitle.classList.add('font-bold','text-xl', 'lg:text-2xl', 'pb-5');
        donateTime.classList.add('font-semibold')

        // clear input Field
        document.getElementById('donate-amount').value = '';
        
    }else{
        alert('Invalid Amount');
        // clear input field 
        document.getElementById('donate-amount').value = '';
    }

})

// donation 02 no card working;
let donateButton02 = document.getElementById('donate-btn02');
donateButton02.addEventListener('click', function(event){
    event.preventDefault();
    let mainbalance02 = document.getElementById('main-balance').innerText;
    let currentBalance02 = document.getElementById('current-balance02').innerText;
    let donateMoney = document.getElementById('donate-amount02').value;

    if(parseInt(mainbalance02) > parseInt(currentBalance02) && parseInt(donateMoney) > 0 && ! isNaN(donateMoney)){
        let subtractionMainMoney = parseInt(mainbalance02) - parseInt(donateMoney);
        document.getElementById('main-balance').innerText = subtractionMainMoney;
        let addMoneyInDonate = parseInt(donateMoney) + parseInt(currentBalance02);
        document.getElementById('current-balance02').innerText = addMoneyInDonate;

        // History empty page hidden;
        let emptyPage = document.getElementById('no-culaction');
            emptyPage.classList.add('hidden');

        // culaction data added here
        let parent = document.getElementById('culection-data-container')
        let dataBox = document.createElement('div');
        let donateTitle02 = document.getElementById('donateTitle02').innerText;
        parent.appendChild(dataBox);
        // create donate colaction title and text;
        let createDonateTitle = document.createElement('h2');
        let createText = document.createTextNode(`${donateMoney}, ${donateTitle02}`);
        createDonateTitle.appendChild(createText);
        dataBox.appendChild(createDonateTitle);
        // create date donation;
        let date = new Date();
        let donateTime = document.createElement('p');
        let createTimeText = document.createTextNode(` ${date}`);
        donateTime.appendChild(createTimeText);
        // add the create all elements in parent(data) Tag
        dataBox.appendChild(createDonateTitle);
        dataBox.appendChild(donateTime);
        // styling the create element;
        dataBox.classList.add('border', 'py-4', 'px-3', 'lg:px-10');
        createDonateTitle.classList.add('font-bold','text-xl', 'lg:text-2xl', 'pb-5');
        donateTime.classList.add('font-semibold')

        // clear input field after the submit balance;
        document.getElementById('donate-amount02').value = '';
    }else{
        alert('Invalid Amount');
        // clear input field 
        document.getElementById('donate-amount02').value = '';
    } 
})

// donation 03 no card working;
let donateButton03 = document.getElementById('donate-button03');
donateButton03.addEventListener('click', function(event){
    event.preventDefault();
    let mainbalance03 = document.getElementById('main-balance').innerText;
    let currentBalance03 = document.getElementById('current-balance03').innerText;
    let donateMoney03 = document.getElementById('donate-money03').value;
    
    if(parseInt(mainbalance03) > parseInt(donateMoney03) && parseInt(donateMoney03) > 0 && ! isNaN(donateMoney03)){
        let substractionMainBalance = parseInt(mainbalance03) - parseInt(donateMoney03);
        document.getElementById('main-balance').innerText = substractionMainBalance;
        let additionCurrentBalance = parseInt(currentBalance03) + parseInt(donateMoney03);
        document.getElementById('current-balance03').innerText = additionCurrentBalance;

        // History empty page hidden;
        let emptyPage = document.getElementById('no-culaction');
            emptyPage.classList.add('hidden');
        
        // culaction data added here
        let parent = document.getElementById('culection-data-container')
        let dataBox = document.createElement('div');
        let donateTitle03 = document.getElementById('donateTitle03').innerText;
        parent.appendChild(dataBox);
        // create donate colaction title and text;
        let createDonateTitle = document.createElement('h2');
        let createText = document.createTextNode(`${donateMoney03}, ${donateTitle03}`);
        createDonateTitle.appendChild(createText);
        dataBox.appendChild(createDonateTitle);
        // create date donation;
        let date = new Date();
        let donateTime = document.createElement('p');
        let createTimeText = document.createTextNode(` ${date}`);
        donateTime.appendChild(createTimeText);
        // add the create all elements in parent(data) Tag
        dataBox.appendChild(createDonateTitle);
        dataBox.appendChild(donateTime);
        // styling the create element;
        dataBox.classList.add('border', 'py-4', 'px-3', 'lg:px-10');
        createDonateTitle.classList.add('font-bold','text-xl', 'lg:text-2xl', 'pb-5');
        donateTime.classList.add('font-semibold')

        // clear Input field;
        document.getElementById('donate-money03').value = '';

    }else{
        alert('Invalid Amount');
         // clear input field 
         document.getElementById('donate-money03').value = '';
    }
});