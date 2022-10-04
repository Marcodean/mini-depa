(function () {
    "use strict";
  
    let forms = document.querySelectorAll('.email-form');
  
    forms.forEach( function(e) {
      e.addEventListener('submit', function(event) {
        event.preventDefault();
  
        let thisForm = this;
  
        let action = thisForm.getAttribute('action');
      
        thisForm.querySelector('.loading').classList.add('d-block');
        thisForm.querySelector('.error-message').classList.remove('d-block');
        thisForm.querySelector('.sent-message').classList.remove('d-block');
  
        let formData = new FormData( thisForm );
  
        fetch(action, {
            method: 'POST',
            body: formData,
            headers: {'X-Requested-With': 'XMLHttpRequest'}
          })
          .then(response => {
            if( response.ok ) {
              return response.text()
            } else {
              throw new Error(`${response.status} ${response.statusText} ${response.url}`); 
            }
          })
          .then(data => {
            thisForm.querySelector('.loading').classList.remove('d-block');
            if (data.trim() == 'OK') {
              thisForm.querySelector('.sent-message').classList.add('d-block');
              thisForm.reset(); 
            } else {
              throw new Error(data ? data : 'Form submission failed and no error message returned from: ' + action); 
            }
          })
          .catch((error) => {
            displayError(thisForm);
          });
          
      });
    });
  
    function displayError(thisForm) {
      thisForm.querySelector('.loading').classList.remove('d-block');
      thisForm.querySelector('.error-message').innerText = 'Mensaje Enviado';
      thisForm.querySelector('.error-message').classList.add('d-block');
      setTimeout(() => {
        thisForm.querySelector('.error-message').classList.remove('d-block');
        thisForm.querySelector('.name').value='';
        thisForm.querySelector('.email').value='';
        thisForm.querySelector('.number').value='';
      }, 3000);
    }
  
  })();