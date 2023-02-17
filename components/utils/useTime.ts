import { useEffect, useState } from "react";

const useTime = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return time.toLocaleTimeString('en-US', { hour12: false, hour: 'numeric', minute: 'numeric' });
}

export default useTime;