type condition = jsExpression
type conditionFound = colorFound | imageFound

interface Condition {
    /** 条件反向 */
    runWhenFalse?: boolean

    /** 检查前延迟 */
    checkBeforeDelay?: boolean

    /** 重复检查直到成功 */
    repeatWhenFalse?: boolean

    /** 重复检查直到成功，最大次数 */
    repeatWhenFalseLimitTimes?: number

    /** 重复检查直到成功，重复检查的间隔时间 */
    repeatWhenFalseRepeatDelay?: number
    desc?: string
}

interface colorFound extends Condition {
    type: 'colorFound'
    colorData: findColor
}

interface imageFound extends Condition {
    type: 'image'
    image: findImage
}

interface findNode {
    type: 'node'
    text: string
    textIsRegExp?: boolean
    idResName?: string
    className?: string
    depth?: string
    packageName?: string
    limitArea?: `${px} ${px} ${px} ${px}` | area
    indexNum?: indexNum
    useNodeDataCache?: boolean
    findInAllWindow?: boolean
}

interface nodeFound extends Condition {
    type: 'nodeFound'
    node: findNode
}

interface limitRunTimes extends Condition {
    type: 'limitRunTimes'
    limitTimes: number
    resetTime?: 'afterFinish' | 'afterRepeat'
    syncNowRunTimesToVarName?: string
}
/** 
 * 填写时间值，当前时间在这时间之后则满足条件。填写格式：  
 * 2019=01=01 09:30:58  
 * 日期部分可不写：  
 * 09:30:58，代表当天的这个时间。  
 * 还可以写成：+02:00:00，代表为2小时后 
 */
type asDate = `${number}=${number}=${number} ${number}:${number}:${number}` | `${number}:${number}:${number}` | `+${number}:${number}:${number}`

/**
 * 填写间隔时间，条件在间隔时间内只会满足一次。条件满足后，需要再经过间隔时间，条件才会再次满足。  
 * 变量模式下请输入字符表达式，格式：'500ms'(500毫秒)，'1s'(1秒)，'1h'(1小时)  
 */
type asTime = `${number}ms` | `${number}s` | `${number}h`

/**
 * 目标动作的位置。  
 * 如：填2代表列表里第2个动作，填+2代表当前位置后面第2个动作, 填-1前1个动作。  
 * 填 :A 代表 跳转标识值为 A 的动作。
 */
type aimPosition = `${number}` | `+${number}` | `-${number}` | `:${string}`

interface limitRunTime extends Condition {
    type: 'limitRunTime'
    limitTime: number
    runTime: number
}

interface scriptRunState extends Condition {
    type: 'scriptRunState'
    aimPosition: aimPosition
    aimScriptRunState?: 'suc' | 'fail' | 'notRun'
}

interface random extends Condition {
    type: 'random'
    percent: number
}

interface timeAfter extends Condition {
    type: 'timeAfter'
    time: asDate
}

interface timeInterval extends Condition {
    type: 'timeInterval'
    time: asTime

    /** 首次不运行 */
    ignoreInitPass?: boolean
}

interface jsExpression extends Condition {
    type: 'jsExpression'
    expression: string
}

interface conditionSet extends Condition {
    type: 'conditionSet'
    conditions: Array<condition>
    checkInMultiThreads?: boolean
    
    matchMode?: 'and' | 'or' | 'count'
    matchCount?: number
}   
