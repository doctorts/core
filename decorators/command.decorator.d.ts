export declare function Command(name: string): (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
    value: (...args: any[]) => any;
};
