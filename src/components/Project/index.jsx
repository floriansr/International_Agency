import React, { useState, useEffect } from "react";

import { useParams } from "react-router-dom";

import { FormattedMessage } from "react-intl";
import dataProjects from "data/dataProjects";

// import aazz from "assets/translation/fr/project.json";

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
				<p>
					<FormattedMessage
						id={`${Object.values(currentProject)[0]}.project_name`}
					/>
				</p>

				<p>
					<FormattedMessage
						id={`${Object.values(currentProject)[0]}.title`}
					/>
				</p>

				<p>
					<FormattedMessage
						id={`${Object.values(currentProject)[0]}.description`}
					/>
				</p>
			</div>
		);
	};

	return <>{!currentProject ? "" : renderedItem()}</>;
};

export default Project;
