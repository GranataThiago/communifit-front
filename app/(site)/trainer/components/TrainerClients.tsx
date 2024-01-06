import { IGetClientsByTrainerFetch } from "../../../../interfaces/services/trainer/get-clients";
import { IUser } from "../../../../interfaces/user";
import { getClientsByTrainer } from "../../../../services/trainer/get-clients"
import { poppins } from "../../../components"
import TrainerClientsTable from "./TrainerClientsTable";

const TrainerClients = async({user}: {user: IUser}) => {
  const foundClients: IGetClientsByTrainerFetch  | null = await getClientsByTrainer({userId: user?._id!});
  return (
    <section className="chart">
        <h2 className={`${poppins.className} font-bold text-xl text-surface-light mb-4`}>Manage Clients</h2>

        <div className="w-full mx-auto">
         <TrainerClientsTable foundClients={foundClients?.clients || []}/>
        </div>
      </section>
  )
}

export default TrainerClients