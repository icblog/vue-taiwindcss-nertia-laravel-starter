const mix = require('laravel-mix');
const tailwindcss = require('tailwindcss'); /* Add this line at t

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */


mix.js('resources/js/app.js', 'public/js')
    .extract()
    .vue(3)
    .sass('resources/sass/app.scss', 'public/css')
    .options({
        postCss: [tailwindcss('./tailwind.config.js')],
    })
    .version();

mix.browserSync({
    proxy: 'http://127.0.0.1:8000',
    open: false,
});
