interface area {
    left: px;
    top: px;
    right: px;
    bottom: px;
}
interface textRawItem {
    text: string;
    left: number;
    top: number;
    right: number;
    bottom: number;
}
interface image {
    data: string
    width: number,
    height: number,
    scale: number
}
type px = `${number}%` | `${number}dp` | number;
type RSConfig = RS_text
interface RS_text {
    recognitionArea: `${px} ${px} ${px} ${px}` | area;
    ocrResultType?: 'text' | 'raw';
    recognitionMode?: 'ocr_local' | 'ocr_local_comp' | 'ocr_online'
    imageFilter?: filter; // 如需调用，前往寻找滤镜知识
}
interface RS_image_captcha {
    recognitionArea: `${px} ${px} ${px} ${px}` | area;
    ocrResultType: 'raw'
    recognitionMode: 'image_captcha'
    imageFilter?: filter; // 如需调用，前往寻找滤镜知识
}
interface RS_getImageData {
    recognitionArea: `${px} ${px} ${px} ${px}` | area;
    ocrResultType: 'raw'
    recognitionMode: 'get_image_data'
    imageFilter?: filter; // 如需调用，前往寻找滤镜知识
}

declare interface zdjl {
    /** 识别屏幕内容异步为 recognitionScreenAsync */
    recognitionScreen(config:
        { // text
            recognitionArea: `${px} ${px} ${px} ${px}` | area;
            ocrResultType?: 'text' | 'raw';
            recognitionMode?: 'ocr_local' | 'ocr_local_comp' | 'ocr_online'
            imageFilter?: filter; // 如需调用，前往寻找滤镜知识
        }
    ): string | Array<textRawItem>;

    recognitionScreen(config:
        { // image_captcha
            recognitionArea: `${px} ${px} ${px} ${px}` | area;
            ocrResultType: 'raw'
            recognitionMode: 'image_captcha'
            imageFilter?: filter; // 如需调用，前往寻找滤镜知识
        }
    ): string;

    recognitionScreen(config:
        { // getImageData
            recognitionArea: `${px} ${px} ${px} ${px}` | area;
            ocrResultType: 'raw'
            recognitionMode: 'get_image_data'
            imageFilter?: filter; // 如需调用，前往寻找滤镜知识
        }
    ): image;

    recognitionScreen(config:
        { // position_by_human  **谨慎使用，需要消耗积分，
            recognitionArea: `${px} ${px} ${px} ${px}` | area;
            ocrResultType: 'raw'
            recognitionMode: 'position_by_human'
            imageFilter?: filter; // 如需调用，前往寻找滤镜知识
            humanRecMaxPositionCount: number // 最大位置数 默认1 越大积分消耗越多
            humanRecHelp: string // 在这里输入要识别的特征。如：从小到大依次点击、点击所有汽车、点击滑块终点左上角
        }
    ): image;

}



zdjl.recognitionScreenAsync({ "recognitionArea": "0.75% 22.45% 93.44% 71.18%", "ocrResultType": "raw", "recognitionMode": "ocr_local", "imageFilter": { "type": "bw" } })