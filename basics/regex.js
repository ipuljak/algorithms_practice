// Letters -> [A-Za-z0-9_]
/\w/;

// Digits
/\d/;

// Wildcard vs 'dot'
/./; /\./;

// Match c, m, or f
/[cmf]/;

// Multiples -> helllllllo
/he[l]{2,}o/;

// Optional character -> abc or ac
/ab?c/;

// Whitespace
/\d\.\s+abc/;

// Start of line -> ^success
// Excluding characters -> [^success]
// End of line -> $