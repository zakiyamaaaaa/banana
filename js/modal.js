$(function(){
	console.log("hogeaaaa");
	var modal = document.getElementById('confirmModal');
	var modalContent = document.getElementById('inline_content');
	var btn = document.getElementById("btnConfirm");
	var span = document.getElementsByClassName("close")[0];

	$(btn).on('click', function() {
		// var firstName = $(':text[name="firstName"]').val();
		// var lastName = $(':text[name="lastName"]').val();
		// var mail = $(':email[name="mail"]').val();
		// var companyName = $(':text[name="companyName"]').val();
		// var department = $(':text[name="department"]').val();
		// var position = $(':text[name="position"]').val();

		// if(firstName === ""){
		// 	console.log("no");
		// 	return
		// 	console.log("ok");
		// }
		console.log("hoge");
	    modal.style.display = "block";
	});
	$(modal).on('click', function(event) {
		if((modal.style.display == "block")&&!($(event.target).closest(modalContent).length)) {
			modal.style.display = "none";
		}
	});
});