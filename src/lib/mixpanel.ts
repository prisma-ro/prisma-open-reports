import mixpanel from "mixpanel-browser";

export class MixpanelService {
  /** @private */
  static MIXPANEL_TOKEN = "398538d67f091a997ba22e8dc1b4d013";

  /**
   * If the user has accepted cookies, initialize Mixpanel
   */
  static init() {
    if (window.localStorage.getItem("acceptedCookies")) {
      mixpanel.init(this.MIXPANEL_TOKEN, {
        debug: true,
      });

      // @ts-expect-error
      window.PRISMA_STAT_INIT = true;
    } else {
      console.log("User hasn't enabled cookies; do not init.");
    }
  }

  /**
   * Track an event or an error.
   * 
   * @param name Name of the event. @see EventName for event name list.
   * @param additional Any additional params. Defaults to `undefined`
   */
  static event(name: EventName, additional: any = undefined) {
    // @ts-expect-error
    if (window.PRISMA_STAT_INIT) {
      mixpanel.track(name, additional);
    }
  }
}
