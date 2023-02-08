import Image from "next/image";

export default function Page() {
    return (
   
        <main className="bg-secondary flex flex-col gap-8">
            <header className="flex justify-between p-6">
                <div className="greetings">
                    <p className="font-bold text-3xl">Hi Nacho,</p>
                    <p className="font-semibold text-xl">Monday 12, December</p>
                </div>
                <Image className="rounded-full" src="https://pbs.twimg.com/profile_images/1610648722542661635/Pcps1_zG_400x400.jpg" alt="fortys" width={64} height={64}/>
            </header>

            <section className="workout flex flex-col gap-2 p-6">
                <p className="font-bold text-3xl">Your work for today</p>
                <ul className="flex gap-3">
                    <li className="font-normal text-black">Monday</li>
                    <li className="font-normal text-gray-300">Tuesday</li>
                    <li className="font-normal text-gray-300">Wednesday</li>
                    <li className="font-normal text-gray-300">Thursday</li>
                    <li className="font-normal text-gray-300">Friday</li>
                    <li className="font-normal text-gray-300">Saturday</li>
                    <li className="font-normal text-gray-300">Sunday</li>
                </ul>

                <ul className="h-60 relative overflow-hidden before:w-full before:h-full before:absolute before:left-0 before:top-0 before:bg-gradient-to-t before:from-white before:pointer-events-none">
                    <li className="border border-gray-300 rounded-md p-2 flex justify-between items-center">
                        <p className="flex flex-col">
                            Squat
                            <span>4x4</span>
                        </p>

                        <p>180lbs</p>
                    </li>

                    <li className="border border-gray-300 rounded-md p-2 flex justify-between items-center">
                        <p className="flex flex-col">
                            DB Lunges
                            <span>3x10/12</span>
                        </p>

                        <p>45lbs</p>
                    </li>

                    <li className="border border-gray-300 rounded-md p-2 flex justify-between items-center">
                        <p className="flex flex-col">
                            Hip Thrust
                            <span>3x12-15</span>
                        </p>

                        <p>200lbs</p>
                    </li>

                    <li className="border border-gray-300 rounded-md p-2 flex justify-between items-center">
                        <p className="flex flex-col">
                            DB Romanian Deadlift
                            <span>4x10-12</span>
                        </p>

                        <p>45lbs</p>
                    </li>
                </ul>

                <button className="bg-primary text-white font-bold rounded-lg py-2 w-32 mx-auto">Show +</button>
            </section>

            <section className="flex flex-col gap-4">
                <div className="ml-6">
                    <p className="font-bold text-3xl">This week so far</p>
                    <p className="font-semibold text-xl">Keep up the good work</p>
                </div>

                <div className="resume flex justify-between bg-primary text-secondary px-6 py-8 text-lg">
                    <div className="flex flex-col items-center justify-center">
                        <p className="font-bold">3</p>
                        <p>sessions</p>
                    </div>

                    <div className="flex flex-col items-center justify-center">
                        <p className="font-bold">+25%</p>
                        <p>kgs moved</p>
                    </div>

                    <div className="flex flex-col items-center justify-center">
                        <p className="font-bold">-500g</p>
                        <p>lost</p>
                    </div>
                </div>
            </section>

            <section className="chart p-6">
                <p className="text-3xl font-bold">Your Progress</p>
                <div className="border w-full h-96 mx-auto"></div>
            </section>
        </main>
 
    )
  }