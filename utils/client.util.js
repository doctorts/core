"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
const baileys_1 = require("@adiwajshing/baileys");
class Client {
    constructor(options) {
        this.options = options;
    }
    start(classes) {
        this.sock = (0, baileys_1.default)(this.options);
        this.connectionUpdate();
        this.message(classes);
    }
    connectionUpdate() {
        this.sock.ev.on("connection.update", async (update) => {
            var _a, _b;
            const { connection, lastDisconnect } = update;
            if (connection === "close") {
                if (((_b = (_a = lastDisconnect.error) === null || _a === void 0 ? void 0 : _a.output) === null || _b === void 0 ? void 0 : _b.statusCode) !==
                    baileys_1.DisconnectReason.loggedOut) {
                    this.start();
                }
            }
        });
    }
    message(classes) {
        try {
            classes.map((element) => {
                const { type, Call } = element;
                const teste = new Call(this.sock);
                this.sock.ev.on(type, teste.callback);
            });
        }
        catch (err) {
            this.connectionUpdate();
            console.log("\x1b[32mYour session has been created, close the program and start again!\x1b[0m");
        }
    }
}
exports.Client = Client;
