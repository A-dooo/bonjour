const inint = {
    num: 1,
    name: ''
}

if (typeof Object.assign != 'function') {
    (function() {
        Object.assign = function(target) {
            'use strict';
            if (target === undefined || target === null) {
                throw new TypeError('Cannot convert undefined or null to object');
            }

            var output = Object(target);
            for (var index = 1; index < arguments.length; index++) {
                var source = arguments[index];
                if (source !== undefined && source !== null) {
                    for (var nextKey in source) {
                        if (source.hasOwnProperty(nextKey)) {
                            output[nextKey] = source[nextKey];
                        }
                    }
                }
            }
            return output;
        };
    })();
}

export function add(state = inint, action) {
    // alert(8888)
    switch (action.type) {
        case 'ADD':
            return Object.assign({}, state, {
                    num: state.num + 1
                })
                // return Object.assign({}, state, { num: state.num + 1 }, data);
        case 'SUBTRACT':
            const data = action.data;
            return Object.assign({}, state, { num: state.num - 1 }, data);
        default:
            return state;
    }
}
