import { TrainerScreen, ClientScreen } from './components/screens';

const HARDCODED_ROLE: string = 'member';

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