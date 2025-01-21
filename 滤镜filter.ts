type filter = blackWhite | grey | outline | reverse | lightness | contrast | rgb | changeColor | multi

interface blackWhite {
    type: 'bw'

    /** 黑白阈值 0~255 */
    threshold?: number
    greyAlgorithm?: 'average' | 'max'

}

interface grey {
    type: 'grey'

    /** 黑白阈值 0~255 */
    threshold?: number
    greyAlgorithm?: 'average' | 'max'
}

interface outline {
    type: 'outline'

    /** 和相邻像素相似度小于这个阈值的则是轮廓点，值越高，轮廓越明显 */
    threshold: number

}

interface reverse {
    type: 'reverse'
}

interface lightness {
    type: 'lightness'

    /** 亮度的变化值，最低(-100)时为全黑，最高(100)时为全白 */
    change: number
}

interface contrast {
    type: 'contrast'

    /** 对比度的变化值，最低(-100)时为全灰 */
    change: number
}

interface rgb { 
    type: 'rgb'

    /** 红色的变化值，最低(-100)时为移除所有红色通道，最高(100)时为设置满红色通道 */
    changeRed: number

    /** 绿色的变化值，最低(-100)时为移除所有绿色通道，最高(100)时为设置满绿色通道 */
    changeGreen: number

    /** 蓝色的变化值，最低(-100)时为移除所有蓝色通道，最高(100)时为设置满蓝色通道 */
    changeBlue: number
}

interface changeColor {
    type: 'changeColor'

    /** 改变颜色 */
    changeColorRules: Array<{

        /** 相似度百分比，0~100 */
        similarPercent: number

        /** 源颜色 */
        srcColor: number

        /** 目标颜色 */
        destColor: number
    }>

    /** 其他颜色改变为 */
    otherColorChangeTo: number
}

interface multi {
    filters: Array<filter>
}
