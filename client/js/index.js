// **** open and close modal box ****

const close = document.getElementsByClassName('close-btn')[0];
const modal = document.getElementById('modal');
const overlay = document.getElementById('overlay');
const toggle = document.getElementById('container');
const toggleContainer = document.getElementById('toggle-container');
const toggleNumber = false;
const storeBtn = document.getElementsByClassName('btn')[0];
const customerBtn = document.getElementsByClassName('btn')[1];
const packageBtn = document.getElementsByClassName('btn')[2];

// open

const open = document.getElementsByClassName('add-btn')[0];

open.addEventListener('click', openFun);

function openFun() {
  modal.style.display = 'block';
  overlay.style.opacity = 1;
}

// close

close.addEventListener('click', closeFun);

function closeFun() {
  modal.style.display = 'none';
  overlay.style.opacity = 0;
}

// **** Toggle button function ****

toggle.addEventListener('click', function () {
  toggleNumber = !toggleNumber;
  const allScr = document.querySelectorAll('#all-screen');
  const sentScr = document.querySelectorAll('#sent-screen');

  if (toggleNumber) {
    toggleContainer.style.clipPath = 'inset(0 0 0 50%)';
    toggleContainer.style.backgroundColor = '#fea900';

    allScr[0].classList.toggle('hide');
    sentScr[0].classList.toggle('hide');
  } else {
    toggleContainer.style.clipPath = 'inset(0 50% 0 0)';
    toggleContainer.style.backgroundColor = '#fea900';

    sentScr[0].classList.toggle('hide');
    allScr[0].classList.toggle('hide');
  }
  console.log(toggleNumber ? 'dent' : 'all');
});

// **** Tabs function ****

function openTab(tapName) {
  var i;
  var tab = document.getElementsByClassName('tab');
  for (i = 0; i < tab.length; i++) {
    tab[i].style.display = 'none';
  }
  document.getElementById(tapName).style.display = 'block';
}

storeBtn.addEventListener('click', () => {
  storeBtn.className = 'btn active';
  customerBtn.className = 'btn';
  packageBtn.className = 'btn';
  openTab('store');
});

customerBtn.addEventListener('click', () => {
  customerBtn.className = 'btn active';
  storeBtn.className = 'btn';
  packageBtn.className = 'btn';
  openTab('customer');
});

packageBtn.addEventListener('click', () => {
  packageBtn.className = 'btn active';
  storeBtn.className = 'btn';
  customerBtn.className = 'btn';
  openTab('package');
});
