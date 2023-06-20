function getCurrentLineNumber () {
    const stack = new Error().stack.split('\n')[2];
    const match = stack.match(/:(\d+):/);
    return match[1];
}

module.exports = getCurrentLineNumber;