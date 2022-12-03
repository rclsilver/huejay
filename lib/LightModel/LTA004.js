'use strict';

let AbstractLightModel = require('./AbstractLightModel');

const DETAILS = {
  id:           'LTA004',
  manufacturer: 'Philips',
  name:         'Hue ambiance lamp',
  type:         'Color temperature light',
  colorGamut:   'C',
  friendsOfHue: true
};

/**
 * Light model: LTA004
 */
class LTA004 extends AbstractLightModel {
  /**
   * Constructor
   */
  constructor() {
    super(DETAILS);
  }
}

module.exports = LTA004;
