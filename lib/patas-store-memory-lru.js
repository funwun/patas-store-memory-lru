var lru = require('lru-cache');

module.exports = function(options) {
    var prefix = options.prefix || '';
    var cache = lru({
        max: options.maxSize,
        length: function(n, key) {
            return key.length + n.length;
        }
    });
    return {
        name: 'memory-lru',
        get: function(key, callback) {
            callback(null, cache.get(prefix + key));
        },
        set: function(key, ttl, value, callback) {
            callback = callback || function() {};
            cache.set(prefix + key, value, ttl);
            callback(null);
        }
    };
};
