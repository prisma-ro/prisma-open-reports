// -------------------------------[ Supabase ]----------------------------------
import { createClient } from "https://esm.sh/@supabase/supabase-js";

export const supabaseClient = createClient(
  Deno.env.get("SUPABASE_URL") ?? "",
  Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? ""
);

// ---------------------------------[ CORS ]------------------------------------

type ReqMethod = "GET" | "POST" | "PUT" | "DELETE" | "HEAD" | "PATCH";
type CORSHeaders = Record<string, string>;

export const getCORSHeaders = (methods: ReqMethod[]): CORSHeaders => {
  return {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": `${methods.join(" ")}, OPTIONS`,
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
  };
};

// ----------------------------[ EndpointConfig ]-------------------------------

export class EndpointConfig {
  constructor(
    public readonly corsHeaders: CORSHeaders,
    public readonly endpointVersion: string,
    public readonly cache: boolean = true,
    public readonly cacheDuration: number = 600
  ) {}
}

// -------------------------------[ Response ]----------------------------------

export const jsonResponse = (
  status: "ok" | "fail",
  statusCode: number,
  // deno-lint-ignore no-explicit-any
  content: any,
  config: EndpointConfig
): Response => {
  const cacheHeader = config.cache
    ? `public, max-age=${config.cacheDuration}`
    : "no-cache, no-store, must-revalidate";

  return new Response(JSON.stringify({ status, content }), {
    status: statusCode,
    headers: {
      ...config.corsHeaders,
      "Cache-Control": cacheHeader,
      "Content-Type": "application/json",
      "Prisma-Version": config.endpointVersion,
    },
  });
};
