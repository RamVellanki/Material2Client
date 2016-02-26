System.register(['angular2/src/facade/lang'], function(exports_1) {
    var lang_1;
    var OneOf;
    /**
     * Annotation Factory that only allows a set of values to be set for a property.
     * @param values The list of allowed values. The first value listed will be used as a default if
     *     the set value isn't part of the list of accepted values.
     */
    function OneOfFactory(values) {
        return function OneOfMetadata(target, key) {
            var defaultValue = values[0];
            // Use a fallback if Symbol isn't available.
            var localKey = lang_1.isPresent(Symbol) ? Symbol(key) : "@@$" + key + "_";
            target[localKey] = defaultValue;
            Object.defineProperty(target, key, {
                get: function () { return this[localKey]; },
                set: function (v) {
                    if (values.indexOf(v) == -1) {
                        this[localKey] = defaultValue;
                    }
                    else {
                        this[localKey] = v;
                    }
                }
            });
        };
    }
    return {
        setters:[
            function (lang_1_1) {
                lang_1 = lang_1_1;
            }],
        execute: function() {
            exports_1("OneOf", OneOf = OneOfFactory);
        }
    }
});
//# sourceMappingURL=one-of.js.map