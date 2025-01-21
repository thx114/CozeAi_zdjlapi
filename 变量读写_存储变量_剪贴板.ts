declare interface zdjl {
    getClipboard(): string;
    setClipboard(text: string): void;
    getVar(varName: string, scope?: 'global' | string): any;
    setVar(varName: string, varValue: any, scope?: 'global' | string): void;
    deleteVar(varName: string, scope?: 'global' | string): void;
    deleteVarWithConfirm(varName: string, scope?: 'global' | string): void;
    /** 获得一个作用域下的所有变量值 */
    getVars(scope?: 'global' | string): any;
    /** 弹窗展示所有变量值 */
    printVars(): Promise<void>;
    /**
     * 清空变量
     * @param scopeId 作用域，不填则清除全部
     */
    clearVars(scopeId?: string): void;
    /** 清空变量（带确认提示） */
    clearVarsWithConfirm(scope: string): void;
    /** 获取本地储存值 */
    getStorage(storageKey: string, scope?: string): any;
    /** 设置本地储存值 */
    setStorage(storageKey: string, content: any, scope?: string): void;
    /** 删除本地储存值 */
    removeStorage(storageKey: string, scope?: string): void;
}