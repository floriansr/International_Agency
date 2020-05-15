import React, { useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";

import LanguagesContext from "context/LanguagesContext";
import { FormattedMessage } from "react-intl";

const About = () => {
	const history = useHistory();
	const { language } = useContext(LanguagesContext);

	useEffect(() => {
		history.push(`/about/${language}`);
	}, [language]);

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
