import React, {useEffect, useState} from 'react';
import Navbar from "../components/Navbar";
import DivisionSidebar from "../components/DivisionSidebar";
import Section from "../components/Section";
import DivisionDescription from "../components/DivisionDescription";
import {getAllDivisions} from "../services/divisionService";

const DivisionPage = () => {
    const [divisions, setDivisions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchDivisions = () => {
            getAllDivisions()
                .then((divisions) => {
                    setDivisions(divisions);
                    setLoading(false);
                })
                .catch((error) => {
                    setError(error);
                    setLoading(false);
                });
        };

        fetchDivisions();
    }, []);

    if (loading) {
        return (
            <div
                className="animate-spin inline-block w-6 h-6 border-[3px] border-current border-t-transparent text-blue-600 rounded-full"
                role="status" aria-label="loading">
                <span className="sr-only">Loading...</span>
            </div>
        );
    }


    return (
        <div className="dark:bg-slate-900">
            <Navbar/>
            <div className="max-w-[90rem] mx-auto mt-14">
                <DivisionSidebar/>
            </div>
            <div className="w-full px-4 sm:px-6 md:px-8 lg:pl-[22rem]">
                <div className="max-w-3xl mx-auto xl:max-w-none py-10">
                    {divisions.map((division) => (
                        <Section
                            key={division.id}
                            id={division.id}
                            title={division.title}
                            content={<DivisionDescription/>}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DivisionPage;
