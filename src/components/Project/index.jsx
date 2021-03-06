import React, { useState, useEffect, useContext } from "react";

import { useParams, useHistory } from "react-router-dom";

import LanguagesContext from "context/LanguagesContext";
import { FormattedMessage } from "react-intl";

import dataProjects from "data/dataProjects";

const Project = () => {
	const history = useHistory();
	const { language } = useContext(LanguagesContext);
	const { projectSlug } = useParams();
	const [currentProject, setCurrentProject] = useState(null);

	console.log(projectSlug);

	useEffect(() => {
		history.push(`/works/${projectSlug}/${language}`);
	}, [language]);

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
