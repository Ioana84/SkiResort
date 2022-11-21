import { Domain } from "domain";
import { HttpResponse } from "../../../types/http";
import { GenericClient } from "../../generic-client";

export default class DomainClient extends GenericClient<Domain> {

  /**
   * Retrieves the Domain by ID
   * @param id 
   * @returns Domain
   */
  public async getByDomanId(id: number): Promise<HttpResponse<Domain>> {
    return await this.get(id);
  }
}