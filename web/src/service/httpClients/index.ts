import axios from "axios";
import DomainClient from "./backend/domain-client";

/** A service used to call endpoints on backend */
export class BackendClient {
  private static backendClient = axios.create({
    baseURL: '/api/v1'
  });

  public static Domain = new DomainClient(BackendClient.backendClient, '/domains');

}