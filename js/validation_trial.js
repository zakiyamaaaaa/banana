$(function(){
	console.log("vaidatioin-trial")
	//チェックボックスのバリデーション
	$('.form_i_cb').change(function(){
		/* Act on the event */
		if($(this).is(':checked')){
			$('#btnConfirm').prop('disabled',false);
		}else{
			$('#btnConfirm').prop('disabled',true);
		}
	});

	// if($(':text[name="firstName"]').val() === ""){
	// 	$('.trial-btn').prop('disabled',true);
	// }

	// if($(':text[name="lastName"]').val() === ""){
	// 	$('.trial-btn').prop('disabled',true);
	// }

	// if($(':text[name="mail"]').val() === ""){
	// 	$('.trial-btn').prop('disabled',true);
	// }

	// if($(':text[name="companyName"]').val() === ""){
	// 	$('.trial-btn').prop('disabled',true);
	// }

	// if($(':text[name="department"]').val() === ""){
	// 	$('.trial-btn').prop('disabled',true);
	// }

	// if($(':text[name="position"]').val() === ""){
	// 	$('.trial-btn').prop('disabled',true);
	// }
});