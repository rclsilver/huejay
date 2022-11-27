'use strict';

let AbstractLightModel = require('./AbstractLightModel');

const DETAILS = {
  id:           '1743030P7',
  manufacturer: 'Philips',
  name:         'Hue Impress outdoor wall',
  type:         'Extended color light',
  colorGamut:   'C',
  friendsOfHue: true
};

/**
 * Light model: LWV001
 */
class L1743030P7 extends AbstractLightModel {
  /**
   * Constructor
   */
  constructor() {
    super(DETAILS);
  }
}

module.exports = L1743030P7;
