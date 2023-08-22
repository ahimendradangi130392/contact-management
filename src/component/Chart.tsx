import React, { useState, useEffect } from 'react'
import Chart from "react-apexcharts";
import { useNavigate } from "react-router-dom";
import { Covid19CountriesData, } from "../Service/api";
import { useQuery } from 'react-query';

const LineChart = () => {
    const navigate = useNavigate();
    const [chartListData, setChartListData] = useState([])
    const { data: covid19CountriesData, error: covid19CountriesDataError, isLoading: covid19CountriesDataLoading } = useQuery('countriesData', Covid19CountriesData);
    console.log('chartListData:', chartListData);
    // useEffect(() => {
    //     const ListData = covid19CountriesData?.filter((data: any) => data.active);
    //     console.log('ListDatahhhh', ListData)

    // }, [covid19CountriesData]);

    useEffect(() => {
        const activeCountries = covid19CountriesData?.filter((data: any) => data.active > 0);
        console.log('Active Data:', activeCountries);

        if (activeCountries) {
            activeCountries.forEach((country: any) => {
                console.log(`${country.country} - Active Cases: ${country.cases}`);
            });
        }
    }, [covid19CountriesData]);

    const handleContactMenu = () => {
        navigate("/");
    }
    const handleContactChart = (_item: any) => {
        navigate("/maps");
    }
    const handleLineChart = (_item: any) => {
        navigate("/charts");
    }

    var options = {
        chart: {
            id: "basic-bar"
        },
        xaxis: {
            categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
        }
    }
    const series = [
        {
            name: "series-1",
            data: [30, 40, 45, 50, 49, 60, 70, 91]
        }
    ]

    return (
        <div className="min-h-screen grid place-items-center">
            <div className="w-[100%] h-[100%] rounded-md border-solid border-4 border-[#2fa0cc]  drop-shadow-md ..." >
                <div className="p-3 bg-[#2981a3]">
                    <p className="block mb-1 font-semibold text-center text-white	">Page Contact</p>
                </div>
                <div className='flex'>
                    <div className="w-[12rem] h-[92vh] border-solid border-2 border-[#524c4c] h-[452px]">
                        <div className=" w-full md:block W-[30rem] md:w-auto " id="navbar-default">
                            <ul className="font-medium column flex-col p-2 md:p-4 mt-4 border rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0">
                                <li>
                                    <p onClick={handleContactMenu} className="text-blue-600 underline cursor-pointer focus:pointer-events-auto">contacts</p>
                                </li>
                            </ul>
                            <hr />
                            <ul className="font-medium column flex-col p-2 md:p-4 mt-4 border rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0">
                                <li>
                                    <p onClick={handleContactChart} className="text-blue-600 underline cursor-pointer focus:pointer-events-auto">Maps</p>
                                </li>
                            </ul>
                            <hr />
                            <ul className="font-medium column flex-col p-2 md:p-4 mt-4 border rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0">
                                <li>
                                    <p onClick={handleLineChart} className="text-blue-600 underline cursor-pointer focus:pointer-events-auto">Line Charts</p>
                                </li>
                            </ul>
                            <hr />
                            <ul className="font-medium column flex-col p-2 md:p-4 mt-4 border rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0">
                                <li>
                                    <p className="text-2x font-bold">Sidebar</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="row">
                        <div className="mixed-chart">
                            <Chart
                                options={options}
                                series={series}
                                type="bar"
                                width="500"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default LineChart
