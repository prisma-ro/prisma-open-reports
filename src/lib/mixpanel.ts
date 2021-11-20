import mixpanel from "mixpanel-browser";
import { COOKIE_CONSENT, MIXPANEL_TOKEN } from "./constants";

export class MixpanelService {
  /**
   * If the user has accepted cookies, initialize Mixpanel
   */
  static init() {
    if (window.localStorage.getItem(COOKIE_CONSENT)) {
      mixpanel.init(MIXPANEL_TOKEN, {
        debug: window.location.hostname !== "reports.prisma-safety.com",
        persistence_name: '_prisma_statistics',
        persistence: 'localStorage',
      });

      // @ts-expect-error
      window.PRISMA_STAT_INIT = true;

      console.log("Initialized Mixpanel.");
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

  /**
   * Remove all entries in localStorage
   */
  static clearStorage() {
    // @ts-expect-error
    window.PRISMA_STAT_INIT = false;
    try {
      mixpanel.disable();
    } catch(_) {
      // May fail if it was never initialized
    }
    
    for (let index = 0; index < window.localStorage.length; index++) {
      window.localStorage.removeItem(window.localStorage.key(index) ?? "");
    }
  }
}
