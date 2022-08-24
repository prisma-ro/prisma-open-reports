import { serve } from "https://deno.land/std@0.131.0/http/server.ts";

import {
  EndpointConfig,
  getCORSHeaders,
  jsonResponse,
  supabaseClient,
} from "../common.ts";

console.log("Started function // reports-fcs - Reports for Countries");
const config = new EndpointConfig(getCORSHeaders(["POST"]), "prod_aug22_01");

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: config.corsHeaders });
  }

  if (req.method !== "POST") {
    return jsonResponse("fail", 405, "Method Not Allowed", config);
  }

  let isAuthenticated = false;
  const bearer = req.headers.get("authorization")?.replace("Bearer ", "");

  if (bearer !== Deno.env.get("SUPABASE_ANON_KEY")) {
    // deno-lint-ignore no-unused-vars
    const { user, data, error } = await supabaseClient.auth.api.getUser(
      bearer ?? ""
    );
    if (!error) {
      isAuthenticated = true;
    }
  }

  const countries: string[] = (await req.json()).countries;
  // deno-lint-ignore no-explicit-any
  const result: Record<string, any> = {};

  const query = isAuthenticated
    ? "id, lat, long, method, description, incident_type, incident_date, incident_time"
    : "id, lat, long, incident_type, incident_date, incident_time";

  for (let idx = 0; idx < countries.length; idx++) {
    const country = countries[idx];

    const { data, error } = await supabaseClient.from(country).select(query);

    if (error) {
      result[country] = {
        status: "fail",
        content: error,
      };
    } else {
      result[country] = {
        status: "ok",
        content: data,
      };
    }
  }

  return jsonResponse("ok", 200, result, config);
});
