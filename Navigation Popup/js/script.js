modalframe = document.querySelector('#modalframe');
close_modalframe 
  = document.querySelector('#close_modalframe');
open_modalframe 
  = document.querySelector('#open_modalframe');
open_popup = document.querySelector('#open_popup');
close_popup = document.querySelector('#close_popup');
popup = document.querySelector('#navigation');



close_modalframe.addEventListener('click', function() {
  popup.classList.add('modulframe_closed')
});

open_modalframe.addEventListener('click', function() {
  popup.classList.remove('modulframe_closed')
});

open_popup.addEventListener('click', function() {
  popup.classList.add('_popup_opened');
});

close_popup.addEventListener('click', function() {
  popup.classList.remove('_popup_opened');
});