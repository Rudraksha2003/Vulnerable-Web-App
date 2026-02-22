/**
 * Insecure Authentication – backend check.
 * Returns { success: true } only for valid credentials.
 * Frontend should display this response; the vulnerability is that the client can manipulate it before proceeding.
 */

const validUsername = 'admin';
const validPassword = 'admin123';

exports.handler = async function (event) {
    if (event.httpMethod !== 'POST') {
        return { statusCode: 405, body: JSON.stringify({ success: false }) };
    }

    let body;
    try {
        body = JSON.parse(event.body || '{}');
    } catch {
        return { statusCode: 400, body: JSON.stringify({ success: false }) };
    }

    const username = (body.username || '').trim();
    const password = body.password || '';

    const success = username === validUsername && password === validPassword;

    return {
        statusCode: 200,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ success }),
    };
};
