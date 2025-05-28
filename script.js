
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
    text.innerHTML = `<h3>${name.replace('_', ' ')}</h3><p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat...</p>`;
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
