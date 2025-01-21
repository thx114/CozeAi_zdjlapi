interface area {
    left: px;
    top: px;
    right: px;
    bottom: px;
}
interface color {
    type: 'color'
    color: `#${string}`
}
type px = `${number}%` | `${number}dp` | number;
type indexNum = number | `${number}` | `${number},${number}` | `${number},${number},${number}`
interface LocationResult {
    x: number;
    y: number;

    /** 百分比 */
    x_100: number;
    y_100: number;

    x_dp: number;
    y_dp: number;
}
interface image { // 用户通常能直接在软件中把图片设置成此变量，直接调用
    data: string
    imageWidth: number
    imageHeight: number
    imageLeft: number
    imageTop: number
    screenWidth: number
    screenHeight: number
}

type PositionFind = findImage | findText | findColor
interface findImage {
    type: 'image'
    imageData: image
    limitArea?: `${px} ${px} ${px} ${px}` | area
    minSimilarPercent?: number
    indexNum?: indexNum
    quickSearch?: boolean
    searchMode?: 'color_2.21' | 'outline_2.21' | 'COLOR' | 'HOG'
    imageFilter?: filter

    /** 图像缩放类型 */
    imageScaleType?: 'dpi' |'baseScreenWidth' | 'baseScreenHeight' | 'baseScreenWidthAndHeight' | 'tryAll'

    xOffset?: number
    yOffset?: number
}

interface findColor {
    type: 'color'
    color: color
        
    /** 指定位置 */
    limitPosX?: px
    limitPosY?: px

    /** 限制区域 */
    limitArea?: `${px} ${px} ${px} ${px}` | area

    similarPercent?: number

    /** 选定颜色时的坐标记录 */
    x?: px
    y?: px

    xOffset?: number
    yOffset?: number
}

interface findText {
    type: 'text'
    text: string
    ocrMode?: 'local' | 'local_v2' | 'online'
    limitArea?: `${px} ${px} ${px} ${px}` | area
    filter?: filter
    indexNum?: indexNum
    xOffset?: number
    yOffset?: number
}

interface zdjl {
    /** 查找坐标 异步为 findLocationAsync */
    findLocation(posData: PositionFind, findAll: boolean): (typeof findAll extends true ? LocationResult[] : LocationResult);
}

