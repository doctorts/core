"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommandReplace = void 0;
function CommandReplace(command) {
    return (target, propertyKey, descriptor) => {
        return {
            value: function (...args) {
                const value = descriptor.value.apply(target, args);
                const type = "messages.upsert";
                class Call {
                    constructor(sock) {
                        this.callback = (m) => {
                            var _a, _b, _c;
                            const msg = m.messages[0];
                            const messageContent = ((_a = msg.message) === null || _a === void 0 ? void 0 : _a.conversation) ||
                                ((_c = (_b = msg.message) === null || _b === void 0 ? void 0 : _b.extendedTextMessage) === null || _c === void 0 ? void 0 : _c.text);
                            const teste = messageContent.replace(command, "");
                            console.log(teste);
                            return teste;
                        };
                        this.sock = sock;
                    }
                }
                return { type, Call };
            },
        };
    };
}
exports.CommandReplace = CommandReplace;
