// -------------------------------[ Supabase ]----------------------------------
import { createClient } from 'https://esm.sh/@supabase/supabase-js';

export const supabaseClient = createClient(
  Deno.env.get('SUPABASE_URL') ?? '',
  Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
)

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
  corsHeaders: CORSHeaders;
  endpointVersion: string;

  constructor(corsHeaders: CORSHeaders, endpointVersion: string) {
    this.corsHeaders = corsHeaders;
    this.endpointVersion = endpointVersion;
  }
}

// -------------------------------[ Response ]----------------------------------

export const jsonResponse = (
  status: "ok" | "fail",
  statusCode: number,
  // deno-lint-ignore no-explicit-any
  content: any,
  config: EndpointConfig
): Response => {
  return new Response(JSON.stringify({ status, content }), {
    status: statusCode,
    headers: {
      ...config.corsHeaders,
      "Content-Type": "application/json",
      "Version": config.endpointVersion,
    },
  });
};
