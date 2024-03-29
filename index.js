function shadowiser(options) {
  let images = document.querySelectorAll('.shadowiser');

  if (options.shadow_type === 'hard') {
    options.shadow_type = '8px';
  }
  else {
    options.shadow_type = '15px'
  }

  images.forEach(image => {
    image.style.boxShadow = `10px 10px ${options.shadow_type} 1px rbga(0, 0, 0, 0.12)`

    if (options.padding) {
      image.style.padding = `1em`;
    }
  })
}

module.exports.shadowiser = shadowiser;