'use strict';

var MobileDetect = require('mobile-detect');

var InspectumMobile = {
    isMobile: function (ua) {
        var md = new MobileDetect(ua || window.navigator.userAgent);

        var isMobile = md.mobile();
        var isPhone = md.phone();
        var isTablet = md.tablet();

        return Boolean(isMobile || isPhone || isTablet);
    }
};

module.exports = InspectumMobile;
