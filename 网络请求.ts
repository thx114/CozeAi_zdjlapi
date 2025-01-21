
declare interface RequestUrlConfig {
    /** 链接url */
    url: string;
    /** 请求方法 */
    method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
    /** 请求头 */
    headers?: {
        [key: string]: string;
    }[];
    /** 请求体 */
    requestBody?: string;
    /** 请求格式 */
    requestType?: string;
    /** 返回格式 */
    responseType?: string;
    /** 超时时间 */
    timeout?: number;
}
declare interface zdjl {
    /** 请求链接内容，异步为 requestUrlAsync */
    requestUrl(config: RequestUrlConfig): {
        code: number;
        body: string;
        headers: Record<string, string | string[]>;
    };
}