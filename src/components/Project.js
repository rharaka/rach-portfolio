import React from 'react'
import { Card } from 'react-bootstrap'

export const Project = ({ project, onSelectProject, isSelectedProject }) => {

    const truncateString = (string, limit) => {

        if(string !== null && limit !== null) {
            // console.log(':::::String::::::' + string + ', :::::Limit::::::' + string)
            if (string.length > limit) {
                return string.substring(0, limit) + "... Read More"
            } 
            else {
                return string
            }
        }
        else
            return
        
    }

    return (
        <Card onClick={onSelectProject} className={isSelectedProject ? 'isSelectedProject' : 'isNotSelectedProject'}>
            <Card.Img src={'/images/' + project.media} />
            <Card.Body>
            <Card.Title>{project.title}</Card.Title>
            <Card.Text>
                {isSelectedProject ? project.description : truncateString(project.description, 30)}
            </Card.Text>
            </Card.Body>
            <Card.Footer>
            <small className="text-muted">{project.date}</small>
            </Card.Footer>
        </Card>
    )
}
