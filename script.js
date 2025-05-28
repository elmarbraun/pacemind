window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('heroVideo').style.display = 'none';
    const logo = document.getElementById('heroLogo');
    logo.style.display = 'block';
  }, 3000);
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