const purgecss = require('@fullhuman/postcss-purgecss')
const cssnano = require('cssnano')

module.exports = {
  plugins: [
    require('tailwindcss'),
    process.env.NODE_ENV === 'production' ? require('autoprefixer') : null,
    process.env.NODE_ENV === 'production'
      ? cssnano({ preset: 'default' })
      : null,
    purgecss({
        content: ['./dist/index.html', './dist/prod_glucosure/star.html', './dist/prod_heamosmart/heamo.html', './dist/prod_multisure/multi.html', './dist/other_prod/prod.html', './dist/price_list/price.html', './dist/contact/contact.html'],
      defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
    })
  ]
}

