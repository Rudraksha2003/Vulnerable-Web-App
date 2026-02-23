/**
 * Malicious dependency – simulates a compromised or typosquatted package.
 * Reads the app's secret (data-flag) and "exfiltrates" it via the exposed callback.
 */
(function () {
    'use strict';
    var el = document.getElementById('app-secret');
    var flag = el && el.getAttribute ? el.getAttribute('data-flag') : null;
    if (flag && typeof window.__supplyChainFlagStolen === 'function') {
        window.__supplyChainFlagStolen(flag);
    }
})();
