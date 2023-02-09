import Image from "next/image";
import { TrainerScreen } from '../components/screens';
import { ClientScreen } from '../components/screens/ClientScreen';

const HARDCODED_ROLE = 'trainer';

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