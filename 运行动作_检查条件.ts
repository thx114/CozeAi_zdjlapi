declare interface zdjl {
    /** 运行一个动作 异步为 runActionAsync */
    runAction(actionJSON: object): void;

    /** 检查运行条件，返回条件是否成立 异步为 checkAsync */
    check(conditionJSON: object): boolean;
}