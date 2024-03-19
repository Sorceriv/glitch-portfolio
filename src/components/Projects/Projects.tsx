import './Projects.scss'

function Projects() {
    return(
        <>
            <div id="projects" className="projects-container">
                <div className="project-title">
                    PROJECTS
                </div>
                <div className="projects">
                    <div className="project-container">
                        {/*Map dis*/}
                        <span>Project #</span>
                        <a href="#"><div className="project"></div></a>
                    </div>
                    <div className="project-container">
                        {/*Map dis*/}
                        <span>Project #</span>
                        <a href="#"></a>
                    </div>
                    <div className="project-container">
                        {/*Map dis*/}
                        <span>Project #</span>
                        <a href="#"></a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Projects;