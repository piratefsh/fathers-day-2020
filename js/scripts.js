// window.alert('hi ')

const photos = document.querySelectorAll('.photos li');

const random = (start, end) => {
  return start + Math.random() * (end-start);
}

photos.forEach((photo) => {
  photo.style.setProperty('--rot', `${random(-15, 15)}deg`);
  photo.style.setProperty('--posx', `${random(-40, 40)}px`);
  photo.style.setProperty('--posy', `${random(-40, 40)}px`);
})