
export interface PrintOptions {
    name?: string;
    printerId?: string;
    duplex?: boolean;
    landscape?: boolean;
    grayscale?: boolean;
    bounds?: number[] | any;
}

export declare class Printer {
    isAvailable(): Promise<boolean>;
    check(): Promise<any>;
    pick(): Promise<any>;
    print(content: string | HTMLElement, options?: PrintOptions): Promise<any>;
}
