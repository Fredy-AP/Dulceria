const customHeader = (req, res, next) => {
    try {
        res.setHeader('X-Frame-Options', 'SAMEORIGIN');
        res.setHeader('X-XSS-Protection', '1; mode=block');
        res.setHeader('X-Content-Type-Options', 'nosniff');
        res.setHeader('Referrer-Policy', 'same-origin');
        res.setHeader('Feature-Policy', 'none');
        res.setHeader('Content-Security-Policy', "default-src 'self'");
        next();
    } catch (error) {
        res.status(403).send("Forbidden");
    }

};

module.exports = customHeader;