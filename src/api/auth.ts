import type { HttpClient } from '../http/client';
import type {
  LoginForm,
  RegisterForm,
  RefreshTokenForm,
  ChangePasswordForm,
  PasswordResetRequestForm,
  PasswordResetForm,
  AuthUserVO,
  LoginResultVO,
  RegisterResultVO,
  PasswordResetResultVO,
  AuthModule,
} from '../types/auth';

export class AuthApi implements AuthModule {
  private client: HttpClient;

  constructor(client: HttpClient) {
    this.client = client;
  }

  async login(form: LoginForm): Promise<LoginResultVO> {
    const result = await this.client.post<LoginResultVO>('/v3/api/auth/authentication/login', form);
    this.handleLoginSuccess(result);
    return result;
  }

  async register(form: RegisterForm): Promise<RegisterResultVO> {
    return this.client.post<RegisterResultVO>('/v3/api/auth/authentication/register', form);
  }

  async refreshToken(form: RefreshTokenForm): Promise<LoginResultVO> {
    const result = await this.client.post<LoginResultVO>('/v3/api/auth/authentication/refresh_token', form);
    this.handleLoginSuccess(result);
    return result;
  }

  async logout(): Promise<void> {
    await this.client.post('/v3/api/auth/authentication/logout');
    this.client.clearAuthToken();
  }

  async getCurrentUser(): Promise<AuthUserVO> {
    return this.client.get<AuthUserVO>('/v3/api/auth/authentication/get_current_user');
  }

  async requestPasswordReset(form: PasswordResetRequestForm): Promise<PasswordResetResultVO> {
    return this.client.post<PasswordResetResultVO>('/v3/api/auth/authentication/request_password_reset', form);
  }

  async resetPassword(form: PasswordResetForm): Promise<PasswordResetResultVO> {
    return this.client.post<PasswordResetResultVO>('/v3/api/auth/authentication/reset_password', form);
  }

  async changePassword(form: ChangePasswordForm): Promise<boolean> {
    return this.client.post<boolean>('/v3/api/auth/authentication/change_password', form);
  }

  private handleLoginSuccess(result: LoginResultVO): void {
    const tokenManager = this.client.getTokenManager();
    if (tokenManager && result.token) {
      tokenManager.setTokens({
        authToken: result.token,
        refreshToken: result.refreshToken,
        expiresIn: result.expiresIn,
      });
    }
  }
}

export function createAuthApi(client: HttpClient): AuthModule {
  return new AuthApi(client);
}
