$(function(){
	$('#btnConfirm').click(function() {
        let name = $('input[name="name"]').val();
        let mail = $('input[name="mail"]').val();
        let question = $('textarea').val();
        let consent = $('input[type="checkbox"]:checked').val();

        // validation
        if (name === "") {
            alert("お名前を入力してください。");
            return;
        }

        if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mail) === false) {
            alert("メールアドレスが正しくありません。");
            return;
        }

        if (question === "") {
            alert("問い合わせ内容を入力してください。");
            return;
        }

        if (consent !== "on") {
            alert("個人情報の取扱について同意してください。");
            return;
        }

        // inject value
        $('#modal_name').val(name);
        $('#modal_mail').val(mail);
        $('#modal_question').val(question);

        $('#modal_name_show').text(name);
        $('#modal_mail_show').text(mail);
        $('#modal_question_show').text(question);

        // show modal
        $('#confirmModal').show();
	});

	$('#confirmModal').click(function (event){
        // 自分の領域外をクリックされたら閉じる
        if (!$(event.target).closest($('#inline_content')).length) {
	        $(this).hide();
        }
	});
});