import { AxiosInstance } from "axios";
import { HttpResponse } from "../types/http";

export class GenericClient<T = any> {
  protected _client: AxiosInstance;
  protected readonly _route: string;

  constructor(client: AxiosInstance, route: string) {
    this._client = client;
    this._route = route;
  };

  public async create(body: Partial<HttpResponse<T>>) {
    const response = await this._client.post<HttpResponse<T>>(`${this._route}`, body);
    return response.data.data;
  }

  public async get(id: number): Promise<HttpResponse<T>> {
    const response = await this._client.get<HttpResponse<T>>(`${this._route}/${id}`);
    return response.data;
  }

  public async getAll(): Promise<HttpResponse<T[]>> {
    const response = await this._client.get<HttpResponse<T[]>>(`${this._route}`);
    return response.data;
  }
}