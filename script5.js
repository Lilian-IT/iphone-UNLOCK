

$(document).ready(()=>{

	let password = '5261';
	let userPassword = '';
	let attempt = 0;
	$('.button').click(function(){
		$('.locked_screen').hide();
		$('.password_screen').show();
	})

	$('.password_button').click(function(){
		$(this).addClass('password_button_active');
		setTimeout(()=>{
			$(this).removeClass('password_button_active');
		},100);

		$('.pass_cyrcle').not('.pass_cyrcle_active').first().addClass('pass_cyrcle_active');
		const currentNumber = $(this).find('.password_number').text();
		userPassword = userPassword + currentNumber;

	

		if(userPassword.length === 4 && 
			password !== userPassword && attempt >= 2){
				$('.phone_border').addClass('phone_blocked');
				$('.mobile_locked').show().css('display','flex');
		}

		if(userPassword.length === 4 && 
			password === userPassword && attempt <= 2){
			   $('.phone_border').addClass('phone_unlocked');
				 $('.mobile_unlocked').css('display','flex');
				 alert("yay you did it");
		}

		if(attempt < 3 && password !== userPassword) {	
			if(userPassword.length === 4 &&
				password !== userPassword
			) {
				++attempt;
			 	userPassword = '';
			 	$('.pass_cyrcle').removeClass('pass_cyrcle_active')
			 	$('.phone_border').addClass('phone_shake');
			 	setTimeout(()=>{
			 		$('.phone_border').removeClass('phone_shake');
			 	},1000);
			}
		} 

	})
}) 

	//Time
	function printTime() {
	var d = new Date();
	var hours = d.getHours();
	var mins = d.getMinutes();
	
	document.getElementById("clock").innerHTML = hours+":"+mins;
}
setInterval(printTime, 1000);



