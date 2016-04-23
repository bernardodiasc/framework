var postcss = require('postcss'),
    rucksack = require('rucksack-css');

postcss([ rucksack() ])
  .process(css, { from: 'components/app/styles/index.css', to: 'build/index.css' })
  .then(function (result) {
      fs.writeFileSync('build/index.css', result.css);
      if ( result.map ) fs.writeFileSync('style.css.map', result.map);
  });
