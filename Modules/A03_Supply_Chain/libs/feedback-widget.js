/**
 * Safe feedback widget – simulates a legitimate third-party widget.
 * Does not access sensitive data.
 */
(function () {
    'use strict';
    var area = document.getElementById('widget-area');
    if (area) {
        area.innerHTML = '<p class="widget-loaded">Feedback widget ready. (This widget does not access page data.)</p>';
    }
})();
