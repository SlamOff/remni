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
    $message = "<table style='width: 100%;'>$message</table>";
    $noHTMLmessage = "";
    $url = $_SERVER["HTTP_REFERER"];

    try {
        foreach ( $_POST as $key => $value ) {
            if ( $value != "" ) {
                $noHTMLmessage .= nl2br("$key: $value".PHP_EOL);
                
                $message .= "
                " . ( ($c = !$c) ? '<tr>':'<tr style="background-color: #f8f8f8;">' ) . "
                    <td style='padding: 10px; border: #e9e9e9 1px solid;'><b>$key</b></td>
                    <td style='padding: 10px; border: #e9e9e9 1px solid;'>$value</td>
                </tr>
                ";
            }
        }
        $message .= '<b>Заявка пришла со страницы:</b> ' . $_SERVER["HTTP_REFERER"] .'<br>';
        // "utm_source=kon_fb01.22&utm_medium=ll2%_int_opt&utm_campaign=din_kreativ"
        $utms = explode("&", parse_url($url, PHP_URL_QUERY));
        // var_dump($utms[0]);

        foreach ( $utms as $utm => $val ) {
            if ( $value != "" ) {
                var_dump($utm);
                var_dump($val);
            }
        }
        
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
        // if(parse_url($url, PHP_URL_PATH) === "/") {
        //     echo '<meta http-equiv="refresh" content="0; url=thanks.html" />';
        // } else {
        //     echo '<meta http-equiv="refresh" content="0; url=thanks-ua.html" />';
        // }
    } catch (Exception $e) {
        echo "Ошибка: {$mail->ErrorInfo}";
    }