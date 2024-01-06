import { ICardInfo } from "../../../interfaces/user"
import MemberCardInfo from "./MemberCardInfo"

const MemberCardsInfo = ({cards}: {cards: ICardInfo[]}) => {
  return (
    <section className="grid grid-cols-2 grid-rows-1 gap-4 text-white font-bold px-6">
        {
          cards.map((card) =>{
            return (
              <MemberCardInfo key={card.id} {...card} />
            )
          })
        }
    </section>
  )
}

export default MemberCardsInfo