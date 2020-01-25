document.addEventListener('DOMContentLoaded', () => {

  console.log('IronGenerator JS imported successfully!');

}, false);

document.querySelector('.nav-bar-services').onmouseover = function() {
  document.querySelector('.dropdown-content-services').classList.add('dropdown-content-hover');
  document.querySelector('.dropdown-content-a-services').classList.add('dropdown-content-a-hover');
};

document.querySelector('.dropdown-content-services').onmouseover = function() {
  document.querySelector('.dropdown-content-services').classList.add('dropdown-content-hover');
  document.querySelector('.dropdown-content-a-services').classList.add('dropdown-content-a-hover');
};

document.querySelector('.dropdown-content-services').onmouseout = function() {
  document.querySelector('.dropdown-content-services').classList.remove('dropdown-content-hover');
  document.querySelector('.dropdown-content-a-services').classList.remove('dropdown-content-a-hover');
};




     

       
