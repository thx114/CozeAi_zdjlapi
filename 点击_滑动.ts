declare interface zdjl {
    /** 点击指定坐标 异步为 clickAsync */
    click(x: number | string, y: number | string, duration?: number): void;
    /** 长按指定坐标 异步为 longClickAsync */
    longClick(x: number | string, y: number | string): void;
    /** 点击指定坐标（同 click） 异步为 pressAsync */
    press(x: number | string, y: number | string, duration?: number): void;
    /** 滑动 异步为 swipeAsync */
    swipe(x1: number | string, y1: number | string, x2: number | string, y2: number | string, duration?: number): void;
    /** 执行一段手势 异步为 gestureAsync */
    gesture(duration: number, ...xyArray: Array<[number | string, number | string]>): void;
    /** 执行多指手势 异步为 gesturesAsync */
    gestures(...gestureConfigs: Array<[number, ...Array<[number | string, number | string]>] | [number, number, ...Array<[number | string, number | string]>]>): void;
}