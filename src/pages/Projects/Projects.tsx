import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import './Projects.css'

const projectDatabase: IProjectHeader[] = [{
        title: 'Fourier Heat Equation Interactive WebGL Demonstration',
        description: 'A lit, shaded mesh that over time approaches a steady state temperature. This was my first project made in WebGL and was completed as the final project of CS4250 of Ohio University.',
        image: '/images/projects/mesh_thumb.png',
        url: 'fourier_heat_equation_interactive_webgl_demonstation',
        outside_url: 'https://samfoucart.github.io/Fourier-Series-Visualization/index.html',
        id: 1
    },
    {
        title: 'Micromouse Maze Solving Demonstration',
        description: 'A randomly generated maze and a controllable mouse that is able to solve the maze. This project was made during my sophomore year at Ohio University as part of IEEE.',
        image: '/images/projects/micromouse_thumb.png',
        url: 'micromouse_maze_solving_demonstration',
        outside_url: 'https://samfoucart.github.io/Ohio-University-Micromouse/simulator/index.html',
        id: 2
    },
    {
        title: 'Electromagnetic Spectral Data Collector/Viewer',
        description: 'An Android application that is able to collect, plot, and save data from an Ocean Optics USB2000 spectrometer. This project was made as part of the PACE program at Ohio University.',
        image: '/images/projects/zoomed-spectra.png',
        url: 'electromagnetic_spectral_data_collector',
        outside_url: 'https://github.com/samfoucart/oueecs_SpectralDataViewer',
        id: 3
    }
]

export default function Projects() {
    const [projects, setProjects] = useState<IProjectHeader[] | null>(null);
    const location = useLocation();

    useEffect(() => {
        // potentially fetch this in the future
        setProjects(projectDatabase);

        return (() => {
            setProjects(null);
        });

    }, [location]);

    function formatProjects(unformattedProjects: IProjectHeader[] | null) {
        if (unformattedProjects == null) {
            return (
                <div className="project-list-container"><p>Loading...</p></div>
            );
        } else {
            return (
                <div className="project-list-container">
                    <div className="project-metadata">
                        {unformattedProjects.map((project: IProjectHeader) => {
                            return (
                                <a href={project.outside_url? `${project.outside_url}` : `${process.env.PUBLIC_URL}/projects/${project.url}`} key={project.id}>
                                    <div className="project-outline">
                                        <img src={process.env.PUBLIC_URL + project.image} alt={project.title} width="128" height="128"/>
                                        <div className="project-text">
                                            <h2>{project.title}</h2>
                                            <p>{project.description}</p>
                                        </div>
                                    </div>
                                </a>
                            );
                        })}
                    </div>
                </div>
            )
        }
    }

    return (
        <div>
            {formatProjects(projects)}
        </div>
    );
}

interface IProjectHeader {
    title: string,
    description: string,
    image: string,
    url: string,
    id: number,
    outside_url?: string,
}