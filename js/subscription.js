$(function() {
  
  $('button').on('click', transition);
  
  function transition() {
    $('button svg').hide();
    $('button').addClass('preloader').delay(1800).queue(function() {
      showMessage();
      $(this).dequeue();
    }).animate({'width': '120px'});
    
    $(this).off('click');
  }
  
  function showMessage() {
    $('p.mail').css({'left': '-=50px', 'opacity': '0'});
    $('p.thanks').css({'left': '-=50px', 'opacity': '1'});
    $('button svg').show();
  }
  
});




var email = document.getElementById('email'),
    button = document.getElementById('button');

function validateEmail(email) {
    var ex = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return ex.test(email);
}

email.addEventListener('keydown', function() {
  /*var email = this.value;*/
  if(validateEmail(this.value)) {
    button.classList.add('is-active');
  }
});

button.addEventListener('click', function(e){
  e.preventDefault();
  /*this.classList.add('is-done','is-active');*/
  /*
  setTimeout(function() { 
    button.innerHTML = "Thanks! Check Your Email."
  }, 500);*/
});