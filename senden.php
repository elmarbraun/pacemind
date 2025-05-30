<?php
// Einfache Validierung
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $betreff    = htmlspecialchars($_POST["betreff"]);
    $vorname    = htmlspecialchars($_POST["vorname"]);
    $nachname   = htmlspecialchars($_POST["nachname"]);
    $email      = filter_var($_POST["email"], FILTER_VALIDATE_EMAIL);
    $nachricht  = htmlspecialchars($_POST["nachricht"]);

    if ($email) {
        $to = "braun.elmar@gmail.com"; // << hier deine Zieladresse einsetzen
        $subject = "Kontaktformular: $betreff";
        $message = "Von: $vorname $nachname\n";
        $message .= "E-Mail: $email\n\n";
        $message .= "Nachricht:\n$nachricht";

        $headers = "From: kontaktformular@deinedomain.de\r\n";
        $headers .= "Reply-To: $email\r\n";

        if (mail($to, $subject, $message, $headers)) {
            echo "<p style='color:green'>Vielen Dank! Deine Nachricht wurde erfolgreich gesendet.</p>";
        } else {
            echo "<p style='color:red'>Fehler beim Senden der Nachricht.</p>";
        }
    } else {
        echo "<p style='color:red'>Ungültige E-Mail-Adresse.</p>";
    }
} else {
    echo "<p style='color:red'>Ungültige Anfrage.</p>";
}
?>
