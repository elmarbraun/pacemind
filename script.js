window.addEventListener('load', () => {
  const heroVideo = document.getElementById('heroVideo');
  const heroLogo = document.getElementById('heroLogo');
  const unmuteButton = document.getElementById('unmuteButton');

  heroVideo.play();

  unmuteButton.addEventListener('click', () => {
    heroVideo.muted = false;
    heroVideo.play();
    unmuteButton.style.display = 'none';
  });

  heroVideo.addEventListener('ended', () => {
    heroVideo.style.display = 'none';
    heroLogo.style.display = 'block';
  });
});

function openLightbox(type) {
  const lightbox = document.getElementById('lightbox');
  const content = document.getElementById('lightboxContent');
  lightbox.style.display = 'flex';
  content.innerHTML = `<h2>${type}</h2><p>[Scrollbarer Blindtext oder Formular]</p>`;
}

function closeLightbox() {
  document.getElementById('lightbox').style.display = 'none';
}

document.getElementById('languageSelect').addEventListener('change', (e) => {
  alert('Sprache umgeschaltet zu: ' + e.target.value);
});
