import React from "react";

import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import data from "assets/translation/fr/project.json";

import shortid from "shortid";
import { Card } from "antd";

const Projects = () => {
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
