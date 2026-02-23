/**
 * Legitimate utility – does nothing harmful.
 * Simulates a safe, intended dependency.
 */
(function () {
    'use strict';
    if (typeof console !== 'undefined' && console.log) {
        console.log('[legit.js] Loaded – harmless utility.');
    }
})();
