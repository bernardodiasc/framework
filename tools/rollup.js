var rollup = require( 'rollup' );

rollup.rollup({
  entry: 'components/app/scripts/index.js'
}).then( function ( bundle ) {
  bundle.write({
    dest: 'build/index.js'
  });
});
