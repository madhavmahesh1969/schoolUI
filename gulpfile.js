var gulp = require('gulp');
var server = require('gulp-server-livereload');
var connect = require('gulp-connect');
var del = require('del');  
gulp.task('prepare', ['installFonts', 'fonts:dev'], function () {

    var bowerFiles = require('main-bower-files'),
        inject = require('gulp-inject'),
        angularFilesort = require('gulp-angular-filesort'),
        concat = require('gulp-concat'),
        uglify = require('gulp-uglify'),
        cleanCss = require('gulp-clean-css'),
        argv = require('yargs').argv,
        rename = require('gulp-rename'),
        gulpif = require('gulp-if')
        ;
    
    var buildDirectory = './app/assets/build';
    var vendorDirectory = './app/assets/vendors';

    var bowerStreamJS = gulp.src(bowerFiles('**/*.js'));
    var bowerStreamCSS = gulp.src(bowerFiles('**/*.css'));
   
    var appStreamJS = gulp.src(['./src/**/*.js'])
        .pipe(angularFilesort());
    var appStreamCSS = gulp.src(['./src/**/*.css']);
    var appStreamHTML = gulp.src(['./src/components/**/*.html']);
    var appStreamJSON = gulp.src(['./src/data/*.json']);

    
    // run this action if gulp is run with --production argument
    if (!argv.production) {
        // Concatenate and minify bower scripts
        bowerStreamJS = bowerStreamJS
            .pipe(concat('vendors.js'))
            .pipe(uglify())
            .pipe(gulp.dest(buildDirectory));

        // Concatenate and minify bower css
        bowerStreamCSS = bowerStreamCSS
            .pipe(concat('vendors.css'))
            .pipe(cleanCss())
            .pipe(gulp.dest(buildDirectory));

        // Concatenate and minify app scripts
        appStreamJS = appStreamJS
            .pipe(concat('app.js'))
            .pipe(uglify())
            .pipe(gulp.dest(buildDirectory));

        // Concatenate and minify app css
        appStreamCSS = appStreamCSS
            .pipe(concat('app.css'))
            .pipe(cleanCss())
            .pipe(gulp.dest(buildDirectory));
            
        appStreamHTML = appStreamHTML.
            pipe(gulp.dest('./app/html'));
        
        appStreamJSON = appStreamJSON.
            pipe(gulp.dest('./app/data'));    
    }
    // default gulp action
    else {
        bowerStreamJS = bowerStreamJS
            .pipe(gulp.dest(vendorDirectory));
        bowerStreamCSS = bowerStreamCSS
            .pipe(gulp.dest(vendorDirectory));

        appStreamJS = appStreamJS.
            pipe(gulp.dest(vendorDirectory))
            .pipe(angularFilesort());
        appStreamCSS = appStreamCSS.
            pipe(gulp.dest(vendorDirectory));
        appStreamHTML = appStreamHTML.
            pipe(gulp.dest('./app/html'));
        appStreamJSON = appStreamJSON.
            pipe(gulp.dest('./app/data'));
    }

    // choose source index.html to inject
    gulp.src('./src/index.html')
        // send bower bower scripts
        .pipe(
            inject(bowerStreamJS, {relative: true, name: 'bower'})
        )
        // send bower bower css
        .pipe(
            inject(bowerStreamCSS, {relative: true, name: 'bower'})
        )
        // send app scripts
        .pipe(
            inject(appStreamJS, {relative: true})
        )
        // send app css
        .pipe(
            inject(appStreamCSS, {relative: true})
        )
        // create index.prod.html if run with --production argument
        .pipe(
            gulpif(argv.production, rename('index.prod.html'))
        )
        // save the file
        .pipe(
            gulp.dest('app')
        );

});


gulp.task('installFonts', function () {
    var bowerFiles = require('main-bower-files');

    return gulp.src(bowerFiles('**/fonts/*'))
        .pipe(gulp.dest('./app/assets/fonts'));

});
 gulp.task('fonts:dev', function () {
    var bowerFiles = require('main-bower-files');
    //TO-DO test the below commented task for all sort of font files
    //return gulp.src(bowerFiles('**/*.{eot,svg,ttf,woff,woff2}'))
      //.pipe(gulp.dest('./app/assets/vendors'));
    var argv = require('yargs').argv;
    var buildDirectory = './app/assets/build';
    var vendorDirectory = './app/assets/build';
    var destDirectory;
    
    if (!argv.production) {  
        destDirectory = buildDirectory;
    } else {
        destDirectory = vendorDirectory;
    }
    return gulp.src('./bower_components/angular-ui-grid/**/*.{ttf,woff}')
            .pipe(gulp.dest(destDirectory));
  
});

/* gulp.task('webserverReload',['prepare'], function() {
  gulp.src('app')
    .pipe(server({
      livereload: true,
      directoryListing: false,
      open: true
    }));
}); */

gulp.task('webserver', ['prepare'], function() {
  connect.server({
    /* name: 'Dev App',
    root: ['app'], */
    port: 8000,
    livereload: true
  });
});

gulp.task('clean', function () {
  del(['app']);
});

gulp.task('run',['webserver']);