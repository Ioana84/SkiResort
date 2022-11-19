import axios, { AxiosResponse } from "axios";
import { Domain } from "domain";

const URL = '/api/v1/domains'

export class beService<T> {
    
    public async get(): AxiosResponse<T>  {
        return (await axios.get<T>(URL)).data
    }

}