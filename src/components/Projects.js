import React, { useState, useEffect } from 'react'
import { CardGroup, Container } from 'react-bootstrap'
import { Project } from './Project'

export const Projects = ({ onSelectProject, lang }) => {

    const [projects, getProjectsFromServer] = useState([])
    const [isSelectedProject, setShowProject] = useState(false)
    const [selectedProject, selectProject] = useState({})

    const onProjectSelect = async (project) => {
        await setShowProject(true)
        await selectProject(project)
    }
    const onProjectDeselect = async (selectedProject) => {
        await setShowProject(false)
        await selectProject({selectedProject})
    }

    useEffect(() => {
        const fetchProjects = async () => {
            const res = await fetch('http://localhost:5000/projects')
            const data = await res.json()
            getProjectsFromServer(await data)
        }
        fetchProjects()
    }, [])

    return (
        <>
            <h1>{lang.projects}:</h1>
            <CardGroup>
                {projects.map((project, index) => (
                    <Project key={index} project={project} onSelectProject={() => onProjectSelect(project)} />
                ))}
            </CardGroup>
            <Container onClick={() => onProjectDeselect(selectedProject)}>
                <div className={isSelectedProject ? 'modal' : 'nomodal'}>
                    <div className="content">
                        <div className="innerContent">
                            <button className="close" onClick={() => onProjectDeselect(selectedProject)}>Close</button>
                            {isSelectedProject ? <Project isSelectedProject={isSelectedProject} project={selectedProject} /> : ''}
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}
