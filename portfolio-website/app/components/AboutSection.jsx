"use client"
import React, { useTransition, useState } from 'react'
import Image from 'next/image'
import TabButton from './TabButton';

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
                <li>CSS</li>
            </ul>
        ),
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul className="list-none pl-2">
                <li>Software Engineering and Business Analytics</li>
                <li>Monash University, Melbourne</li>
            </ul>
        ),
    },
    {
        title: "Experience",
        id: "experience",
        content: (
            <ul className="list-none pl-2">
                <li>AWS Cloud Practitioner</li>
                <li>Google Professional Cloud Developer</li>
            </ul>
        ),
    },
];

const AboutSection = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    };
    return (
        <section className='text-white'>
            <div className='md:grid md:grid-cols-12 gap-8 items-center py-8 xl:gap-16 sm:py-16'>
                <div className='col-span-6 place-self-center'>
                    <Image src='/images/Behnam-Coding.jpeg' width={400} height={400} />
                </div>
                <div className='col-span-6 mt-4 md:mt-0 text-left flex flex-col h-full'>
                    <h2 className='text-4xl font-bold text-white mb-4'>
                        <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-blue-700'>About Me</span>
                    </h2>
                    <p className='text-base md:text-lg'>
                        description of me - i am xxxx yyyyy
                    </p>
                    <div className='flex flex-row justify-start mt-8'>
                        <TabButton selectTab={() => handleTabChange("education")} active={tab === "education"}> Education </TabButton>
                        <TabButton selectTab={() => handleTabChange("experience")} active={tab === "experience"}> Experience </TabButton>
                        <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"}> Skills </TabButton>
                    </div>
                    <div className='mt-8'>{TAB_DATA.find((t) => t.id === tab).content}</div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection