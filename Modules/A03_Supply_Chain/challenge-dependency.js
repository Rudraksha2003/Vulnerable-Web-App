/**
 * A03 Software Supply Chain – Practical lab: configurable widget URL
 * Vulnerability: App loads a third-party script from a user/config-controlled URL
 * with no allowlist or integrity check. Attacker can point to a malicious script.
 */

(function () {
    const widgetInput = document.getElementById('widget-url');
    const loadBtn = document.getElementById('load-widget-btn');
    const loadStatus = document.getElementById('load-status');
    const widgetArea = document.getElementById('widget-area');
    const flagOutput = document.getElementById('flag-output');
    const outputBox = document.getElementById('output');

    // Only allow same-origin relative paths (no http/https) to keep focus on supply chain
    function isAllowedPath(path) {
        if (!path || typeof path !== 'string') return false;
        const t = path.trim();
        if (t === '') return false;
        if (/^(https?:|\/\/)/i.test(t)) return false; // no external URLs in this lab
        if (t.indexOf('..') !== -1) return false;       // no path traversal for simplicity
        return true;
    }

    function setStatus(msg, isError) {
        loadStatus.textContent = msg;
        loadStatus.className = 'load-status' + (isError ? ' error' : '');
    }

    function getWidgetMessage(src) {
        if (/feedback-widget\.js$/i.test(src)) return 'Feedback widget ready. No sensitive data accessed.';
        if (/legit\.js$/i.test(src)) return 'Legit utility loaded. No page data accessed.';
        if (/utils\.js$/i.test(src)) return 'Utils helper loaded. No page data accessed.';
        if (/analytics\.js$/i.test(src)) return 'Analytics script ran. If it was malicious, check the exfiltrated data below.';
        if (/evil\.js$/i.test(src)) return 'Script ran. If it was malicious, check the exfiltrated data below.';
        return 'Widget script executed.';
    }

    function loadWidget() {
        const path = widgetInput.value.trim();
        if (!isAllowedPath(path)) {
            setStatus('Enter a relative script path (e.g. libs/feedback-widget.js). External URLs not allowed.', true);
            return;
        }

        // Reset exfiltrated data so it only shows when the newly loaded script steals it
        if (flagOutput) flagOutput.style.display = 'none';
        if (outputBox) outputBox.textContent = '';

        // Normalize: ensure we load from same folder if path doesn't start with ./
        const src = path.startsWith('/') ? path : path.replace(/^\.\//, '');
        setStatus('Loading ' + src + '…', false);

        const script = document.createElement('script');
        script.src = src;
        script.onload = function () {
            setStatus('Widget loaded: ' + src, false);
            widgetArea.innerHTML = '<p class="widget-loaded">' + getWidgetMessage(src) + '</p>';
        };
        script.onerror = function () {
            setStatus('Failed to load ' + src + '. Check the path (e.g. libs/analytics.js).', true);
        };
        document.body.appendChild(script);
    }

    loadBtn.addEventListener('click', loadWidget);
    widgetInput.addEventListener('keydown', function (e) {
        if (e.key === 'Enter') loadWidget();
    });

    document.querySelectorAll('.path-btn').forEach(function (btn) {
        btn.addEventListener('click', function () {
            const path = this.getAttribute('data-path');
            if (path) widgetInput.value = path;
        });
    });

    // Expose callback for malicious widget script to send exfiltrated data
    window.__supplyChainFlagStolen = function (stolenValue) {
        if (flagOutput && outputBox) {
            outputBox.textContent = stolenValue;
            flagOutput.style.display = 'block';
        }
    };

    setStatus('Enter a widget script path and click Load widget.', false);
})();
