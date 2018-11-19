import engine from "./common/Engine";
import { AccountManager } from "./module/account/AccountManager";
import { NetProtocol } from "./module/net/NetProtocol";
import { PromptManager } from "./module/prompt/PromptManager";
import { QueryConfig } from "./QueryConfig";
import { ThemeManager } from "./module/theme/ThemeManager";
import { SettingManager } from "./common/manager/SettingManager";
import { AudioManager } from "./common/manager/AudioManager";

const { ccclass, property } = cc._decorator;

@ccclass
export default class main extends engine {
    /** ＴＣＰ协议处理 */
    public static protocol: NetProtocol;
    /** 帐号管理 */
    public static account: AccountManager;
    /** 通用弹窗 */
    public static prompt: PromptManager;
    /** 通用弹窗 */
    public static theme: ThemeManager;
    /** 设置管理 */
    public static setting: SettingManager;
    /** 音频管理 */
    public static audio: AudioManager;

    run() {
        var theme: string = "game";

        main.account = new AccountManager();
        main.protocol = new NetProtocol();
        main.prompt = new PromptManager();
        main.setting = new SettingManager();
        main.audio = new AudioManager(main.setting);

        QueryConfig.init();

        var operate: any = {};
        operate.params = theme;
        engine.scene.replaceScene(`${theme}/loading/loading`, operate);
    }
}
