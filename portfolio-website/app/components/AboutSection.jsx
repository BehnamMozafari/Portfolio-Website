"use client"
import React, { useTransition, useState } from 'react'
import Image from 'next/image'
import TabButton from './TabButton.jsx';

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className="list-disc pl-2">
                <li>Python</li>
                <li>C</li>
                <li>Java</li>
                <li>R</li>
                <li>SQL</li>
                <li>HTML</li>
            </ul>
        ),
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul className="list-none pl-2">
                <li>Bachelor of Engineering (Honours) and Bachelor of Commerce</li>
                <li>Specialising in Software Engineering and Majoring in Business Analytics</li>
                <li>Monash University, Clayton Campus</li>
            </ul>
        ),
    }
];

const AboutSection = () => {
    const [tab, setTab] = useState("education");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    };
    return (
        <section className='text-white' id="about">
            <div className='md:grid md:grid-cols-12 gap-8 items-center py-8 xl:gap-16 sm:py-16'>
                <div className='col-span-5 place-self-center'>
                    <Image src='/images/Behnam-Coding.jpeg' alt="Working on my test-based elden ring project" width={400} height={400} />
                </div>
                <div className='col-span-6 mt-4 md:mt-0 text-left flex flex-col h-full'>
                    <h2 className='text-4xl font-bold text-white mb-4'>
                        <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-blue-700'>About Me</span>
                    </h2>
                    <p className='text-base md:text-lg'>
                        As a driven individual with a knack for solving complex 
                        challenges, I excel in communication and thrive in team 
                        settings. Currently seeking roles that fuel my 
                        passion for impact in the tech industry, 
                        I bring strong problem-solving skills and a record of academic 
                        excellence. Eager to contribute and grow, I am ready to make a 
                        significant contribution to your team.
                    </p>
                    <div className='flex flex-row justify-start mt-8'>
                        <TabButton selectTab={() => handleTabChange("education")} active={tab === "education"}> Education </TabButton>
                        <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"}> Skills </TabButton>
                    </div>
                    <div className='mt-8'>{TAB_DATA.find((t) => t.id === tab).content}</div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection