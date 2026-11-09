import { WebArt, MobileArt, IoTArt, EmbeddedArt, MvpArt } from "./ServiceArt";

/** Service id → illustration component. */
export const SERVICE_ART = {
  web: WebArt,
  mobile: MobileArt,
  iot: IoTArt,
  embedded: EmbeddedArt,
  mvp: MvpArt,
};
