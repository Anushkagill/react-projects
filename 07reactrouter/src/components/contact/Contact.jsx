import React from 'react'
import { NavLink,Outlet } from 'react-router-dom'

export default function Contact() {
    return (
        <div className="relative flex items-top justify-center min-h-[700px] bg-white sm:items-center sm:pt-0">
            <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
                <div className="mt-8 overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        
                        <div className="p-6 mr-2 bg-gray-100 sm:rounded-lg">
                            <h1 className="text-3xl sm:text-4xl text-gray-800 font-extrabold tracking-tight">
                                Get in touch:
                            </h1>

                            <p className="text-normal text-lg sm:text-xl font-medium text-gray-600 mt-2">
                                Fill in the form to start a conversation
                            </p>

                            {/* address */}
                            <div className="flex items-center mt-8 text-gray-600">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round"
                                    stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24"
                                    className="w-8 h-8 text-gray-500">
                                    <path d="M17.657 16.657L13.414 20.9..." />
                                </svg>
                                <div className="ml-4 text-md tracking-wide font-semibold w-40">
                                    Acme Inc, Street, State, Postal Code
                                </div>
                            </div>

                            {/* phone */}
                            <div className="flex items-center mt-4 text-gray-600">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round"
                                    stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24"
                                    className="w-8 h-8 text-gray-500">
                                    <path d="M3 5a2 2..." />
                                </svg>
                                <div className="ml-4 text-md tracking-wide font-semibold w-40">
                                    +44 1234567890
                                </div>
                            </div>

                            {/* email */}
                            <div className="flex items-center mt-2 text-gray-600">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round"
                                    stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24"
                                    className="w-8 h-8 text-gray-500">
                                    <path d="M3 8l7.89..." />
                                </svg>
                                <div className="ml-4 text-md tracking-wide font-semibold w-40">
                                    info@acme.org
                                </div>
                            </div>
                        </div>

                        {/* form */}
                        <form className="p-6 flex flex-col justify-center">
                            <div className="flex flex-col">
                                <input type="name" placeholder="Full Name"
                                    className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400..." />
                            </div>

                            <div className="flex flex-col mt-2">
                                <input type="email" placeholder="Email"
                                    className="w-100 mt-2 py-3 px-3 rounded-lg..." />
                            </div>

                            <div className="flex flex-col mt-2">
                                <input type="tel" placeholder="Telephone Number"
                                    className="w-100 mt-2 py-3 px-3 rounded-lg..." />
                            </div>

                            <button className="md:w-32 bg-orange-700 text-white font-bold py-3 px-6 rounded-lg mt-3">
                                Submit
                            </button>
                        </form>
                    </div>
                     <div className="mt-6">
                        <NavLink to="us" className="text-blue-600 underline text-lg">
                            → Go to Us Page
                        </NavLink>
                    </div>

                    {/* 🔥 NESTED ROUTES RENDER HERE */}
                    <Outlet />

                </div>
            </div>
        </div>
    );
}
