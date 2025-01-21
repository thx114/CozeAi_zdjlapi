interface rawItem {
    text: string;
    left: number;
    top: number;
    right: number;
    bottom: number;
}
declare interface zdjl {
    // 尽量使用本地识别
    /** 对传入的 base64 图片内容执行 ocr 识别 异步为 ocrAsync */
    ocr(param: {
        mode?: 'local' | 'online';
        base64: string;
        resultType?: 'text'|'raw';
    }): string | Array<rawItem>;

}