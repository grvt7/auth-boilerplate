import { usersUrl } from '@/environment';
import { ApiService } from './ApiService';
const { NODE_APP_BASE_URL } = process.env;

class UserService {
  static async loginUser(body: any) {
    const apiUrl = `${usersUrl}/login`;

    const apiService = new ApiService(apiUrl, {});
    const response = await apiService.post('', body);
    return response;
  }
}

export { UserService };
