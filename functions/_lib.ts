/**
 * @copyright Copyright 2021 Prisma
 * 
 * @description Common functions & Interfaces
 * 
 * @license Apache 2.0
 * 
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
 *   http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { Response } from "@netlify/functions/dist/function/response";

export interface ReportSubmission {
  incidentDetails: {
    "type": string,
    "date": string,
    "time": string,
    "details": string | null,
  },
  reportDetails: {
    honeyPot: string | null,
    sentAt: string
  }
}

const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "OPTIONS, GET, POST, DELETE",
  "Access-Control-Allow-Headers":
    "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With",
};
const HEADERS = { "Content-Type": "application/json", ...CORS_HEADERS };

export const errResponse = (error: any, code: number = 500): Response => {
  return {
    statusCode: code,
    headers: HEADERS,
    body: JSON.stringify({
      status: "fail",
      error,
      data: null,
    }),
  };
};

export const okResponse = (data: any, code: number = 200): Response => {
  return {
    statusCode: code,
    headers: HEADERS,
    body: JSON.stringify({
      status: "ok",
      error: null,
      data,
    }),
  };
};

export const preflightResponse = (): Response => {
  return {
    statusCode: 200,
    headers: HEADERS,
    body: "ok",
  };
};