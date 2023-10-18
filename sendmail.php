<?php
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;

    require 'phpmailer/src/Esception.php';
    require 'phpmailer/src/PHPMailer.php';

    $mail = new PHPMailer(true)
    $mail->CharSet = 'UTF-8';
    $mail->setLanguage('ru', 'phpmailer/language/');
    $mail->IsHTML(true);

    $mail->setFROM('vlad.kharin.dev@gmail.com', 'VLAD')
    $mail->addAddress('koooornienko@gmail.com');
    $mail->Subject = 'Заявка';


    if(trim(!empty($_POST['user_name']))) {
        $body.=`<p><strong> Имя :</strong> '.$_POST['user_name]'.'</p>`
    }

    if(trim(!empty($_POST['user_phone']))) {
        $body.=`<p><strong> Имя :</strong> '.$_POST['user_phone]'.'</p>`
    }

    $mail->Body = $body;

    if(!$mail->send()){
        $message = 'Error'
    } else {
        $message = 'sucsses'
    }

    $response = ['message' => $message]

    header('Content-type: application/json');
    echo json_encode($response)

?>