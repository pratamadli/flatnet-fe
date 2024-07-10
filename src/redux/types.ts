export interface LoginPayload {
  email: string;
  password: string;
}

export interface RegisterPayload {
  email: string;
  password: string;
  nik: string;
  nama: string;
  noTelp: string;
  alamat: string;
}

export interface LogoutPayload {}

export interface ReturnState {
  success: boolean;
  data?: any | null;
  message?: string | null;
  date_start?: string | null;
  date_end: string | null;
  description?: string | null;
  loading: boolean;
  error?: any | null;
}
