const withImages = require('next-images')

module.exports = withImages({
  esModule: true,
  images: {
    domains: [
      'justdigital.com.br',
      'imagens.canaltech.com.br',
      'thumbs.buscape.com.br',
      'imgmanagercb-a.akamaihd.net',
      'www.nuvo.sk'
    ],
  },
})
