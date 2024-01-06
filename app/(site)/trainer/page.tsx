import { poppins } from "../../components";
import { Button } from "../../components/ui/button";
import UserGreeting from "../components/UserGreeting";
import TrainerClients from "./components/TrainerClients";

//No tipen esto, les va a dar error el build
const TrainerPage = async({user}: any) =>{
  return (
    <main className="bg-secondary flex flex-col gap-8 p-6 bg-secondary-dark">
      <header className="flex flex-col-reverse gap-6 xxs:flex-row  justify-between relative">
        <UserGreeting user={user} />
      </header>

      <section className="workout flex flex-col gap-8 bg-secondary-light rounded-xl p-6">
        <h2 className={`${poppins.className} font-bold text-3xl  text-primary`}>Hey Trainer!</h2>
        
        <p className="text-surface-light text-2xl font-medium flex justify-between ">
          2 of your new members still don’t have a plan  
        </p>

        <Button className="ml-auto w-48" variant='outlined'>Manage</Button>
      </section>

      <section className="w-full flex flex-col gap-4">
        <header className="w-full flex flex-col items-start justify-center gap-4">
          <h2 className={`${poppins.className} font-bold text-xl text-surface-light`}>Business Report</h2>
        </header>

        <div className="flex gap-4">
          <div className="bg-secondary-light rounded-xl p-6 grid place-items-center flex-1">
            <p className="text-primary font-bold text-xl">15 clients</p>
            <p className="text-surface-light text-lg">last month</p>
          </div>

          <div className="bg-secondary-light rounded-xl p-6 grid place-items-center flex-1">
            <p className="text-primary font-bold text-xl">3500</p>
            <p className="text-surface-light text-lg">monthly income</p>
          </div>
        </div>

        <Button className="ml-auto w-48" variant='outlined'>View report</Button>
      </section>

      <TrainerClients user={user}/>
    </main>
  );
};


export default TrainerPage