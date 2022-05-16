import { WASocket } from "@adiwajshing/baileys";
import { ClientProps } from "../interfaces/client.interface";
export declare class Client implements ClientProps {
    sock: WASocket;
    options: object;
    constructor(options?: object);
    start(classes?: any[]): void;
    connectionUpdate(): void;
    message(classes: any[]): void;
}
