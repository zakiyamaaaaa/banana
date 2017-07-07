<?php

$message = "名前：" . $_POST["name"] . "\n送信元：" . $_POST["mail"] . "\n問い合わせ内容：" . $_POST["question"];


mb_language("Japanese");
mb_internal_encoding("UTF-8");

if (!mb_send_mail("atjolove@yahoo.co.jp","問い合わせ", $message, "From: " . $_POST["mail"])) {
  exit("error");
}

header('Location: http://www.milenim.sakura.ne.jp/');

?>