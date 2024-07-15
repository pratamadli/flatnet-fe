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

export interface CreateUserPayload {
  email: string;
  password: string;
  nik: string;
  nama: string;
  noTelp: string;
  alamat: string;
  roleId: string;
}

export interface CurrentUserDataPayload {
  alamat: string;
  createdAt: string | null;
  createdUserId: string | number | null;
  email: string;
  nama: string;
  nik: string;
  noTelp: string;
  password: string;
  roleId: string | number;
  roleName: string;
  updatedAt: string;
  updatedUserId: string | null;
  userId: string | number | null;
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
  currentData?: any | null;
}
