export type IRecoverPasswordResponse = null | IRecoverPasswordFetch;

export interface IRecoverPasswordFetch {
  ok: boolean;
  msg: string;
  status_code: string;
}
