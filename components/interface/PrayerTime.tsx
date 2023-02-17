interface PrayerTime {
    place: {
        country: string;
        countryCode: string;
        city: string;
        region: string;
        latitude: number;
        longitude: number;
    };
    times: {
        [key: string]: string[];
    };
};

export default PrayerTime;