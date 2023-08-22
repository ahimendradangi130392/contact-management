
import React, { useState, useEffect } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { useNavigate } from "react-router-dom";
import { getCovid19AllData, Covid19CountriesData } from "../Service/api";
import { useQuery } from 'react-query';

const ContactChartsAndMaps = () => {
    const navigate = useNavigate();
    // Using the hook
    const { data, error, isLoading } = useQuery('randomFacts', getCovid19AllData);
    const { data: covid19CountriesData, error: covid19CountriesDataError, isLoading: covid19CountriesDataLoading } = useQuery('countriesData', Covid19CountriesData);

    const handleContactMenu = () => {
        navigate("/");
    }
    const handleContactChart = (_item: any) => {
        navigate("/maps");
    }
    const handleLineChart = (_item: any) => {
        navigate("/charts");
    }


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
                    <div>
                        <p className="mb-[1rem] font-semibold font-serif text-lg text-gray-800 text-center mt-[2rem] mb-[-1rem]">Covid-19 Maps</p>
                        <MapContainer center={[28, 3]} zoom={4} scrollWheelZoom={true}>
                            <TileLayer
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            {covid19CountriesData && covid19CountriesData?.map((countory: any) => {
                                return (
                                    <Marker position={[countory?.countryInfo?.lat, countory?.countryInfo?.long]}>
                                        <Popup>
                                            continent: {countory?.continent}<br />
                                            countory: {countory?.country}<br />
                                            cases: {countory?.cases}<br />
                                            active cases: {countory?.active}<br />
                                            death: {countory?.deaths}
                                        </Popup>
                                    </Marker>
                                )
                            })}
                        </MapContainer>
                    </div>
                    <div className="ml-[7rem]">
                        <p className="mb-[1rem] font-semibold font-serif text-lg text-gray-800 text-center mt-[2rem] mb-[-1rem]">Covid-19 List</p>
                        <div>
                            <p>Updated: {data?.updated}</p>
                            <p>Total cases: {data?.cases}</p>
                            <p>Today Cases: {data?.todayCases}</p>
                            <p>Recovered: {data?.recovered}</p>
                            <p>Deaths: {data?.deaths}</p>
                            <p>Today Deaths: {data?.todayDeaths}</p>
                            <p>AffectedCountries: {data?.affectedCountries}</p>
                            <p>Critical: {data?.critical}</p>
                            <p>Population: {data?.population}</p>
                            <p>Tests: {data?.tests}</p>
                        </div>
                        <div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ContactChartsAndMaps;
