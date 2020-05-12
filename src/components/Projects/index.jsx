import React from "react";
import { Link } from "react-router-dom";
import shortid from "shortid";

import { Card } from "antd";

import dataProjects from "data/dataProjects";

const Projects = () => {
	return (
		<>
			{dataProjects.map((x) => (
				<div key={shortid.generate()}>
					<div className="site-card-wrapper">
						<Card
							title={
								<Link
									to={`/works/${x.project_name}-study-case`}
								>
									{x.title}
								</Link>
							}
							bordered={false}
						>
							{x.description}
						</Card>
					</div>
				</div>
			))}
		</>
	);
};

export default Projects;
