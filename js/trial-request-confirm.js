$(function(){
	var btn = document.getElementById("btnConfirm");
	$(btn).on('click',function(){

		var firstName = $(':text[name="firstName"]').val();
		var lastName = $(':text[name="lastName"]').val();
		var mail = $(':text[name="mail"]').val();
		var companyName = $(':text[name="companyName"]').val();
		var department = $(':text[name="department"]').val();
		var position = $(':text[name="position"]').val();

		
		$('.firstName-write').text(firstName);
		$('.lastName-write').text(lastName);
		$('.mail-write').text(mail);
		$('.companyName-write').text(companyName);
		$('.department-write').text(department);
		$('.position-write').text(position);
		
	});
});