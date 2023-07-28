import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';

@Injectable()
export class AxiosService {
  private baseUrl = process.env.API_URL;

  private getApiInstance(): AxiosInstance {
    return axios.create({ baseURL: this.baseUrl, timeout: 1000 });
  }

  async get(endpoint: string, config?: any) {
    return await this.getApiInstance().get(endpoint, config);
  }

  async post(endpoint: string, data?: any, config?: any) {
    return await this.getApiInstance().post(endpoint, data, config);
  }

  async patch(endpoint: string, data?: any, config?: any) {
    return await this.getApiInstance().patch(endpoint, data, config);
  }

  async delete(endpoint: string, config?: any) {
    return await this.getApiInstance().delete(endpoint, config);
  }
}
