import { IUser } from "../../user";

export interface IGetClientsByTrainerFetch {
    ok: boolean;
    status_code: string;
    clients: IUser[];
}
  