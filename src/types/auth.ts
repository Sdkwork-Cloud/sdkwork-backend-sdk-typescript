export type LoginType = 'username' | 'email' | 'phone' | 'oauth';

export interface LoginForm {
  type?: LoginType;
  email?: string;
  phone?: string;
  username?: string;
  password: string;
  owner?: string;
  captcha?: string;
  captchaId?: string;
  rememberMe?: boolean;
  verificationCode?: string;
  invitationCode?: string;
}

export interface RegisterForm {
  username: string;
  password: string;
  email?: string;
  phone?: string;
  type?: LoginType;
  verificationCode?: string;
  invitationCode?: string;
  captcha?: string;
  captchaId?: string;
}

export interface RefreshTokenForm {
  refreshToken: string;
}

export interface ChangePasswordForm {
  oldPassword: string;
  newPassword: string;
  confirmPassword: string;
}

export interface PasswordResetRequestForm {
  email?: string;
  phone?: string;
}

export interface PasswordResetForm {
  token: string;
  newPassword: string;
  confirmPassword: string;
}

export interface AuthUserVO {
  id: string | number;
  username: string;
  email?: string;
  phone?: string;
  nickname?: string;
  avatar?: string;
  status?: string;
  createdAt?: string;
}

export interface LoginResultVO {
  token: string;
  refreshToken: string;
  expiresIn: number;
  refreshExpiresIn: number;
  userId: string | number;
  user?: AuthUserVO;
}

export interface RegisterResultVO {
  user: AuthUserVO;
}

export interface PasswordResetResultVO {
  success: boolean;
  message: string;
  expiresIn?: number;
}

export interface OAuthAuthorizeUrlVO {
  authorizeUrl: string;
  state: string;
}

export interface OAuthCallbackForm {
  code: string;
  state: string;
}

export interface VerificationCodeForm {
  type: 'email' | 'phone' | 'image';
  target?: string;
  purpose?: 'register' | 'login' | 'reset_password' | 'change_phone' | 'change_email';
}

export interface VerificationCodeResultVO {
  success: boolean;
  captchaId?: string;
  captchaImage?: string;
  expiresIn?: number;
}

export interface AuthModule {
  login(form: LoginForm): Promise<LoginResultVO>;
  register(form: RegisterForm): Promise<RegisterResultVO>;
  refreshToken(form: RefreshTokenForm): Promise<LoginResultVO>;
  logout(): Promise<void>;
  getCurrentUser(): Promise<AuthUserVO>;
  requestPasswordReset(form: PasswordResetRequestForm): Promise<PasswordResetResultVO>;
  resetPassword(form: PasswordResetForm): Promise<PasswordResetResultVO>;
  changePassword(form: ChangePasswordForm): Promise<boolean>;
}

export interface OAuthModule {
  getAuthorizeUrl(provider: string): Promise<OAuthAuthorizeUrlVO>;
  callback(provider: string, form: OAuthCallbackForm): Promise<LoginResultVO>;
}

export interface VerificationModule {
  sendCode(form: VerificationCodeForm): Promise<VerificationCodeResultVO>;
  verifyCode(target: string, code: string, captchaId?: string): Promise<boolean>;
}
