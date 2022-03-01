import React, {useEffect, useState} from "react";
import sanityClient from "../client";
import background from "../wallpaper4.gif";

export default function Project() {
    const [projectData, setProjectData] = useState(null);

    useEffect(() => {
        sanityClient.fetch(`*[_type == "project"]{
            title,
            date,
            place,
            description,
            projectType,
            link,
            tags,
        }`).then((data) => setProjectData(data))
        .catch(console.error);
    }, []);
    return (
        <main className="bg-scroll object-contain w-full" style={{ backgroundImage: `url(${background})` }}>
            {/* <img 
                src={background}
                alt="about me"
                className="absolute bg-scroll object-cover w-full h-full"
            /> */}
            <section className=" container mx-auto">
                <h1 className="text-5xl flex justify-center cursive">Projects Page</h1>
                <h2 className="text-lg text-grey-600 flex justify-center mb-12">Welcome to my Projects Page</h2>
                <section className="grid grid-cols-2 gap-8">
                    {projectData && projectData.map((project, index) => (
                    <article className="relative rounded-lg shadow-xl bg-white p-16">
                        <h3 className="text-gray-800 text-3xl font-bold mb-2 hover:text-red-700">
                            <a
                              href={project.link}
                              alt={project.title}
                              rel="noreferrer noopener"
                              target="_blank"
                            >{project.title}</a>
                        </h3>
                        <div className="text-gray-500 text-xs space-x-4">
                            <span>
                                <strong className="font-bold">Finished on</strong>:{" "}
                                {new Date(project.date).toLocaleDateString()}
                            </span>
                            <span>
                                <strong className="font-bold">Company</strong>:{" "}
                                {project.place}
                            </span>
                            <span>
                                <strong className="font-bold">Type</strong>:{" "}
                                {project.projectType}
                            </span>
                            <p className="my-6 text-lg text-gray-700 leading-relaxed">
                                {project.description}
                            </p>
                            <a 
                                href={project.link} 
                                rel="noreferrer noopener"
                                target="_blank"
                                className="text-red-500 font-bold hover:underline hover:text-red-400 text-xl">
                                View the Project{" "}
                                <span role="img" aria-label="right pointer"> {'>>>'}</span>
                            </a>
                            <span></span>
                        </div>
                    </article>
                    ))}
                </section>
            </section>
        </main>
    )
}