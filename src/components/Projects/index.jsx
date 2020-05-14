import React from "react";

// { useEffect, useContext }
// import LanguagesContext from "context/LanguagesContext";
// , useHistory

import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import data from "assets/translation/fr/project.json";

import shortid from "shortid";
import { Card } from "antd";

const Projects = () => {
	// const history = useHistory();
	// const { language } = useContext(LanguagesContext);

	// useEffect(() => {
	// 	history.push(`/works/${language}`);
	// }, [language]);

	return (
		<>
			<h3>
				<FormattedMessage id="ProjectTitle" />
			</h3>
			<p>
				<FormattedMessage id="ProjectPresentation" />
			</p>

			{Object.keys(data).map((x) => (
				<div key={shortid.generate()}>
					<div className="site-card-wrapper">
						<Card
							title={
								<Link
									to={`/works/${data[x].project_name}-study-case`}
								>
									<FormattedMessage id={`${x}.title`} />
								</Link>
							}
							bordered={false}
						>
							<FormattedMessage id={`${x}.description`} />
						</Card>
					</div>
				</div>
			))}
		</>
	);
};

export default Projects;
