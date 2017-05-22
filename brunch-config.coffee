lightbox_images = ['close.png', 'loading.gif', 'next.png', 'prev.png']

module.exports = config:
  paths:
    public: 'static'
  files:
    javascripts: joinTo: 'js/app.js'
    stylesheets: joinTo: 'css/app.css'
  npm:
    enabled: true
    globals:
      $: 'jquery'
      jQuery: 'jquery'
    styles:
      'lightbox2': ['dist/css/lightbox.min.css']
  plugins:
    copycat:
      images: lightbox_images.map (image) -> 'node_modules/lightbox2/dist/images/' + image
      onlyChanged: true
      verbose: false
    sharp:
      src: 'photos'
      dest: 'static/photos'
      imageExt: ['jpg', 'jpeg']
      tasks:
        [
          [
            {resize: [16383, null]}
            {withoutEnlargement: true}
            {rename: '{base}.{ext}'}
          ]
          [
            {resize: [400, null]}
            {withoutEnlargement: true}
            {quality: 75}
            {rename: 'thumb_md-{base}.{ext}'}
          ]
          [
            {resize: [200, null]}
            {withoutEnlargement: true}
            {quality: 75}
            {rename: 'thumb_sm-{base}.{ext}'}
          ]
        ]
