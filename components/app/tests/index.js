module.exports = {
  'Page title is correct': function (test) {
    test
      .open('http://localhost/~bernardo/framework/build/')
      .assert.title().is('Frameworks', 'It has title')
      .done();
  }
};
