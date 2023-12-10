import { createCanvas } from "canvas";
import * as deepl from "deepl-node";

export const GLOBAL_CANVAS = createCanvas(1200, 400);
export const CHARTJS_NODE_CANVAS = GLOBAL_CANVAS.getContext("2d");
export const TRANSLATOR = new deepl.Translator(process.env.DEEPL!);

export const HELPER_ROLES = ["Neophyte", "↑"] as const;
export const STATUS_ROLES = ["Verified", "VoiceOnly", "Jail", "Unverified"] as const;
export const MEMBER_ROLES = ["⚖️", "🔧", ...HELPER_ROLES] as const;

export const HELPER_RANKING = [
  { name: HELPER_ROLES[0], points: 25 },
  { name: HELPER_ROLES[1], points: 50 },
];

export const EVERYONE = "@everyone";
export const BUMPER = "Bumper";
export const VERIFIED = STATUS_ROLES[0];
export const VOICE_ONLY = STATUS_ROLES[1];
export const JAIL = STATUS_ROLES[2];
export const UNVERIFIED = STATUS_ROLES[3];

export const GENERAL_CHANNEL = "🌌general";
export const VERIFY_CHANNEL = "verify";
export const BOT_CHANNEL = "bot-lounge";
export const VOICE_EVENT_CHANNEL = "👑terra-26";
export const JOIN_EVENTS_CHANNEL = "👑terra-26";
export const MEMBERS_COUNT_CHANNEL = "👑terra-26";

export const MEMBERS_TEMPLATE = "members count";
export const STATS_TEMPLATE = "user stats";
export const TOP_STATS_TEMPLATE = "top stats";
export const VERIFY_TEMPLATE = "verify yourself";

export const RED_COLOR = 0xff0000;
export const BOT_ICON =
  "https://raw.githubusercontent.com/don-cryptus/coding.global-web/master/public/images/logo_512.gif";
