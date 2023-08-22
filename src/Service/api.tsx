// Fetcher function
export const getCovid19AllData = async () => {
    const res = await fetch('https://disease.sh/v3/covid-19/all');
    return res.json();
};

export const Covid19CountriesData = async () => {
    const res = await fetch('https://disease.sh/v3/covid-19/countries');
    return res.json();
};

export const Covid19DayWiseData = async () => {
    const res = await fetch('https://disease.sh/v3/covid-19/historical/all?lastdays=all');
    return res.json();
};
