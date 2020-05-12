import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import dataProjects from "data/dataProjects";

const Project = () => {
	const { projectSlug } = useParams();
	const [currentProject, setCurrentProject] = useState(null);

	useEffect(() => {
		const projectId = projectSlug.slice(
			projectSlug[0],
			projectSlug.length - 11
		);

		setCurrentProject(
			dataProjects.find((x) => x.project_name === projectId)
		);
	}, [projectSlug]);

	const renderedItem = () => {
		return (
			<div>
				<h1>{currentProject.title}</h1>
				<p>{currentProject.author}</p>
				<p>{currentProject.description}</p>
			</div>
		);
	};

	return <>{!currentProject ? "" : renderedItem()}</>;
};

export default Project;
