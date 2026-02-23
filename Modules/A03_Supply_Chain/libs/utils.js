/**
 * Safe utility – harmless helper. Simulates a legitimate dependency.
 */
(function () {
    'use strict';
    if (typeof console !== 'undefined' && console.log) {
        console.log('[utils.js] Loaded.');
    }
})();
