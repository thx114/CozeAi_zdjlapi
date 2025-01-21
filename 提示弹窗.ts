declare interface zdjl {
    toast(message: string, duration?: number): void;

    /** 弹窗 异步为 alertAsync */
    alert(message: string, options?: {
        duration?: number;
        title?: string;
    }): void;

    /** 确认弹窗 异步为 confirmAsync */
    confirm(message: string, options?: {
        duration?: number;
        title?: string;
    }): any;

    /** 提示信息 异步为 promptAsync */
    prompt(message: string, defaultValue?: string, options?: {
        duration?: number;
    }): any;

    /** 选择弹窗 异步为 selectAsync */
    select(config: {
        title?: string;
        items: string[];
        selectItems?: string[];
        multi?: false;
        duration?: number;
    }): (multi extends true ? {
        result: number[];
        items: string[];
    } : {
        result: number;
        items: string;
    })

}