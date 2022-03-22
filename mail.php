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
        
        // "utm_source=kon_fb01.22&utm_medium=ll2%_int_opt&utm_campaign=din_kreativ"
        $utms = explode("&", parse_url($_SERVER["HTTP_REFERER"], PHP_URL_QUERY));
        //var_dump($utms);

        foreach ( $utms as $key ) {
            
            if ( $key != "" ) {
                var_dump($key);
                foreach ( explode("=", $key) as $keey ) {
                    var_dump($keey);
                }
            }
            // $message .= "
            // " . ( ($c = !$c) ? '<tr>':'<tr style="background-color: #f8f8f8;">' ) . "
            //     <td style='padding: 10px; border: #e9e9e9 1px solid;'><b>$key</b></td>
            //     <td style='padding: 10px; border: #e9e9e9 1px solid;'>$value</td>
            // </tr>
            // ";
        }
        $message .= '<br><b>Заявка пришла со страницы:</b> ' . $_SERVER["HTTP_REFERER"] .'<br>';
        
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
        // if(parse_url($_SERVER["HTTP_REFERER"], PHP_URL_PATH) === "/") {
        //     echo '<meta http-equiv="refresh" content="0; url=thanks.html" />';
        // } else {
        //     echo '<meta http-equiv="refresh" content="0; url=thanks-ua.html" />';
        // }
    } catch (Exception $e) {
        echo "Ошибка: {$mail->ErrorInfo}";
    }