declare interface FindNodeResult {
    /** 节点文字 */
    text: string;
    
    className: string;
    idResName: string;
    packageName: string;
    boundLeft: number;
    boundTop: number;
    boundRight: number;
    boundBottom: number;
    children?: FindNodeResult[];
}
declare interface zdjl {
    /** 查找节点 异步为 findNodeAsync */
    findNode<FindAll extends boolean>(posData: any, config: {
        findAll?: FindAll;
        withChildren?: boolean;
    }): (FindAll extends true ? FindNodeResult[] : FindNodeResult);
}