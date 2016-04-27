# Framework tools

This project goal is to have simple frontend definitions to make scalable projects.

## Components

Everything is a component, the app itself is a component, the objects and functions inside the app can be components too.

The architecture of a component is:

```
└── components
    └── app
        ├── README.md
        ├── component.js
        ├── data
        ├── scripts
        ├── styles
        ├── templates
        └── tests
````

So...

- In Data folder contain index.json (can be xml, yml, csv, ...) and other data files.
- In Script folder contain index.js and other js files, being js modules tools like browserify, rollup or webpack will deal with it.
- In Styles folder contain index.css (can be sass, styl, less, scss, ...) and other stylesheets if needed for the component.
- In Templates folder contain index.html (csn be jade, swig, haml, ...) and other template files if needed for this component.
- In Tests folder contain index.js and other test files for this component.

Components can have all of everything or can have a single stylesheet. It's a singular piece that compose your application. Don't abstract too much or too less, do it as the application grows, split and reorganize components folders, for instance a /components/pages folder for page-type components.

## Compilers

Run `node tools/[tool-name].js`

Some tools installed:

```
└── tools
    ├── documentjs.js
    ├── electron.js
    ├── frontmatter.js
    ├── jade.js
    ├── postcss.js
    ├── posthtml.js
    ├── rollup.js
    └── swig.js
```

The compiler tools use same configuration, so use Jade or Swig, Sass or less, React or Angular, etc, can be a matter of taste.

Right now everything is hard coded and compiling by a single entry (that is /components/app).

- So, HTML compilers will look for /components/app/templates/index.* and /components/app/data/index.*
- CSS compilers will look for /components/app/styles/index.*
- JS compilers will look for /components/app/scripts/index.*

```
Note: tools currently working:
- documentjs
- electron
- postcss
- rollup
- swig
- dalek
```

