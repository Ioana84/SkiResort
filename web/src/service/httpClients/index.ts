import axios from "axios";
import { BACKEND_URL } from "../../utils/constants";
import DomainClient from "./backend/domain-client";

/** A service used to call endpoints on backend */
export class BackendClient {
  private static backendClient = axios.create({
    baseURL: `${BACKEND_URL}/api/v1`
  });

  public static Domain = new DomainClient(BackendClient.backendClient, '/domains');

}