import React from "react";
import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, url}) => {
    return (
        <Col size={12} sm={6} md={4} className="my-3">
            <a href={url} target="_blank" rel="noopener noreferrer" className="text-decoration-none">
            <div className="d-inline-flex flex-row project-card w-100 h-100">
                {/* <div className="p-2">
                    <img src={imgUrl} alt={title} />
                </div> */}
                <div className="project-info">
                    <h5>{title}</h5>
                    <span className="description">{description}</span>
                </div>
            </div>
            </a>
        </Col>
    )
};
