<?php
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\SMTP;
    use PHPMailer\PHPMailer\Exception;
    require 'vendor/autoload.php';

    function adopt($text) {
        return '=?UTF-8?B?'.base64_encode($text).'?=';
    }
    $c = true;
    $mail = new PHPMailer(true);
    $subject = 'Заявка с лендинга';
    $message = "<table style='width: 100%;'>$message</table>";

    try {
        foreach ( $_POST as $key => $value ) {
            if ( $value != "" ) {
                $message .= "
                " . ( ($c = !$c) ? '<tr>':'<tr style="background-color: #f8f8f8;">' ) . "
                <td style='padding: 10px; border: #e9e9e9 1px solid;'><b>$key</b></td>
                <td style='padding: 10px; border: #e9e9e9 1px solid;'>$value</td>
            </tr>
            ";
            }
        }
        //Server settings
        $mail->SMTPDebug = SMTP::DEBUG_SERVER;
        $mail->isSMTP();
        $mail->Host       = 'smtp.gmail.com';
        $mail->SMTPAuth   = true;
        $mail->Username   = 'kremen.lendos@gmail.com';
        $mail->Password   = getenv('GMAIL_PASSWORD');
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
        $mail->Port       = 465;

        //Recipients
        $mail->setFrom($subject);
        $mail->addAddress('kremen.lendos@gmail.com', 'Serhii');
        //$mail->addAddress('vetalsd2@gmail.com');               //Name is optional
        // $mail->addReplyTo('info@example.com', 'Information');
        // $mail->addCC('cc@example.com');
        // $mail->addBCC('bcc@example.com');

        //Attachments
        // $mail->addAttachment('/var/tmp/file.tar.gz');         //Add attachments
        // $mail->addAttachment('/tmp/image.jpg', 'new.jpg');    //Optional name

        //Content
        $mail->isHTML(true);                                  //Set email format to HTML
        $mail->Subject = adopt($subject);
        $mail->Body    = $message;
        $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

        $mail->send();
        echo $_SERVER['REQUEST_METHOD'];
        //echo '<meta http-equiv="refresh" content="0; url=thanks.html" />';
    } catch (Exception $e) {
        echo "Ошибка: {$mail->ErrorInfo}";
    }