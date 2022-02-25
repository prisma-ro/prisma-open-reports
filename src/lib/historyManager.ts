import { changePage } from "../stores";

/**
 * Store the page state
 */
class __State {
  url: string;
  fullUrl: string;
  indexOfQuery: number;
  returnTo: string;

  constructor() {
    this.url = window.location.hash;
    this.fullUrl = window.location.href;

    this.indexOfQuery = this.url.indexOf("?");

    const urlSearchParams = new URLSearchParams(
      this.url.substring(this.indexOfQuery)
    );

    this.returnTo = window.atob(
      Object.fromEntries(urlSearchParams.entries())?.returnTo ?? ""
    );
  }
}

/**
 * Handle History API Calls
 */
export class HistoryManager {
  private state: __State;

  constructor() {
    this.state = new __State();
  }

  /**
   * Check for a valid state (we have a return url)
   */
  get hasValidState(): boolean {
    return !!(this.state.indexOfQuery !== -1 && this.state.returnTo);
  }

  /**
   * Clear the visible link of the return url
   */
  clearLink() {
    window.history.replaceState(
      null,
      "",
      this.state.fullUrl.substring(0, this.state.fullUrl.indexOf("?"))
    );
  }

  /**
   * Call in `window.onpopstate`
   */
  onPopStateCallback() {
    if (this.state.returnTo.includes("protejarea-datelor")) {
      changePage("dataProtection");
    } else if (this.state.returnTo.includes("despre")) {
      changePage("about");
    } else {
      changePage("map");
    }
  }

  /**
   * Used to process the initial url, i.e.: If we have `#despre` in the url,
   * navigate to the About page.
   */
  static processInitialUrl() {
    const url = window.location.href;
    if (url.includes("protejarea-datelor")) {
      changePage("dataProtection");
    } else if (url.includes("despre")) {
      changePage("about");
    }
  }

  /**
   * Navigate to a new page (in history)
   *
   * @param page The page to navigate to
   */
  static goTo(page: PrismaPage) {
    switch (page) {
      case "about":
        history.pushState(
          null,
          "",
          `#despre?returnTo=${window.btoa(window.location.href)}`
        );
        return;
      case "dataProtection":
        history.pushState(
          null,
          "",
          `#protejarea-datelor?returnTo=${window.btoa(window.location.href)}`
        );
        return;
      default:
        history.pushState(null, "", "#map");
        break;
    }
  }
}
