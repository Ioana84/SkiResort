import { AxiosInstance } from "axios";

export class GenericClient<T = any> {
  protected _client: AxiosInstance;
  protected readonly _route: string;

  constructor(client: AxiosInstance, route: string) {
    this._client = client;
    this._route = route;
  };

  public async create(body: Promise<Partial<T>>) {
    const response = await this._client.post<T>(`${this._route}`, body);
    return response.data;
  }

  public async get(id: number): Promise<T> {
    const response = await this._client.get<T>(`${this._route}/${id}`);
    return response.data;
  }

  public async getAll(): Promise<T[]> {
    const response = await this._client.get<T[]>(`${this._route}`);
    return response.data;
  }
}