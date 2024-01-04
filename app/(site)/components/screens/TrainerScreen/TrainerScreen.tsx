import { poppins } from "../../../../components";
import { Button } from "../../../../components/ui/button";
import { UserGreeting } from "../../UserGreeting";

const FAKE_USERS = [
  {
    username: "thiagog",
    fullName: "Thiago Granata",
    image: "none",
    state: "paid",
  },
];

const TrainerScreen = () => {
  return (
    <main className="bg-secondary flex flex-col gap-8 p-6 bg-secondary-dark">
      <header className="flex flex-col-reverse gap-6 xxs:flex-row  justify-between relative">
        <UserGreeting />
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

      <section className="chart">
        <h2 className={`${poppins.className} font-bold text-xl text-surface-light mb-4`}>Manage Clients</h2>

        <div className="w-full mx-auto">
          <table className="table-auto text-center w-full bg-secondary-light text-surface-light p-2 rounded-xl">
            <thead className="w-full">
              <tr>
                <th className="text-surface-dark font-normal">Member</th>
                <th className="text-surface-dark font-normal">Status</th>
                <th className="text-surface-dark font-normal">Actions</th>
              </tr>
            </thead>
            <tbody className="w-full font-bold">
              {FAKE_USERS.map(({ username, fullName, image, state }) => (
                <tr key={username}>
                  <td>{fullName}</td>
                  <td>{state === 'paid' ? <div className="mx-auto w-4 h-4 rounded-full bg-green-300"></div> : <div className="mx-auto w-4 h-4 rounded-full bg-red-300"></div>}</td>
                    <td>
                    <a href={`/trainer/create/${username}`}>Edit</a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
};

export default TrainerScreen;
