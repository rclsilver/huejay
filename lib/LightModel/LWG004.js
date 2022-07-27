'use strict';

let AbstractLightModel = require('./AbstractLightModel');

const DETAILS = {
  id:           'LWG004',
  manufacturer: 'Philips',
  name:         'Hue GU10 spot',
  type:         'Dimmable light',
  colorGamut:   'C',
  friendsOfHue: true
};

/**
 * Light model: LWV001
 */
class LWG004 extends AbstractLightModel {
  /**
   * Constructor
   */
  constructor() {
    super(DETAILS);
  }
}

module.exports = LWG004;
