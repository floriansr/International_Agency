import React from "react";
import { FormattedMessage } from "react-intl";

const About = () => {
	return (
		<>
			<h3>
				<FormattedMessage id="AboutTitle" />
			</h3>
			<p>
				<FormattedMessage id="AboutPresentation" />
			</p>
		</>
	);
};

export default About;
