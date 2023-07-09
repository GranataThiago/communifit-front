import { TrainerScreen, ClientScreen } from './components/screens';

const HARDCODED_ROLE: string = 'trainer';

export default function Page() {


    return (
        <>
            {
                HARDCODED_ROLE === 'trainer'
                ? <TrainerScreen />
                : <ClientScreen />
            }
        </>
      )
  }