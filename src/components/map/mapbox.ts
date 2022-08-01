import mapbox from "mapbox-gl";
import { MAPBOX_TOKEN } from "../../lib/constants";

mapbox.accessToken = MAPBOX_TOKEN;

const MAPBOX_KEY = {};

/**
 * Used with `getContext()` to get a typed reference to the Mapbox map instance.
 * 
 * @example
 * ```js
 * const { getMap } = getContext<IMapboxContext>(MapboxMap);
 * ```
 */
export interface IMapboxContext {
  getMap(): mapbox.Map;
};

export { mapbox, MAPBOX_KEY };
