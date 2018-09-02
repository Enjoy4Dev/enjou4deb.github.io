<?
$email = "baicov.andrey@gmail.com";
function sanitize($str){
    return stripslashes(strip_tags(trim($str)));
}

$_POST['Prenume'] = sanitize($_POST['prenume']);
$_POST['Nume'] = sanitize($_POST['nume']);
$_POST['Email'] = sanitize($_POST['email']);
$_POST['Phone'] = sanitize($_POST['phone']);
$_POST['Type'] = sanitize($_POST['type']);
$_POST['Clinica'] = sanitize($_POST['clinica']);
$_POST['Trimitere'] = sanitize($_POST['check1']);
$_POST['Software'] = sanitize($_POST['check2']);
$_POST['Partener'] = sanitize($_POST['check3']);
$_POST['Mesage'] = sanitize($_POST['mesage']);

$theme = "Сообщение с сайта {$_SERVER['HTTP_HOST']}";

if($_POST['prenume'] != ''){
    $msg .= "<b>Prenume</b>: ".$_POST['prenume'].'<br/>';
}
if($_POST['nume'] != ''){
    $msg .= "<b>Nume</b>: ".$_POST['nume'].'<br/>';
}
if($_POST['email'] != ''){
    $msg .= "<b>Email</b>: ".$_POST['email'].'<br/>';
}
if($_POST['phone'] != ''){
    $msg .= "<b>Phone</b>: ".$_POST['phone'].'<br/>';
}
if($_POST['type'] != ''){
    $msg .= "<b>Type</b>: ".$_POST['type'].'<br/>';
}
if($_POST['clinica'] != ''){
    $msg .= "<b>Clinica</b>: ".$_POST['clinica'].'<br/>';
}
if($_POST['check1'] != ''){
    $msg .= "<b>Trimitere</b>: ".$_POST['check1'].'<br/>';
}
if($_POST['check2'] != ''){
    $msg .= "<b>Software</b>: ".$_POST['check2'].'<br/>';
}
if($_POST['check3'] != ''){
    $msg .= "<b>Partener</b>: ".$_POST['check3'].'<br/>';
}
if($_POST['mesage'] != ''){
    $msg .= "<b>Mesage</b>: ".$_POST['mesage'].'<br/>';
}

$headers  = "Content-type: text/html; charset=utf-8 \r\n"; 
$headers .= "From: no_reply@google.com\r\n";

$file = fopen('logs.txt', 'w');
if(mail($email, $theme, $msg, $headers)){
    fwrite($file, 'ok');
} else {
    fwrite($file, 'not ok' );
}
fclose($file);

?>