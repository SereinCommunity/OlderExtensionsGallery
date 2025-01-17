/**
 * Java服务器Motd对象
 */
declare class Motdje {
    /**
     * Java服务器Motd对象
     * @param addr 服务器地址
     */
    constructor(addr: string)

    /**
     * Java服务器Motd对象
     * @param port 本地端口
     */
    constructor(port: number)

    /**
     * 在线玩家数
     */
    readonly version: string;

    /**
     * 最大玩家数
     */
    readonly maxPlayer: number;

    /**
     * 在线玩家数
     */
    readonly onlinePlayer: number;

    /**
     * 服务器描述
     */
    readonly description: string;

    /**
     * 协议
     */
    readonly protocol: string;

    /**
     * 图标（CQ码）
     */
    readonly favicon: string;

    /**
     * 延迟（ms）
     */
    readonly latency: number;

    /**
     * 原文
     */
    readonly origin: string;

    /**
     * 错误消息
     */
    readonly exception: string;

    /**
     * 是否获取成功
     */
    readonly isSuccessful: boolean;

    /**
     * IP
     */
    readonly ip: string;

    /**
     * 端口
     */
    readonly port: number;
}

/**
 * 基岩版服务器Motd对象
 */
declare class Motdpe {

    /**
     * 基岩版服务器Motd对象
     * @param addr 服务器地址
     */
    constructor(addr: string)

    /**
     * 基岩版服务器Motd对象
     * @param port 本地端口
     */
    constructor(port: number)

    /**
     * 在线玩家数
     */
    readonly version: string;

    /**
     * 最大玩家数
     */
    readonly maxPlayer: number;

    /**
     * 在线玩家数
     */
    readonly onlinePlayer: number;

    /**
     * 服务器描述
     */
    readonly description: string;

    /**
     * 协议
     */
    readonly protocol: string;

    /**
     * 存档名称
     */
    readonly levelName: string;

    /**
     * 游戏模式
     */
    readonly gameMode: string;

    /**
     * 延迟（ms）
     */
    readonly latency: number;

    /**
     * 原文
     */
    readonly origin: string;

    /**
     * 错误消息
     */
    readonly exception: string;

    /**
     * 是否获取成功
     */
    readonly isSuccessful: boolean;

    /**
     * IP
     */
    readonly ip: string;

    /**
     * 端口
     */
    readonly port: number;
}

/**
 * Logger
 */
declare class Logger {
    /**
     * Logger
     * @param title 标题
     */
    constructor(title: string)

    /**
     * 信息输出
     * @param content 输出内容
     */
    info(...content: any): void

    /**
     * 警告输出
     * @param content 输出内容
     */
    warn(...content: any): void

    /**
     * 错误输出
     * @param content 输出内容
     */
    error(...content: any): void

    /**
     * 调试输出
     * @param content 输出内容
     */
    debug(...content: any): void
}

/**
 * WebSocket客户端
 */
declare class WSClient {
    /**
     * WebSocket客户端
     * @param uri ws地址
     * @param namespace 当前命名空间
     */
    constructor(uri: string, namespace: string)

    /**
     * 开启事件
     */
    onopen: () => void

    /**
     * 关闭事件
     */
    onclose: () => void

    /**
     * 错误事件
     */
    onerror: (err: string) => void

    /**
     * 消息接收事件
     */
    onmessage: (msg: string) => void

    /**
     * 连接
     */
    open(): void

    /**
     * 发送
     * @param msg 消息内容
     */
    send(msg: string): void

    /**
     * 关闭
     */
    close(): void

    /**
     * 释放对象（调用后释放对象的资源，且不可撤销）
     */
    dispose(): void

    /**
     * 连接状态
     * @enum `-1` - 未知或无效;
     * @enum `0` - 正在连接;
     * @enum `1` - 连接成功;
     * @enum `2` - 正在关闭;
     * @enum `3` - 已关闭;
     */
    readonly state: -1 | 0 | 1 | 2 | 3;
}

/**
 * MessageBus
 * 
 * 用于插件之间快捷的通信
 */
declare class MessageBus {
    /**
     * MessageBus
     * @param namespace 命名空间
     */
    constructor(namespace: string)

    /**
     * 错误事件
     * @param err 错误信息
     */
    onerror: (err: string) => void

    /**
     * 发送消息
     * @param channal 频道
     * @param msg 消息
     */
    postMessage(channal: string, msg: object): void

    /**
     * 设置监听器
     * @param channal 频道
     * @param callback 回调函数
     */
    setListener(channal: string, callback: (msg: object) => void): boolean
}

