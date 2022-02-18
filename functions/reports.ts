/**
 * @copyright Copyright 2021 Prisma
 *
 * @description Handle report submissions and add them to a Firestore database
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

import * as admin from "firebase-admin";
import path from "path";

import {
  createCert,
  errResponse,
  hasRequiredData,
  isDataInBounds,
  okResponse,
  preflightResponse,
  ReportSubmission,
} from "./_lib";

const handler: Handler = async (event: Event, context: Context) => {
  if (event.httpMethod === "OPTIONS") {
    return preflightResponse();
  } else if (event.httpMethod === "GET") {
    let data: ReportSubmission;
    let creds: admin.credential.Credential;

    /**
     * Get firebase authentication data, either by using the FIREBASE_ADMIN_CREDS
     * env var (in production), or by using the DEV_FIREBASE_ADMIN_CREDS env var,
     * read from the '.env' file in the 'functions/' directory.
     */
    if (process.env.FIREBASE_ADMIN_CREDS) {
      creds = createCert(process.env.FIREBASE_ADMIN_CREDS);
    } else {
      require("dotenv").config({
        path: path.resolve(path.join(process.cwd(), "functions/.env")),
      });
      creds = createCert(process.env.DEV_FIREBASE_ADMIN_CREDS ?? "");
    }

    // Init firebase
    if (admin.apps.length == 0) {
      admin.initializeApp({ credential: creds });
    }

    // Valid data, continue
    const db = admin.firestore();
    const ref = await db.collection("open_reports").get();
    const reports = [];

    ref.docs.forEach((rep) => {
      const data = rep.data();
      data.incidentDetails = "REDACTED FOR CONFIDENTIALITY (see note)";
      reports.push({ id: rep.id, ...data });
    });

    return okResponse({
      note: "Some data is not publicly available; see https://reports.prisma-safety.com/docs/Acord-Prelucrarea-Datelor-Furnizate-pe-Platforma-Open-Reports.pdf",
      reports,
    });
  } else if (event.httpMethod === "POST") {
    let data: ReportSubmission;
    let creds: admin.credential.Credential;

    /**
     * Get firebase authentication data, either by using the FIREBASE_ADMIN_CREDS
     * env var (in production), or by using the DEV_FIREBASE_ADMIN_CREDS env var,
     * read from the '.env' file in the 'functions/' directory.
     */
    if (process.env.FIREBASE_ADMIN_CREDS) {
      creds = createCert(process.env.FIREBASE_ADMIN_CREDS);
    } else {
      require("dotenv").config({
        path: path.resolve(path.join(process.cwd(), "functions/.env")),
      });
      creds = createCert(process.env.DEV_FIREBASE_ADMIN_CREDS ?? "");
    }

    // Init firebase
    if (admin.apps.length == 0) {
      admin.initializeApp({ credential: creds });
    }

    try {
      data = JSON.parse(event.body ?? "");
    } catch (e) {
      return errResponse(`Failed to parse body: ${e}`);
    }

    if (data.reportDetails?.honeyPot !== null) {
      return errResponse("beep boop", 418);
    } else if (!hasRequiredData(data)) {
      return errResponse("Malformed request, missing data", 400);
    } else if (!isDataInBounds(data)) {
      return errResponse("Length of fields exced max limit.", 413);
    }

    // Valid data, continue
    const db = admin.firestore();
    const ref = await db.collection("open_reports").add(data);

    return okResponse(ref.id);
  }

  return errResponse("invalid_method", 405);
};

export { handler };
