declare interface zdjl {
    getAppVersion(): string;
    getUser(): {
        userId: string;
        userName: string;
        isVip: boolean;
    };
    /** 获取当前设备信息 */
    getDeviceInfo(): {
        appVersion: string;
        appVersionCode: number;
        deviceId: string;
        userAgent: string;

        /** 当前屏幕旋转方向(0: 0度, 1: 90度, 2: 180度, 3: 270度) */
        screenRotation: number;
        screenWidth: number;
        screenHeight: number;
        width: number;
        height: number;
        density: number;
        densityDpi: number;
        clientType: 'android' | 'pc',
    };
    /** 获取当前手机定位经纬度 异步为 getLocationAsync */
    getLocation(param: { timeout?: number }): object;

    /** 设置屏幕亮度（-1 ～ 255） */
    setScreenBrightness(value: number): string;

    /** 设置 WIFI 开关 异步为 setWifiEnableAsync    */
    setWifiEnable(enable: boolean): void;

    /** 设置 蓝牙 开关 异步为 setBluetoothEnableAsync */
    setBluetoothEnable(enable: boolean): void

    /** 设置 闪光灯 开关 异步为 setCameraFlashEnableAsync */
    setCameraFlashEnable(enable: boolean): void;

    /** 获取安装的所有应用信息 */
    getInstalledAppInfo(): Array<{ isSystemApp: boolean, packageName: string, versionCode: number, versionName: string, label: string }>;
    /** 获取当前鼠标位置 */
    getMousePosition(): { x: number, y: number, xInScreen: number, yInScreen: number };

    /** 播放指定路径的音频  异步为 playMediaAsync */
    playMedia(url: string): any;

    /**
     * 震动 异步为 vibratorAsync
     * @param duration 震动时长
     * @param amplitude 震动强度（1-255）部分机器不支持
     */
    vibrator(duration?: number, amplitude?: number): any;
    
    wakeupScreen(): void;
}