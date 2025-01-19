import { useEffect, useState } from "react";


const Counter = ({item}) => {
    const [timeLift, setTimeLift] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })
    // console.log(item?.startDate)

    useEffect(() => {
        const targetDate = new Date(item?.deadLine);

        const updateCountdown = () => {
            const now = new Date();
            const total = targetDate - now;
            // console.log(total)

            if (total <= 0) {
                setTimeLift({ days: 0, hours: 0, minutes: 0, seconds: 0 })
            }

            const days = Math.floor(total / (1000 * 60 * 60 * 24));
            const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
            const minutes = Math.floor((total / (1000 * 60)) % 60);
            const seconds = Math.floor((total / 1000) % 60);

            setTimeLift({ days, hours, minutes, seconds });
        }
        const timer = setInterval(updateCountdown, 1000);
        updateCountdown();

        return () => clearInterval(timer)

    }, [item?.deadLine])

    return (
        <div className="grid grid-cols-4 gap-5 font-mono">
            <div className="bg-cyan-400 flex flex-col items-center justify-center rounded-lg text-white p-1 md:p-3">
                <span className="font-bold text-base md:text-4xl">{timeLift.days}</span> 
                <span>Days</span>
            </div>
            <div className="bg-cyan-400 flex flex-col items-center justify-center rounded-lg text-white p-1 md:p-3">
                <span className=" font-bold text-base md:text-4xl">{timeLift.hours}</span> 
                <span>Hours</span>
            </div>
            <div className="bg-cyan-400 flex flex-col items-center justify-center rounded-lg text-white p-1 md:p-3">
                <span className="font-bold text-base md:text-4xl">{timeLift.minutes}</span> 
                <span>Minutes</span>
            </div>
            <div className="bg-cyan-400 flex flex-col items-center justify-center rounded-lg text-white p-1 md:p-3">
                <span className="font-bold text-base md:text-4xl">{timeLift.seconds}</span> 
                <span>Seconds</span>
            </div>  
        </div >
    );
};

export default Counter;