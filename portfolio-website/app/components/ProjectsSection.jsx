"use client";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

const projectsData = [
    {
        id: 1,
        title: "Ebay Product Scraper",
        description: "An automated eBay scraper for product information",
        image: "/images/scraper_icon.jpg",
        url: "https://github.com/BehnamMozafari/Ebay-Product-Scraper",
        tag: ["All", "Python"],
    },
    {
        id: 2,
        title: "Text Based Elden Ring",
        description: "Text based adventure game inspired by elden ring",
        image: "/images/EldenRing.png",
        url: "https://github.com/BehnamMozafari/Text-Based-Elden-Ring",
        tag: ["All", "Java"],
    },
    {
        id: 3,
        title: "ScrumMaster",
        description: "A scrum management web tool",
        image: "/images/ScrumMaster.png",
        url: "https://github.com/BehnamMozafari/ScrumMaster",
        tag: ["All", "JavaScript", "HTML"],
    },
    {
        id: 4,
        title: "Global Insights into COVID-19",
        description: "This visualisation explores COVID-19 statistics across the world, highlighting both Australia and Malaysia",
        image: "/images/Covid.png",
        url: "https://github.com/BehnamMozafari/Global-Insights-Into-COVID-19",
        tag: ["All", "HTML"],
    }
];
const ProjectsSection = () => {
    const [tag, setTag] = useState("All");

    const filteredProjects = projectsData.filter((project) =>
        project.tag.includes(tag)
    );

    const handleTagChange = (newTag) => {
        setTag(newTag);
    };

    return (
        <span id="projects">
            <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
                <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-blue-700'>My Projects</span>
            </h2>
            <div className="flex flex-row justify-center items-center gap-2 text-white my-6">
                <ProjectTag
                    name="All"
                    onClick={handleTagChange}
                    isSelected={tag === "All"}
                />
            </div>
            <div className="grid md:grid-cols-3 gap-8 md:gap-12">
                {filteredProjects.map((project, index) => (
                    <ProjectCard
                        key={project.id}
                        title={project.title}
                        description={project.description}
                        imgUrl={project.image}
                        url={project.url}
                    />
                ))}
            </div>
        </span>
    );
};

export default ProjectsSection;