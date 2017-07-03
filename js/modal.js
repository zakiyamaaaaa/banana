$(function(){
	var modal = document.getElementById('confirmModal');
	var modalContent = document.getElementById('inline_content');
	var btn = document.getElementById("btnConfirm");
	var span = document.getElementsByClassName("close")[0];
	$(btn).on('click', function() {
	    modal.style.display = "block";
	});
	$(modal).on('click', function(event) {
		if((modal.style.display == "block")&&!($(event.target).closest(modalContent).length)) {
			modal.style.display = "none";
		}
	});
});