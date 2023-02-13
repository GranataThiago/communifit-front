import { TrainerScreen } from '../components/screens';
import { ClientScreen } from '../components/screens/ClientScreen';

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