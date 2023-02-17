import { useEffect, useState } from "react";
import PrayerTime from "../interface/PrayerTime";

const url = "https://namaz-vakti.vercel.app/api/timesFromPlace?country=Netherlands&region=Groningen&city=Groningen&timezoneOffset=60&days=1"

export function usePrayerTime() {
    const [prayerTime, setPrayerTime] = useState<PrayerTime | undefined>(undefined);

    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setPrayerTime(data);
            })
            .catch((err) => {
                console.error(err);
            });
    }, []);

    return [prayerTime];
}