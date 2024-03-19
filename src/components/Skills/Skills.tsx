import  './Skills.scss'
import software from "../../assets/software.png"
import engineering from "../../assets/engineering.png"

import java from "../../assets/skills/java.svg";
import python from "../../assets/skills/python.svg";
import cpp from "../../assets/skills/cplusplus.svg";
import sql from "../../assets/skills/sql.svg";
import flask from "../../assets/skills/flask.svg";
import powershell from "../../assets/skills/powershell.svg";
import bash from "../../assets/skills/bash.svg";
import c from "../../assets/skills/c.svg";
import tensorflow from "../../assets/skills/tensorflow.svg";
import keras from "../../assets/skills/keras.svg";
import lua from "../../assets/skills/lua.svg";
import git from "../../assets/skills/git.svg";
import pandas from "../../assets/skills/pandas.svg";
import numpy from "../../assets/skills/numpy.svg";

import vscode from "../../assets/tools/vscode.svg";
import jupyter from "../../assets/tools/jupyter.svg";
import github from "../../assets/tools/github.svg";
import gitlab from "../../assets/tools/gitlab.svg";
import pycharm from "../../assets/tools/pycharm.svg";

function Skills() {
    return (
        <>
            <div id="skills" className="skills-section">
                <div className="skills-title">
                    <div className="background-1"></div>
                    <div className="background-2"></div>
                    <div className="skills-title-1">
                        <img src={software} style={{'--index': '0'}} alt="SOFTWARE"/>
                        <img src={software} style={{'--index': '1'}} alt="SOFTWARE"/>
                        <img src={software} style={{'--index': '2'}} alt="SOFTWARE"/>
                    </div>
                    <div className="skills-title-2">
                        <img src={engineering} style={{'--index': '0'}} alt="ENGINEERING"/>
                        <img src={engineering} style={{'--index': '1'}} alt="ENGINEERING"/>
                        <img src={engineering} style={{'--index': '2'}} alt="ENGINEERING"/>
                    </div>
                </div>
                <div className="sub-container-1">
                    <div className="skills-description">
                        As a Software Engineer, I use various languages and technologies to achieve the ideal goal with optimal efficiency. Throughout my years of experience, one of my greatest learnings is that each language has their certain tricks which can or cannot be applied to other languages. One example would be using static classes in Java for shared object storage. So I take my time researching about the tools I will use, even if I already have experience on it so that I will be able to produce the necessary results with high efficiency. 
                    </div>
                </div>
                <div className="sub-container-2">
                    <div className="skills-container">
                        <div className="skills-container-flex">
                            <div className="skill">
                                <img src={java} alt="Java"/>
                            </div>
                            <div className="skill">
                                <img src={python} alt="Python"/>
                            </div>
                            <div className="skill">
                                <img src={cpp} alt="C++"/>
                            </div>
                            <div className="skill">
                                <img src={sql} alt="SQL"/>
                            </div>
                            <div className="skill">
                                <img src={flask} alt="Flask"/>
                            </div>
                            <div className="skill">
                                <img src={c} alt="C"/>
                            </div>
                            <div className="skill">
                                <img src={powershell} alt="Powershell"/>
                            </div>
                            <div className="skill">
                                <img src={bash} alt="Bash"/>
                            </div>
                            <div className="skill">
                                <img src={tensorflow} alt="Tensorflow"/>
                            </div>
                            <div className="skill">
                                <img src={keras} alt="Keras"/>
                            </div>
                            <div className="skill">
                                <img src={lua} alt="Lua"/>
                            </div>
                            <div className="skill">
                                <img src={git} alt="git"/>
                            </div>
                            <div className="skill">
                                <img src={pandas} alt="pandas"/>
                            </div>
                            <div className="skill">
                                <img src={numpy} alt="numpy"/>
                            </div>
                        </div>
                        <span>SKILLS</span>
                    </div>
                    <div className="tools-container">
                        <div className="tools-container-flex">
                            <div className="tool">
                                <img src={vscode} alt="VSCode"/>
                            </div>
                            <div className="tool">
                                <img src={jupyter} alt="Jupyter"/>
                            </div>
                            <div className="tool">
                                <img src={github} alt="Github"/>
                            </div>
                            <div className="tool">
                                <img src={gitlab} alt="Gitlab"/>
                            </div>
                            <div className="tool">
                                <img src={pycharm} alt="Pycharm"/>
                            </div>
                        </div>
                        <span>TOOLS</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Skills;