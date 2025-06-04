<?php
// Konfiguration
$empfaenger = "elmar@pacemind.io"; // <-- Deine echte E-Mail hier eintragen
$absenderAdresse = "website@pacemind.io"; // Optional, muss auf Mittwald existieren

// Felder auslesen und filtern
$betreff   = isset($_POST['betreff']) ? strip_tags(trim($_POST['betreff'])) : '';
$vorname   = isset($_POST['vorname']) ? strip_tags(trim($_POST['vorname'])) : '';
$nachname  = isset($_POST['nachname']) ? strip_tags(trim($_POST['nachname'])) : '';
$email     = isset($_POST['email']) ? filter_var(trim($_POST['email']), FILTER_VALIDATE_EMAIL) : '';
$nachricht = isset($_POST['nachricht']) ? strip_tags(trim($_POST['nachricht'])) : '';

// Validierung
if (!$email || !$betreff || !$vorname || !$nachname || !$nachricht) {
    die("Bitte füllen Sie alle Felder korrekt aus.");
}

// Nachricht zusammenbauen
$fullMessage = "Neue Nachricht vom Kontaktformular:\n\n";
$fullMessage .= "Name: $vorname $nachname\n";
$fullMessage .= "E-Mail: $email\n";
$fullMessage .= "Betreff: $betreff\n\n";
$fullMessage .= "Nachricht:\n$nachricht\n";

// Header vorbereiten
$header  = "From: $absenderAdresse\r\n";
$header .= "Reply-To: $email\r\n";
$header .= "Content-Type: text/plain; charset=utf-8\r\n";

// Mail versenden
if (mail($empfaenger, "Kontakt: $betreff", $fullMessage, $header)) {
    header("Location: danke.html");
    exit;
} else {
    echo "Fehler beim Versenden der Nachricht. Bitte versuchen Sie es später erneut.";
}
?>
