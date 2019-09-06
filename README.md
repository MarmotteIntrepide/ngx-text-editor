# NgxTextEditor

<p align="center">
  <a href="https://github.com/jrquick17/ngx-text-editor">
   <img src="https://raw.githubusercontent.com/jrquick17/ngx-text-editor/master/src/assets/icons/ngx-text-editor.png" alt="ngxEditor">
  </a>
</p>
<p align="center">A Simple WYSIWYG Editor for Angular 2+ Applications.</p>
<p align="center">
  <a href="https://travis-ci.org/jrquick17/ngx-text-editor">
    <img alt="Build Status" src="https://travis-ci.org/jrquick17/ngx-text-editor.svg?branch=master">
  </a>
  <a href="https://www.npmjs.com/package/ngx-text-editor">
    <img alt="npm version" src="https://img.shields.io/npm/v/ngx-text-editor.svg">
  </a>
  <a href="https://www.npmjs.com/package/ngx-text-editor">
    <img alt="npm" src="https://img.shields.io/npm/dm/ngx-text-editor.svg">
  </a>
  <a href="https://github.com/jrquick17/ngx-text-editor/blob/master/LICENSE">
    <img alt="licence" src="https://img.shields.io/npm/l/ngx-text-editor.svg">
  </a>
</p>

## Getting Started

### Installation

Install via Package managers such as [npm][npm] or [yarn][yarn]

```bash
npm install ngx-text-editor --save
# or
yarn add ngx-text-editor
```

### Usage

Import `ngx-text-editor` module

```typescript
import { NgxEditorModule } from 'ngx-text-editor';

@NgModule({
  imports: [ NgxEditorModule ]
})
```

Import [font-awesome](https://github.com/FortAwesome/Font-Awesome) into your application

Then in HTML

```html
<app-ngx-text-editor [placeholder]="'Enter text here...'" [spellcheck]="true" [(ngModel)]="htmlContent"></app-ngx-text-editor>
```

For `ngModel` to work, You must import `FormsModule` from `@angular/forms`

#### PeerDependencies

`ngx-text-editor` depends on the following libraries to work.

* [Font-Awesome v4.7.0](https://github.com/FortAwesome/Font-Awesome/tree/fa-4)
* [Ngx-Bootstrap](https://github.com/valor-software/ngx-bootstrap)

## Compatibility

All Evergreen-Browsers are supported

* Google Chrome
* Microsoft Edge
* Mozilla Firefox
* Opera

## Demo

Demo at stackblitz [ngx-text-editor](https://ngx-text-editor.stackblitz.io/)

## Documentation

Documentation is auto-generated using [compodoc][compodoc], and can be viewed here: [https://jrquick17.github.io/ngx-text-editor/](https://jrquick17.github.io/ngx-text-editor/)

[npm]: https://www.npmjs.com/
[yarn]: https://yarnpkg.com/lang/en/
[github]: https://jrquick17.github.io/
[wiki]:https://github.com/jrquick17/ngx-text-editor/wiki/ngxTextEditor
[compodoc]: https://compodoc.github.io/website/

## Contributors

* sibiraj-s
* ssuperczynski
* https://github.com/khernik93
* https://github.com/mzsolt1
* https://github.com/magicben
* https://github.com/Norddeutschland

## To Do

* Add CHANGELOG
* Create demo directory
* Add ng-packagr
* Support for Angular 2-7
* Support for Angular 8+
* Update README
* Update stackblitz
* Deploy demo website
* Release on NP, Yarn
