import placeholderImageSrc from 'mobiledoc-kit/utils/placeholder-image-src';

export default {
  name: 'image',
  type: 'dom',

  render({env, options, payload}) {
    let img = document.createElement('img');
    img.src = payload.src || placeholderImageSrc;
    return img;
  }
};
