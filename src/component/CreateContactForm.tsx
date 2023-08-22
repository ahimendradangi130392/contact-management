
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { connect } from 'react-redux';
import CreateContact from '../Redux/actions/contactAction'
import contactAction from "../Redux/actions/contactAction";
import { GET_ALL_CONTACTS } from "../Redux/actions/actionTypes";
const CreateContactForm = () => {
    const navigate = useNavigate();
    const [formValue, setFormValue] = useState({
        firstName: '',
        lastName: '',
    });
    const [status, setStatus] = useState('active');

    const handleContactMenu = () => {
        navigate("/");
    }
    const handleContactChart = (_item: any) => {
        navigate("/maps");
    }
    const handleLineChart = (_item: any) => {
        navigate("/charts");
    }

    const handleChange = (events: any) => {
        const { name, value } = events.target;
        setFormValue((prevState) => ({
            ...prevState,
            [name]: value
        }));
    }
    const handleSubmit = (e: any) => {
        e.preventDefault();
        let contact = {
            firstName: formValue.firstName,
            lastName: formValue.lastName
        }
        CreateContact(contact);
        console.log('contact', contact)
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
                    <div className="ml-[13px]">
                        <p className="font-semibold font-serif text-lg text-gray-800 text-center mt-[2rem] mb-[-1rem]">Create contact screen</p>
                        <div className='flex justify-center mt-[2rem]'>
                            <div className="w-[70rem] h-[20rem] border border-gray-600 ...">
                                <form className="w-full  m-[1rem]">
                                    <div className="md:flex md:items-center mb-6">
                                        <div className="md:w-1/3">
                                            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
                                                Full Name:
                                            </label>
                                        </div>
                                        <div className="w-[13rem]">
                                            <input type="text" onChange={handleChange} name="firstName" value={formValue.firstName} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" id="inline-full-name">
                                            </input>
                                        </div>
                                    </div>
                                    <div className="md:flex md:items-center mb-6">
                                        <div className="md:w-1/3">
                                            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-password">
                                                Last Name:
                                            </label>
                                        </div>
                                        <div className="w-[13rem]">
                                            <input onChange={handleChange} name="lastName" value={formValue.lastName} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" id="inline-full-name">
                                            </input>
                                        </div>
                                    </div>
                                    <div className="md:flex md:items-center mb-6">
                                        <div className="md:w-1/3">
                                            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-password">
                                                Status:
                                            </label>
                                        </div>
                                        <div className=" items-center mt-[1rem]">
                                            <input onChange={(e) => setStatus(e.target.value)} checked={status === 'active'} value={"active"} name="active" id="active" type="radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600">
                                            </input>
                                            <label htmlFor="disabled-radio-1" className="ml-2 text-sm font-medium text-gray-400 dark:text-gray-500">Active</label>
                                            <div className="flex items-center mb-4">
                                                <input onChange={(e) => setStatus(e.target.value)} checked={status === 'inactive'} value={"inactive"} name="inactive" id="inactive" type="radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600">
                                                </input>
                                                <label htmlFor="disabled-radio-1" className="ml-2 text-sm font-medium text-gray-400 dark:text-gray-500">Inactive</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="md:flex md:items-center">
                                        <div className="md:w-1/3"></div>
                                        <div className="md:w-2/3">
                                            <button onClick={handleSubmit} className="shadow bg-blue-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
                                                Save Contact
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state: { contacts: any; }, ownProps: any) => {
    
    return {
        contacts: state.contacts,
        
    }
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        createContact: (contact: any) => dispatch(contactAction(contact))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateContactForm);