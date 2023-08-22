
import React, { useState } from "react";
import { ContactData } from "../Service/data";
import { useNavigate } from "react-router-dom";

const ViewContact = () => {
    const navigate = useNavigate();

    const handleContactMenu = () => {
        navigate("/");
    }
    const handleContactChart = (_item: any) => {
        navigate("/maps");
    }
    const handleLineChart = (_item: any) => {
        navigate("/charts");
    }

    const handleCreateContact = () => {
        navigate("/contact-form");
    }
    const handleEdit = (_item: any) => {
        navigate("/edit-contact-form", { state: { data: _item } });
    }
    const handleDelete = (id: any) => {

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
                        <div className='flex justify-center mt-[2rem]'>
                            <button onClick={handleCreateContact} type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Create contact </button>
                        </div>
                        <div className='flex justify-center mt-[2rem]'>
                            <div className="w-[70rem] h-[20rem] border border-gray-600 ...">
                                {ContactData?.length === 0 ? (<div className="w-[17rem] border border-gray-600 ...">
                                    <p className='m-[0.67rem] italic font-semibold font-mono text-lg text-gray-800 ...'>No Contact Found, Please add contact from create contact button</p>
                                </div>) : (
                                    <div className="flex justify-center">
                                        {ContactData && ContactData?.map((_item: any) => (
                                            <div className="m-4">
                                                <div className="w-[15rem] h-[8rem] shadow-md border-double border-4 border-indigo-600 ...">
                                                    <p className="m-[1.5rem]">FirstName:{_item.firstName}</p>
                                                    <p className="m-[1.5rem]">LastName: {_item.lastName}</p>
                                                </div>
                                                <div className="mt-[10px] flex justify-center">
                                                    <button onClick={() => handleEdit(_item)} className="w-[5rem] shadow bg-green-500 hover:bg-green-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
                                                        Edit
                                                    </button>
                                                </div>
                                                <div className="mt-[10px] flex justify-center">
                                                    <button onClick={() => handleDelete(_item?.id)} className="shadow bg-red-500 hover:bg-red-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
                                                        Delete
                                                    </button>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ViewContact;