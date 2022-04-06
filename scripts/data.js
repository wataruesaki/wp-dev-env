'use strict'

const wp = `<?php get_header(); ?>

<!-- ...code -->

<?php get_footer(); ?>
`

const sass = `@use "./vars" as v;
@use "./utils" as u;
@use "./config";
@use "./components";
@use "./templates";

main {
  // ...code
}
`

const js = `'use strict'

import './modules/common'
import $ from 'jquery'

$(function () {
  // ...code
})

// $(window).load(function () {
// ...code
// })
`

module.exports = {
  wp,
  sass,
  js,
}
