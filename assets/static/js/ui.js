jQuery(document).ready(function($){

/*-------- Input Animations ----------*/

	$('.input__field').focusout(function(){ 
		if($.trim($(this).val()) == 0) {
			$(this).parent().removeClass('input--filled');
		} 
	});

	$('.input__field').focusin(function(){
		$(this).parent().addClass('input--filled');
	});
  
/*------------------------------------ */

// Scrollbar

	$('.scrollbar-macosx').scrollbar();

//People

    $('.people').click(function(){
    	$('.all-active-users ').toggleClass('active');
    });
/*-------- Burger Animations ----------*/

	$('#burger').click(function() {
		$('body').toggleClass('open-menu');
	});

/*------------------------------------ */
/*------------Popup task-------------- */

	$('#add-task-button').click(function(){
		$('.popup-add-task').addClass('open');
	});
	$('#close-popup').click(function(){
		$('.popup-add-task').removeClass('open');
	});

/*------------------------------------ */
 
if('WebSocket' in window) {
  /* WebSocket поддерживается. Вы можете писать свой код */
  console.log('true');
} else {
  /* WebSockets не поддерживается. Попробуйте использовать старые методы связи */
  console.log('false');
}

var connection = new WebSocket('wss://secure.example.org:67890/myapp');

	connection.onopen = function() {
	  console.log('Connection open!');
	}

	connection.onclose = function() {
	  console.log('Connection closed');
	}

});

