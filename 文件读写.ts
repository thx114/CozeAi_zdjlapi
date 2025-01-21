declare interface zdjl {
    /** 写入文件内容到目标路径 异步为 writeFileAsync */
    writeFile(filePath: string, fileContent: string | ArrayBuffer | Uint8Array): void;
    /** 添加文件内容到目标路径的文件末尾 异步为 appendFileAsync */
    appendFile(filePath: string, fileContent: string | ArrayBuffer | Uint8Array): void;
    /** 读取目标路径的文件内容 异步为 readFileAsync */
    readFile(filePath: string, options?: {
        encode?: 'UTF-8' | 'GBK' | 'BASE64';
        returnBuffer?: boolean;
    }): string | ArrayBuffer;
}