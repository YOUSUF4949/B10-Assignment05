// ========== Blog JS file
// Home working here;
let selectHomeBtn = document.getElementById('home-page');
selectHomeBtn.addEventListener('click', function(){
    window.location.href = 'index.html';
});


// Quistion And Section Working here;
let quistionBox1 = document.getElementById('quistion-box1');
let quistionBox2 = document.getElementById('quistion-box2');
let quistionBox3 = document.getElementById('quistion-box3');
let quistionBox4 = document.getElementById('quistion-box4');

// select here all answers
let answer01 = document.getElementById('answer01');
let answer02 = document.getElementById('answer02');
let answer03 = document.getElementById('answer03');
let answer04 = document.getElementById('answer04');
// select Icons
let downArrow1 = document.getElementById('down-arrow1');
let upArrow1 = document.getElementById('up-arrow1');
let downArrow2 = document.getElementById('down-arrow2');
let upArrow2 = document.getElementById('up-arrow2');
let downArrow3 = document.getElementById('down-arrow3');
let upArrow3 = document.getElementById('up-arrow3');
let downArrow4 = document.getElementById('down-arrow4');
let upArrow4 = document.getElementById('up-arrow4');
// quistion 01
quistionBox1.addEventListener('mousedown', function(){
    answer01.classList.remove('hidden')
    downArrow1.classList.remove('hidden')
    upArrow1.classList.add('hidden');
})
quistionBox1.addEventListener('mouseleave', function(){
    answer01.classList.add('hidden')
    upArrow1.classList.remove('hidden')
    downArrow1.classList.add('hidden');
});

// quistion 02
quistionBox2.addEventListener('mousedown', function(){
    answer02.classList.remove('hidden')
    downArrow2.classList.remove('hidden')
    upArrow2.classList.add('hidden');
})
quistionBox2.addEventListener('mouseleave', function(){
    answer02.classList.add('hidden')
    upArrow2.classList.remove('hidden')
    downArrow2.classList.add('hidden');
});
// quistion 03
quistionBox3.addEventListener('mousedown', function(){
    answer03.classList.remove('hidden')
    downArrow3.classList.remove('hidden')
    upArrow3.classList.add('hidden');
})
quistionBox3.addEventListener('mouseleave', function(){
    answer03.classList.add('hidden')
    upArrow3.classList.remove('hidden')
    downArrow3.classList.add('hidden');
});
// quistion 04
quistionBox4.addEventListener('mousedown', function(){
    answer04.classList.remove('hidden')
    downArrow4.classList.remove('hidden')
    upArrow4.classList.add('hidden');
})
quistionBox4.addEventListener('mouseleave', function(){
    answer04.classList.add('hidden')
    upArrow4.classList.remove('hidden')
    downArrow4.classList.add('hidden');
});