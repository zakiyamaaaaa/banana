$(function(){

	var btn = document.getElementById("btnConfirm");
	$(btn).on('click',function(){

		//名前の確認
		var name = $(':text[name="name"]').val();
		$('.name-write').text(name);

		//メールの確認
		var mail = $(':text[name="mail"]').val();
		$('.mail-write').text(mail);

		//問い合わせ内容の確認
		var question = $('.form_ta').val();
		// console.log(question);
		$('.question-write').text(question);
	});
	

});