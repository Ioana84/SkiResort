import { Domain } from "domain";
import { GenericClient } from "../../generic-client";

export default class DomainClient extends GenericClient<Domain> {

  /**
   * Retrieves the Domain by ID
   * @param id 
   * @returns Domain
   */
  public async getByDomanId(id: number): Promise<Domain> {
    return await this.get(id);
  }
}