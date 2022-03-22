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
    $subject = 'Заявка с лендинга Kremen';
    $message = "<table style='width: 100%;'>$message";
    $noHTMLmessage = "";

    try {
        foreach ( $_POST as $key => $value ) {
            if ( $value != "" ) {
                $noHTMLmessage .= nl2br("$key: $value".PHP_EOL);
                
                $message .= "
                " . ( ($c = !$c) ? '<tr>':'<tr style="background-color: #f8f8f8;">' ) . "
                    <td style='padding: 10px; border: #e9e9e9 1px solid;width:150px;'><b>$key</b></td>
                    <td style='padding: 10px; border: #e9e9e9 1px solid;'>$value</td>
                </tr>
                ";
            }
        }
        
        $utms = explode("&", parse_url($_SERVER["HTTP_REFERER"], PHP_URL_QUERY));

        foreach ( $utms as $key ) {
            if ( $key != "" ) {
                $message .= "
                    " . ( ($c = !$c) ? '<tr>':'<tr style="background-color: #f8f8f8;">' ) . "
                        <td style='padding: 10px; border: #e9e9e9 1px solid;'><b>".explode("=", $key)[0]."</b></td>
                        <td style='padding: 10px; border: #e9e9e9 1px solid;'>".explode("=", $key)[1]."</td>
                    </tr>
                    ";
            }
        }
        $message .= '</table><br><b>Заявка пришла со страницы:</b> ' . $_SERVER["HTTP_REFERER"] .'<br>';
        
        //Server settings
        //$mail->SMTPDebug = SMTP::DEBUG_SERVER;
        $mail->isSMTP();
        $mail->Host       = 'smtp.gmail.com';
        $mail->SMTPAuth   = true;
        $mail->Username   = 'kremen.lendos@gmail.com';
        $mail->Password   = getenv('GMAIL_PASSWORD');
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
        $mail->Port       = 465;

        //Recipients
        $mail->setFrom('kremen.lendos@gmail.com', adopt($subject));
        $mail->addAddress('kremen.lendos@gmail.com', 'Serhii');

        //Content
        $mail->isHTML(true);
        $mail->Subject = adopt($subject);
        $mail->Body    = $message;
        $mail->AltBody = $noHTMLmessage;

        $mail->send();
        if(parse_url($_SERVER["HTTP_REFERER"], PHP_URL_PATH) === "/") {
            echo '<meta http-equiv="refresh" content="0; url=thanks.html" />';
        } else {
            echo '<meta http-equiv="refresh" content="0; url=thanks-ua.html" />';
        }
    } catch (Exception $e) {
        echo "Ошибка: {$mail->ErrorInfo}";
    }