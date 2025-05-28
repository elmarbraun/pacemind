window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('heroVideo').style.display = 'none';
    const logo = document.getElementById('heroLogo');
    logo.style.display = 'block';
  }, 3000);

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
    video.addEventListener('click', () => openVideoLightbox(name));
    const text = document.createElement('div');
    text.className = 'scroll-text';
    text.innerHTML = `<h3>${name.replace('_', ' ')}</h3><p>[Blindtext]</p>`;
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
});

function openVideoLightbox(name) {
  const lightbox = document.getElementById('lightbox');
  const content = document.getElementById('lightboxContent');
  lightbox.style.display = 'flex';
  content.innerHTML = `<video controls autoplay style="width: 100%;"><source src="videos/${name}.mov" type="video/quicktime" /></video>`;
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
  content.innerHTML = `<h2>${type}</h2><p>[Scrollbarer Blindtext oder Formular]</p>`;
}
