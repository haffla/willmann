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
      swiper: ['dist/css/swiper.min.css']
  conventions:
    ignored: () -> false
    assets: /assets\//
  plugins:
    sharp:
      src: 'photos'
      dest: 'static/photos'
      tasks:
        [
          [
            {resize: [1200, null]}
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
