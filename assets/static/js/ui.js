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

/*--------------WebSocket------------------- */
 

	var msgArea = $('.messages');
	var elementMessage = $('#textarea-message');
	var webSocket = new WebSocket('ws://' + window.location.host + '/chat');
	var name = $( ".conversation" ).data('name');

	msgArea.animate({ scrollTop: $(document).height() }, 0);
	elementMessage.val('').focus();

	elementMessage.keydown(function(e) {
	    if(e.which == 13) {
	        webSocket.send(elementMessage.val());
	        return false;
	    }
	});

	webSocket.onmessage = function(message) {
	    var data = JSON.parse(message.data);
	    var notOwn = '';
	    var nameElement = '';
	    var msgArea = $('.messages');

	    if (name != data.sender) {
	    	notOwn = 'not-';
	    	nameElement = '<div class="name-author">' + data.sender + '</div>';
	    }

	    var msg = '<div class="single-message ' + notOwn + 'own">' +
	    nameElement + '<div class="message">' + data.message + '</div>' + 
	    '</div>';

	    msgArea.append(msg);

	    msgArea.animate({ scrollTop: $(document).height() }, 0);
		elementMessage.val('').focus();
	}
	$('.send-message').click(function(e) {
	    webSocket.send(elementMessage.val());
	})


});

