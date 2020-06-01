"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function autobind(_, _2, descriptor) {
    const originalMethod = descriptor.value;
    const adjustedDescriptor = {
        configurable: true,
        get() {
            const boundFn = originalMethod.bind(this);
            return boundFn;
        }
    };
    return adjustedDescriptor;
}
exports.autobind = autobind;
//# sourceMappingURL=autobind.js.map