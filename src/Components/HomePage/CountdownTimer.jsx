/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";

export default function CountdownTimer() {
    const eidDate = new Date("June 7, 2025 00:00:00").getTime();

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    function calculateTimeLeft() {
        const now = new Date().getTime();
        const difference = eidDate - now;

        if (difference <= 0) {
            return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }

        return {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / (1000 * 60)) % 60),
            seconds: Math.floor((difference / 1000) % 60),
        };
    }

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="text-center py-10 bg-yellow-100 text-gray-800 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold text-yellow-600">🕰️ Eid Countdown 2025</h2>
            <p className="mt-2 text-lg">Time Left Until Eid:</p>
            <div className="flex justify-center space-x-4 md:space-x-8 py-5 text-2xl font-semibold mt-4 ">
                <div className="bg-yellow-500 text-white px-4 py-2 rounded">
                    {timeLeft.days} <span className="text-sm">Days</span>
                </div>
                <div className="bg-yellow-500 text-white px-4 py-2 rounded">
                    {timeLeft.hours} <span className="text-sm">Hours</span>
                </div>
                <div className="bg-yellow-500 text-white px-4 py-2 rounded">
                    {timeLeft.minutes} <span className="text-sm">Minutes</span>
                </div>
                <div className="bg-yellow-500 text-white px-4 py-2 rounded">
                    {timeLeft.seconds} <span className="text-sm">Seconds</span>
                </div>
            </div>
            {timeLeft.days === 0 && <p className="mt-4 text-xl font-bold text-red-500">🎉 Eid Mubarak! 🎉</p>}
        </div>
    );
}