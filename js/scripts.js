// window.alert('hi ')

const photos = document.querySelectorAll('.photos li');

const random = (start, end) => {
  return start + Math.random() * (end-start);
}

photos.forEach((photo) => {
  photo.style.setProperty('--rot', `${random(-10, 10)}deg`);
  photo.style.setProperty('--posx', `${random(-50, 50)}px`);
  photo.style.setProperty('--posy', `${random(-50, 50)}px`);
  photo.style.setProperty('--zindex', `${random(1, 5)}px`);
})