import TimeDisplay from "@/components/TimeDisplay";
import { usePrayerTime } from "@/components/utils/usePrayerTime";


const Index = () => {
    const [prayerTime] = usePrayerTime();

    return (
        <div className="w-screen h-screen flex justify-center items-center">
            {prayerTime && (
                <TimeDisplay
                    prayerTime={prayerTime}
                />
            )}
            {!prayerTime && (
                <div>Loading...</div>
            )}
        </div>
    )
}

export default Index;