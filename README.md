

![](https://raw.githubusercontent.com/amlashi-sadra/awesome-medium-editor/master/public/src/img/ame-logo.png)

# Awesome Medium Editor
[![Version](https://img.shields.io/badge/version-1.0-red.svg?style=flat)](https://github.com/amlashi-sadra/awesome-medium-editor)
[![License](https://img.shields.io/badge/licence-MIT-lightgrey.svg?style=flat)](https://github.com/amlashi-sadra/awesome-medium-editor)
[![Dependencies](https://img.shields.io/badge/dependencies-non-yellow.svg?style=flat)](#)
[![Demo](https://img.shields.io/badge/demo-yes-green.svg?style=flat)](http://ame.isapanah.com)
[![Gitter](https://img.shields.io/badge/gitter-join%20chat-brightgreen.svg?style=flat)](https://gitter.im/Awesome-Medium-Editor)

This plugin expands capabilities of [MediumEditor](https://github.com/yabwe/medium-editor) (a clone of medium.com WYSIWYG editor) and it enables users to insert into the editor various types of content (depending on available addons).

Currently available features:  

- Support <b>RTL</b> Language _(Farsi, Hebrew, Arabic & ...)_
- Insert Image (from url)
- Extract content as *html* or *markdown*
# Browser Support

<img src="https://raw.githubusercontent.com/amlashi-sadra/awesome-medium-editor/master/img/browser-support.jpg" alt="Smiley face" width="450px">

<img src="https://raw.githubusercontent.com/amlashi-sadra/awesome-medium-editor/master/img/browser-support-2.jpg" alt="Smiley face">

# Quick Start

The first step is to include the plugin with all its dependencies to your code:  

```html

<!-- CSS -->

<link rel="stylesheet" href="dist/css/demo.css">

<link rel="stylesheet" href="dist/css/font-awesome.css">

<link rel="stylesheet" href="dist/css/medium-editor.min.css">

<link rel="stylesheet" href="dist/css/themes/default.css" id="medium-editor-theme">

<link rel="stylesheet" href="dist/css/medium-editor-insert-plugin.min.css">

<link rel="stylesheet" href="dist/css/toastr.min.css">

<link rel="stylesheet" href="src/css/style.css">

<!-- JS -->

<script src="dist/js/jquery.min.js"></script>

<script src="dist/js/medium-editor.js"></script>

<script src="dist/js/handlebars.runtime.min.js"></script>

<script src="dist/js/medium-editor-insert-plugin.js"></script>

<script src="dist/js/to-markdown.js"></script>

<script src="dist/js/bootstrap.min.js" ></script>

<script src="dist/js/toastr.min.js"></script>

<script src="src/js/main.js"></script>

<!-- Latest compiled and minified CSS -->

<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">

<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous">

```

If you want use RTL support, put both button in your code:

```html

<button type="button" class="btn btn-warning" id="dir-ltr">LTR</button>

<button type="button" class="btn btn-default" id="dir-rtl">RTL</button>

```

If you want to extract and copy your code as *html* or *markdown* just put these buttons:

```html

<button type="button" class="btn btn-success" id="extract-to-html">HTML</button>

<button type="button" class="btn btn-success" id="extract-to-markdown">Mardown</button>

```

Initialize MediumEditor as you normally would:  

```html

<div class="editable" id="editable-container">   

```

For final step, put the following javascript source for the Medium-Editor:

```html

<div class="editable" id="editable-container">   

```

now, everything is ready! 😉👌

# Demo Link

[http://ame.isapanah.com](http://ame.isapanah.com)

# Demo Pictures

<img src="https://raw.githubusercontent.com/amlashi-sadra/awesome-medium-editor/master/img/awesome-medium-editor-ltr.jpg" width="400"> <img src="https://raw.githubusercontent.com/amlashi-sadra/awesome-medium-editor/master/img/awesome-medium-editor-rtl.jpg" width="400">

# Contributing

[Kill some bugs 😈](https://github.com/amlashi-sadra/awesome-medium-editor/issues)

1.  Fork it
2.  Create your feature branch (git checkout -b my-new-feature)
3.  Test your changes to the best of your ability.
4.  Update the documentation to reflect your changes if they add or changes current functionality.
5.  Commit your changes (git commit -am 'Added some feature') without files from the dist directory.
6.  Push to the branch (git push origin my-new-feature)
7.  Create new Pull Request

# License
MIT: [https://github.com/yabwe/medium-editor/blob/master/LICENSE](https://github.com/yabwe/medium-editor/blob/master/LICENSE)
