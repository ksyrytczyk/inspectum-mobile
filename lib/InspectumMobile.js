'use strict';

var MobileDetect = require('mobile-detect');

var InspectumMobile = {

    isMobile: function (ua) {
        var md = InspectumMobile.detect(ua);

        var isMobile = md.mobile();
        var isPhone = md.phone();
        var isTablet = md.tablet();

        return Boolean(isMobile || isPhone || isTablet);
    },

    detect: function(ua) {
        return new MobileDetect(ua || window.navigator.userAgent);
    }
};

module.exports = InspectumMobile;
