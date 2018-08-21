# Drupal Bootstrap Webpack

This is an example of using webpack in Drupal theme. Specifically, this repository contains the SASS starterkit of the [Drupal Bootstrap](https://www.drupal.org/project/bootstrap) theme. It is modified to work with webpack. The detailed change list is below (to-do).

This starterkit is taken from version [8.x-3.12 of the bootstrap theme](https://www.drupal.org/project/bootstrap/releases/8.x-3.12). I'll try to keep this updated but changes should not be significant.

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
4. Start working on your theme. The SCSS files are in `assets/scss` and JavaScript files are in `assets/js` directories. You may modify other directories as you wish.
5. Run `npm run dev` to run webpack in development mode. You may also watch for changes using `npm run watch`. For production mode, run `npm run production`.

## Changes from starterkit

(to-do)
