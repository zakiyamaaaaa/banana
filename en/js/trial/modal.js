$(function(){
    $('button').click(function() {
        let firstName = $('input[name="firstName"]').val();
        let lastName = $('input[name="lastName"]').val();
        let mail = $('input[name="mail"]').val();
        let mail2 = $('input[name="mail-confirm"]').val();
        let company = $('input[name="companyName"]').val();
        let department  = $('input[name="department"]').val();
        let position = $('input[name="position"]').val();
        let consent = $('input[type="checkbox"]:checked').val();

        // validation
        if (firstName === "" || lastName === "") {
            alert("お名前を入力してください。");
            return;
        }

        if (mail !== mail2) {
            alert("確認用メールアドレスが一致しません。");
            return;
        }

        if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mail) === false) {
            alert("メールアドレスが正しくありません。");
            return;
        }

        if (company === "") {
            alert("会社名を入力してください。");
            return;
        }

        if (company === "") {
            alert("会社名を入力してください。");
            return;
        }

        if (department === "") {
            alert("部署名を入力してください。");
            return;
        }

        if (position === "") {
            alert("役職名を入力してください。");
            return;
        }

        if (consent !== "on") {
            alert("個人情報の取扱について同意してください。");
            return;
        }

        // inject value
        $('#modal_first_name').val(firstName);
        $('#modal_last_name').val(lastName);
        $('#modal_mail').val(mail);
        $('#modal_company').val(company);
        $('#modal_department').val(department);
        $('#modal_position').val(position);

        $('.firstName-write').text(firstName);
        $('.lastName-write').text(lastName);
        $('.mail-write').text(mail);
        $('.companyName-write').text(company);
        $('.department-write').text(department);
        $('.position-write').text(position);

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