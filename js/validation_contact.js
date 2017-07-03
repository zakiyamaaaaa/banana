$(function(){

	//チェックボックスのバリデーション
	$('.form_i_cb').change(function(){
		/* Act on the event */
		if($(this).is(':checked')){
			$('#contact-btn').prop('disabled',false);
		}else{
			$('#contact-btn').prop('disabled',true);
		}
	});

	if($(':text[name="name"]').val() === ""){
		$('#contact-btn').prop('disabled',true);
	}

	if($(':text[name="mail"]').val() === ""){
		$('#contact-btn').prop('disabled',true);
	}

	if($(':text[name="question"]').val() === ""){
		$('#contact-btn').prop('disabled',true);
	}
});