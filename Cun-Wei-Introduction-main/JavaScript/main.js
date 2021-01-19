


function showContents(){
    document.querySelector('#buttonOpen').style.display='none';
    document.querySelector('#sec-1-2').style.display='block';
    //document.getElementById('sohwContent').innerHTML=contentsValue;
    document.querySelector('#buttonClose').style.display='block';
    window.location.hash="sec-1-2"
}

function hideContents(){
    document.querySelector('#buttonOpen').style.display='block';
    document.querySelector('#sec-1-2').style.display='none';
    //document.getElementById('sohwContent').innerHTML=contentsValue;
    document.querySelector('#buttonClose').style.display='none';
    window.location.hash="sec-1-1";
}

document.getElementById('buttonOpen').onclick=showContents;
document.getElementById('buttonClose').onclick=hideContents;

function openschedule_1(){
    document.querySelector('#sec-3-contain-1').style.display="inline-flex";
    document.querySelector('#sec-3-contain-2').style.display="none";
    document.querySelector('#sec-3-contain-3').style.display="none";
    document.querySelector('#sec-3-contain-4').style.display="none";
    document.querySelector('#sec-3-contain-5').style.display="none";
    document.querySelector('#sec-3-contain-6').style.display="none";
}

function openschedule_2(){
    document.querySelector('#sec-3-contain-1').style.display="none";
    document.querySelector('#sec-3-contain-2').style.display="inline-flex";
    document.querySelector('#sec-3-contain-3').style.display="none";
    document.querySelector('#sec-3-contain-4').style.display="none";
    document.querySelector('#sec-3-contain-5').style.display="none";
    document.querySelector('#sec-3-contain-6').style.display="none";
}

function openschedule_3(){
    document.querySelector('#sec-3-contain-1').style.display="none";
    document.querySelector('#sec-3-contain-2').style.display="none";
    document.querySelector('#sec-3-contain-3').style.display="inline-flex";
    document.querySelector('#sec-3-contain-4').style.display="none";
    document.querySelector('#sec-3-contain-5').style.display="none";
    document.querySelector('#sec-3-contain-6').style.display="none";
}

function openschedule_4(){
    document.querySelector('#sec-3-contain-1').style.display="none";
    document.querySelector('#sec-3-contain-2').style.display="none";
    document.querySelector('#sec-3-contain-3').style.display="none";
    document.querySelector('#sec-3-contain-4').style.display="inline-flex";
    document.querySelector('#sec-3-contain-5').style.display="none";
    document.querySelector('#sec-3-contain-6').style.display="none";
}

function openschedule_5(){
    document.querySelector('#sec-3-contain-1').style.display="none";
    document.querySelector('#sec-3-contain-2').style.display="none";
    document.querySelector('#sec-3-contain-3').style.display="none";
    document.querySelector('#sec-3-contain-4').style.display="none";
    document.querySelector('#sec-3-contain-5').style.display="inline-flex";
    document.querySelector('#sec-3-contain-6').style.display="none";
}

function openschedule_6(){
    document.querySelector('#sec-3-contain-1').style.display="none";
    document.querySelector('#sec-3-contain-2').style.display="none";
    document.querySelector('#sec-3-contain-3').style.display="none";
    document.querySelector('#sec-3-contain-4').style.display="none";
    document.querySelector('#sec-3-contain-5').style.display="none";
    document.querySelector('#sec-3-contain-6').style.display="inline-flex";
}

document.getElementById('schedule-HTML').addEventListener('click',openschedule_1);
document.getElementById('schedule-css').addEventListener('click',openschedule_2);
document.getElementById('schedule-JS').addEventListener('click',openschedule_3);
document.getElementById('schedule-MySQL').addEventListener('click',openschedule_4);
document.getElementById('schedule-Python').addEventListener('click',openschedule_5);
document.getElementById('schedule-C#').addEventListener('click',openschedule_6);
