const { setWorldConstructor, World, IWorldOptions } = require ('@cucumber/cucumber');


class CustomWorldImpl extends World {

  constructor(options) {
    super(options);
     // We will add the page later in hooks
    this.page = null; // initialize property
  }
}

module.exports = { CustomWorldImpl };