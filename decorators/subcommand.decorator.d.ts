export declare function Subcommand(command: string, subcommand: string): (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
    value: (...args: any[]) => any;
};
