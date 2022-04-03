function Popup(name, openButton, closeButton) {
  popup = document.querySelector(name);
  if(popup != null) {
    if (openButton != null) {
      document.querySelector(openButton)
      .addEventListener('click', function() {
        popup.classList.add('_popup-opened');  
      });
    }
    else {
      console.log('Error: openButton undefined')
      console.log(`Popup("${name}", /* open button */ "${openButton}", "${closeButton}")`)
      console.log('Read the docs: https://github.com/partner21/partner21.github.io/wiki/Popup-Module');
    }

    if (closeButton != null) {
      document.querySelector(closeButton)
      .addEventListener('click', function() {
        popup.classList.remove('_popup-opened');  
      });
    }
    else {
      console.log('Error: closeButton undefined')
      console.log(`Popup("${name}", "${openButton}", /* close button */ "${closeButton}")`)
      console.log('Read the docs: https://github.com/partner21/partner21.github.io/wiki/Popup-Module');
    }
  }
  else {
    console.log('Error: popup undefined')
    console.log(`Popup(/* popup name */ "${name}", "${openButton}", "${closeButton}")`)
    console.log('Read the docs: https://github.com/partner21/partner21.github.io/wiki/Popup-Module');
  }
}