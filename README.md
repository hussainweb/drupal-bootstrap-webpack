# Drupal Bootstrap Webpack

This is an example of using webpack in Drupal theme. Specifically, this repository contains the generic starterkit of the [Drupal Bootstrap](https://www.drupal.org/project/bootstrap) theme and the SASS based assets from [drupal-bootstrap-styles](https://github.com/unicorn-fail/drupal-bootstrap-styles). It is modified to work with webpack. The detailed change list is below (to-do).

This starterkit is taken from version [8.x-3.23 of the bootstrap theme](https://www.drupal.org/project/bootstrap/releases/8.x-3.23). I'll try to keep this updated but changes should not be significant.

## Usage

1. Download this theme into your `themes/custom` directory. You could do a git clone as well but that probably doesn't make much sense. Extract the archive and rename the directory to whatever you wish.

```bash
$ wget https://github.com/hussainweb/drupal-bootstrap-webpack/archive/master.zip
$ unzip master.zip
$ mv drupal-bootstrap-webpack mytheme
```

2. Next, rename various instances of `THEMENAME` in filenames and config files to match your theme name (e.g. `mytheme`). You may also use a script for that purpose.

```bash
$ cd mytheme
$ ./set-theme-name.sh mytheme
```

3. Run `npm install`.
4. Start working on your theme. The SCSS files are in `assets/scss` and JavaScript files are in `assets/js` directories. You may modify other directories as you wish. More details about the SCSS files are present in its own [README](assets/scss/README.md) file.
5. Run `npm run dev` to run webpack in development mode. You may also watch for changes using `npm run watch`. For production mode, run `npm run production`.

### Additional notes

You do not need to follow all the steps from the official [sub-theming guide](https://drupal-bootstrap.org/api/bootstrap/docs!Sub-Theming.md/group/sub_theming/8.x-3.x). This template already takes care of getting the [drupal-bootstrap-styles](https://github.com/unicorn-fail/drupal-bootstrap-styles) and putting them in the correct location for you. You only need to follow the steps above.

## Customizing the Bootstrap Framework

The files in the `assets` directory are structured in a which makes it easy to select and load only those parts of Bootstrap framework which you actually need. The entrypoint for webpack is [`assets/js/index.js`](assets/js/index.js) which gives an example of loading bootstrap itself and other resources you need. There is also an example of adding your own Drupal behaviors.

The above index.js loads the [`style.scss`](assets/sass/style.scss) which is responsible for loading all the required CSS. Bootstrap specific styles are defined in [`bootstrap.scss`](assets/scss/bootstrap.scss). This loads the entire framework but you are free to remove any components that you don't need by removing or commenting out the appropriate line.

## Changes from the starterkit and drupal-bootstrap-styles

This template differs from the generic starterkit in these ways:

1. The `THEMENAME.libraries.yml` refers to the final location of built files. By default, the files are output in `build` directory, not `css` directory.
2. The [bootstrap theme sub-theming documentation](https://drupal-bootstrap.org/api/bootstrap/docs!Sub-Theming.md/group/sub_theming/8.x-3.x) mentions storing the [Bootstrap SASS source in your sub-theme](https://github.com/twbs/bootstrap-sass). This is not required when using this template as the source is pulled using npm and references are stored in the [_drupal-bootstrap.scss](assets/scss/_drupal-bootstrap.scss) file.
3. The SCSS files themselves use the bootstrap-sass package installed by npm and does not expect it to be present in any specific path. For this reason, the SCSS files present in the `assets/sass` directory will refer to bootstrap framework files using the syntax `~bootstrap-sass/<path>` rather than `../bootstrap/<path>`.
