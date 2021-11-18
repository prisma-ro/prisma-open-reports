/**
 * @copyright Copyright 2021 Prisma
 *
 * @description Handle report submissions and add them to a Firestore DB
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

import { Handler } from "@netlify/functions";
import { Context } from "@netlify/functions/dist/function/context";
import { Event } from "@netlify/functions/dist/function/event";

import {
  errResponse,
  okResponse,
  preflightResponse,
  ReportSubmission,
} from "./_lib";

const isDataInBounds = (data: ReportSubmission): boolean => {
  return (
    data.incidentDetails.type.length < 50 ||
    (data.incidentDetails.details ?? "").length < 2000
  );
};

const handler: Handler = async (event: Event, context: Context) => {
  if (event.httpMethod === "OPTIONS") {
    return preflightResponse();
  } else if (event.httpMethod === "POST") {
    let data: ReportSubmission;

    try {
      data = JSON.parse(event.body ?? "");
    } catch (e) {
      return errResponse(`Failed to parse body: ${e}`);
    }

    if (data.reportDetails.honeyPot !== null) {
      return errResponse("beep boop", 418);
    } else if (!isDataInBounds(data)) {
      return errResponse("Length of fields exced max limit.", 413);
    }

    // Valid data, proccess:
    return okResponse(data);
  }

  return errResponse("invalid_method", 405);
};

export { handler };
