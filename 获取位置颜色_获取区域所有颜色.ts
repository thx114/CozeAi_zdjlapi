declare interface zdjl {
    /** 获取屏幕指定位置的颜色 异步为 getScreenColorAsync    */
    getScreenColor(x: number | string, y: number | string, ignoreCache?: boolean): number;

    /** 获取屏幕指定区域的所有颜色 异步为 getScreenAreaColorsAsync */
    getScreenAreaColors(param: {
        x: number | string;
        y: number | string;
        width: number | string;
        height: number | string;
        ignoreCache?: boolean;
        sampleSize?: number;
    }): {
        data: number[];
        x: number;
        y: number;
        width: number;
        height: number;
    };
}