'use client'
import { WEEK_DAYS } from '../../../../helpers'

interface IWeekDaysNav {
    day: string;
    onDayChanged: (day:string) => void;
}

const WeekDaysNav = ({day, onDayChanged}: IWeekDaysNav) => {
    return (
        <ul className='flex gap-3 overflow-x-scroll no-scrollbar'>
            {WEEK_DAYS.map((weekDay: string, index: number) => (
                <li
                    key={index}
                    onClick={() => onDayChanged(weekDay)}
                    className={`font-normal ${day === weekDay ? "text-black" : "text-gray-300"
                        }`}
                >
                    {weekDay}
                </li>
            ))}
        </ul>
    )
}

export default WeekDaysNav