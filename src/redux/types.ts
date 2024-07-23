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

export interface CreateLayananPayload {
  paketLayananId: string;
  waktuPemasangan: string;
}

export interface LayananFilterPayload {
  layananId?: string | number;
  pelangganId?: string | number;
  petugasId?: string | number;
  paketLayananId?: string | number;
  status?: string;
}

export interface CurrentLayananPayload {
  layananId?: string | number;
  pelangganId?: string | number;
  paketLayananId?: string | number;
  petugasId?: string | number | null;
  status?: string | null;
  alasanTolak?: string | null;
  fileBukti?: string | null;
  waktuPemasangan?: string | null;
  createdUserId?: string | number | null;
  updatedUserId?: string | number | null;
  createdAt?: string | null;
  updatedAt?: string | null;
  namaPelanggan?: string | null;
  namaPetugas?: string | null;
  namaPaket?: string | null;
  hargaPaket?: string | number | null;
  deskripsiPaket?: string | null;
  namaStatus?: string | null;
}

export interface VerifikasiLayananPayload {
  layananId: string | number;
  petugasId: string | number;
}

export interface TolakLayananPayload {
  layananId: string | number;
  alasanTolak: string;
}

export interface ValidasiLayananPayload {
  layananId: string | number;
  fileBukti: string;
}

export interface SelesaiLayananPayload {
  layananId: string | number;
  fileBukti: string;
}

export interface CurrentPaketLayananPayload {
  paketLayananId: string | number;
  namaPaket: string | number;
  hargaPaket: string | number;
  deskripsiPaket: string;
  imagePaket: string;
  createdUserId: string | number;
  updatedUserId: string | number;
  createdAt: string;
  updatedAt: string;
}
