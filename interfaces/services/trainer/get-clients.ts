export interface IGetClientsByTrainerFetch {
    ok: boolean;
    clients: string;
}
  
export type GetClientsByTrainerResponse = null | IGetClientsByTrainerFetch;