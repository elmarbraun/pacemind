
window.addEventListener('load', () => {
  const heroVideo = document.getElementById('heroVideo');
  const heroLogo = document.getElementById('heroLogo');
  const unmuteButton = document.getElementById('unmuteButton');
  const hero = document.getElementById('hero');

  heroVideo.play();

  unmuteButton.addEventListener('click', () => {
    heroVideo.muted = false;
    heroVideo.play();
    unmuteButton.style.display = 'none';
  });

  heroVideo.addEventListener('ended', () => {
    heroVideo.style.display = 'none';
    unmuteButton.style.display = 'none';
    heroLogo.style.display = 'block';

    const images = ['images/atmo1.png', 'images/atmo2.png', 'images/atmo3.png', 'images/atmo4.png'];
    function shuffle(array) {
      let currentIndex = array.length, randomIndex;
      while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
      }
      return array;
    }

    const shuffled = shuffle([...images]);
    let index = 0;
    function cycleBackgrounds() {
      hero.style.backgroundImage = `url('${shuffled[index]}')`;
      index = (index + 1) % shuffled.length;
    }

    cycleBackgrounds();
    hero.classList.add("animate");
    setInterval(cycleBackgrounds, 8000);
  });

  // Scroll-Abschnitte mit Videos
  const videos = [
    "anmelden", "sprachwahl", "aktivitaetsbericht", "fitnessziele",
    "leistungszeitraum", "alle_trainings_analysieren", "letzte_aktivitaet", "ki_coach"
  ];

  const container = document.getElementById('content');
  videos.forEach((name, index) => {
    const section = document.createElement('section');
    section.className = 'scroll-section';
    const video = document.createElement('video');
    video.src = 'videos/' + name + '.mp4';
    video.muted = true;
    video.setAttribute("playsinline", "");
    video.setAttribute("autoplay", "");
    video.setAttribute("loop", "");
    video.addEventListener('click', () => openVideoLightbox(name));
    const text = document.createElement('div');
    text.className = 'scroll-text';
   let textHTML = `<h3>${name.replace('_', ' ')}</h3><p>Lorem ipsum dolor sit amet ... </p>`;

if (name === "anmelden") {
  textHTML = `<h3><b>Anmelden</b></h3><p>
    <a href="https://PaceMind.app" target="_blank">PaceMind.app</a> aufrufen und warten bis der Ladevorgang abgeschlossen ist und dann auf "Jetzt verbinden" klicken. Sollte bisher noch
    keine Freigabe von Strava für PaceMind vorliegen, öffnet sich ein Dialog von Strava, in dem Du dazu aufgefordert wirst, die Freigabe der Daten durch Eingabe von Benutzername und Passwort
    zu erteilen. PaceMind kennt Deine Zugangsdaten nicht und speichert sie nicht. Zukünftig wird Strava einfach nachschauen, ob Du PaceMind erlaubt hast, und Du musst den Prozess
    nicht wiederholen. Die Freigabe kannst Du jederzeit auf Deinem Strava-Account wieder löschen.
  </p>`;
}

if (name === "sprachwahl") {
  textHTML = `<h3><b>Sprachwahl</b></h3><p>
    PaceMind soll allen Usern auf allen Geräten zur Verfügung stehen, derzeit kann die Sprache zwischen Deutsch, Englisch, Französisch und Spanisch geändert werden. Bitte beachte,
    daß Du einmal auf "Verbindung trennen" und dann wieder auf "Jetzt verbinden" klicken solltest, da mit alles frisch und sauber in der gewählten Sprache gezogen wird.
  </p>`;
}

if (name === "aktivitaetsbericht") {
  textHTML = `<h3><b>Aktivitätsbericht</b></h3><p>
    Default ist der Leistungszeitraum (siehe unten) in den Voreinstellungen auf das aktuelle Jahr eingestellt. Dieser Zeitraum wird dann betrachtet und für die drei derzeit unterstützen
  Sportarten (Laufen, Radfahren, Schwimmen) in jeweils zwei Grafiken zusammengefasst, denen Du auf einen Blick Deine Leistungsveränderung und die wichtigsten Grunddaten (Anzahl der
  Trainings, Dauer und Entfernung) entnehmen kannst. Willst Du etwas anderes oder mehr wissen nutze einfach den KI Coach (s.u.)
  </p>`;
}

if (name === "fitnessziele") {
  textHTML = `<h3><b>Fitnessziele</b></h3><p>
 Du kannst ein oder mehrere Ziele eingeben, bitte drücke Dich dabei klar und einfach aus. Schreibe zum Beispiel: Ich will 5km unter 40 Minuten laufen können." Damit verbesserst du
    die Trainingstipps und die Analyse Deiner Trainings erfolgt in diesem Kontext - wird also wesentlich individueller und konkreter.
  </p>`;
}

if (name === "leistungszeitraum") {
  textHTML = `<h3><b>Leistungszeitraum</b></h3><p>
 Der Leistungszeitraum oder auch Aktivitätszeitraum bestimmt, welche und wieviele Daten PaceMind holt. Je größer der Zeitraum, desto länger kann die Analyse natürlich dauern,
    meist ist es aber mit wenigen Sekunden getan. Die Daten werden nur lokal auf Deinem Gerät gespeichert. Wenn Du uns helfen willst besser zu werden, lege bitte den Schalter 
    "Anonyme Datenfreigabe" um. Wir speichern dann die Daten aus dem gewählten Leistungszeitraum anonymisiert in unserer Datenbank ab. Dabei werden keine Daten, die Dich 
    identifizierbar machen könnten verwendet. Je mehr Trainings wir aber von unseren Anwendern freigeben bekommen, desto mehr Datenpunkte für eine fundiertere Analyse
    haben wir dann zur Verfügung und die KI wird schluer - es wird also für alle ein bischen besser, wenn Du da mitmachst.
  </p>`;
}

if (name === "alle_trainings_analysieren") {
  textHTML = `<h3><b>Alle Trainings analysieren</b></h3><p>
    Es kann ein paar Augenblicke dauern, bis der blaue Button "Alle anzeigen" erscheint. Wenn Du da drauf klickst, öffnet sich eine
    nach Monaten und Sportarten gruppierte Übersicht aller Deiner Trainings im Aktivitätszeitraum. Du kannst Dir dann für jedes x-beliebige Training einen Bericht geben lassen
    und wenn Du magst, auch gezielt die restlichen Details von Strava holen. Auf dem Handy kannst Du horizontal wischen, um zwischen den Anwendungen zu wechseln – am Computer sind es 
    zwei unterschiedliche Browsertabs.
  </p>`;
}

if (name === "letzte_aktivitaet") {
  textHTML = `<h3><b>Letzte Aktivität</b></h3><p>
    Die Panels zeigen Dir jeweils das letzte Lauf Rad und Schwimmtraining mit den wichtigsten Kenndaten an. Du kannst Dir eine Analyse mit Bewertung Vergleichseinblick und Empfehlungen 
geben lassen (denk daran Trainingsziele (s.o.) zu bestimmen) oder Dir weitere Details von Strava holen.
  </p>`;
}

if (name === "ki_coach") {
  textHTML = `<h3><b>KI Fitness Coach</b></h3><p>
Alles, was man aus Deinen Daten herauslesen kann kannst Du hier einfach fragen - was war meine schnellste Pace? Vergleiche die Läufe vom Tag x und Tag Y! Gib mir Tipps was ich heute
trainieren soll! All das und vieles mehr geht. Aber die KI muss noch lernen und braucht dazu noch viele Fragen und Datenpunkte.
  </p>`;
}

text.innerHTML = textHTML;

    text.addEventListener('click', () => openVideoLightbox(name));
    if (index % 2 === 0) {
      section.appendChild(video);
      section.appendChild(text);
    } else {
      section.appendChild(text);
      section.appendChild(video);
    }
    container.appendChild(section);
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.2 });

  setTimeout(() => {
    document.querySelectorAll('.scroll-section').forEach(section => {
      observer.observe(section);
    });
  }, 100);
});

function openVideoLightbox(name) {
  const lightbox = document.getElementById('lightbox');
  const content = document.getElementById('lightboxInner');
  lightbox.style.display = 'flex';
  content.innerHTML = `
    <video controls autoplay style="width: 100%;">
      <source src="videos/${name}.mov" type="video/quicktime" />
    </video>`;
}


function closeLightbox() {
  document.getElementById('lightbox').style.display = 'none';
}

document.getElementById('languageSelect').addEventListener('change', (e) => {
  alert('Sprache umgeschaltet zu: ' + e.target.value);
});

function openLightbox(type) {
  const lightbox = document.getElementById('lightbox');
  const content = document.getElementById('lightboxContent');
  lightbox.style.display = 'flex';
  content.innerHTML = `<h2>${type}</h2><p>Lorem ipsum dolor sit amet...</p>`;
}
