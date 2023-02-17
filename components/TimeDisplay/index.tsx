import { FC } from "react";
import PrayerTime from "../interface/PrayerTime";
import useTime from "../utils/useTime";

interface TimeDisplayProps {
    prayerTime: PrayerTime
}

const icons = ["./dawn.svg", "./sunrise.svg", "./sun.svg", "./haze.svg", "./evening.svg", "./night.svg"];
const names = ["Fajr", "Sunrise", "Dhuhr", "Asr", "Maghrib", "Isha"];

const TimeDisplay: FC<TimeDisplayProps> = ({ prayerTime }) => {
    const currentTime = useTime();
    const times = Object.values(prayerTime.times)[0];
    const index = times.findIndex((t, i, a) => {
        const next = a[i + 1];
        if (next) {
            return t <= currentTime && currentTime < next;
        }
        return t < currentTime;
    });
    const currentPrayer = names[index];

    return (
        <div className="w-full flex flex-row justify-around max-md:flex-col max-md:gap-4 dark:text-white">
            <div className="flex-1 flex flex-row justify-around max-w-lg max-md:max-w-full max-sm:flex-col max-sm:mb-8">
                <div className="flex flex-col text-center">
                    <div className="text-xl font-semibold">{prayerTime.place.city}</div>
                    <div className="text-lg">{prayerTime.place.country}</div>
                </div>
                <div className="flex flex-col items-center">
                    <img src={icons[index] || "fog.svg"} className="max-w-[5rem]" />
                </div>
                <div className="flex flex-col text-center">
                    <div className="text-2xl">{currentTime}</div>
                    <div className="text-tiny">{currentPrayer}</div>
                </div>
            </div>
            <div className="flex-1 flex flex-row gap-4 justify-around max-w-xl max-md:max-w-full max-sm:flex-col">
                {names.map((name, i) => (
                    <div className="flex flex-col text-center">
                        <div className="text-xl font-semibold">
                            {name}
                        </div>
                        <div className="text-lg">
                            {times[i]}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}


export default TimeDisplay;