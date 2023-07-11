import { ClientScreen, TrainerScreen } from "./components/screens";

const HARDCODED_ROLE: string = 'trainer';

export default function Page() {

    return (
        <>
            {
                HARDCODED_ROLE === 'member'
                ? <TrainerScreen />
                : <ClientScreen />
            }
        </>
      )
  }