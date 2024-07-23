import { getAuthApi, loginApi, logoutApi, registerApi } from "./auth";
import {
  getUsersApi,
  createUserApi,
  deleteUserApi,
  updateUserApi,
  getPetugasAllApi,
} from "./users";
import { getRolesApi } from "./role";
import { getDashboardApi } from "./dashboard";
import {
  createLayananApi,
  getLayananAllApi,
  getLayananFilterApi,
  selesaiLayananApi,
  tolakLayananApi,
  validasiLayananApi,
  verifikasiLayananApi,
} from "./layanan";
import { getPaketLayananApi, getPaketLayananByIdApi } from "./paketLayanan";

export {
  getAuthApi,
  loginApi,
  logoutApi,
  registerApi,
  getUsersApi,
  createUserApi,
  getRolesApi,
  getDashboardApi,
  deleteUserApi,
  updateUserApi,
  createLayananApi,
  getLayananAllApi,
  getLayananFilterApi,
  selesaiLayananApi,
  tolakLayananApi,
  validasiLayananApi,
  verifikasiLayananApi,
  getPaketLayananApi,
  getPaketLayananByIdApi,
  getPetugasAllApi,
};
