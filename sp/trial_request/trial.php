<?php

$message = "会社:". $_POST["company"] . "\n部署:" . $_POST["department"] . "\n役職:" . $_POST["position"] . "\n名前：" . $_POST["first_name"] . " " . $_POST["last_name"] . "\n送信元：" . $_POST["mail"];

mb_language("Japanese");
mb_internal_encoding("UTF-8");

if (!mb_send_mail("atjolove@yahoo.co.jp","トライアル版リクエスト", $message, "From: " . $_POST["mail"])) {
  exit("error");
}

header('Location: http://www.milenim.sakura.ne.jp/');

?>