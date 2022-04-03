function onScrollAddClass(object) {
  Object = document.querySelector(object)
  window.addEventListener('scroll', function() {
      if(window.pageYOffset >= 1) {
        Object.classList.add(`_${object.split('.')[1]}-scroll`);
      }
      else {
        Object.classList.remove(`_${object.split('.')[1]}-scroll`);
      }
  });
}