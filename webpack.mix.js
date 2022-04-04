'use strict'

const mix = require('laravel-mix')

mix
  .js('src/js/**/*.js', 'theme/assets/js')
  .postCss('src/app.css', 'theme/assets/css', [require('tailwindcss')])
