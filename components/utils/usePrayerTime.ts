import { useEffect, useState } from "react";
import PrayerTime from "../interface/PrayerTime";

// Aladhan API: ISNA method (2), Groningen, Netherlands
const ALADHAN_URL =
  "https://api.aladhan.com/v1/timingsByCity?city=Groningen&country=Netherlands&method=2";

function mapAladhanToPrayerTime(data: {
  timings: Record<string, string>;
  date?: { gregorian?: { date?: string } };
}): PrayerTime {
  const t = data.timings;
  return {
    place: {
      country: "Netherlands",
      countryCode: "NL",
      city: "Groningen",
      region: "Groningen",
      latitude: 53.2194,
      longitude: 6.5665,
    },
    times: {
      "0": [
        t.Fajr ?? "",
        t.Sunrise ?? "",
        t.Dhuhr ?? "",
        t.Asr ?? "",
        t.Maghrib ?? "",
        t.Isha ?? "",
      ],
    },
  };
}

export function usePrayerTime(): [PrayerTime | undefined] {
  const [prayerTime, setPrayerTime] = useState<PrayerTime | undefined>(undefined);

  useEffect(() => {
    fetch(ALADHAN_URL)
      .then((res) => res.json())
      .then((json) => {
        if (json.code === 200 && json.data?.timings) {
          setPrayerTime(mapAladhanToPrayerTime(json.data));
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return [prayerTime];
}