import React from "react";
import { FormattedMessage } from "react-intl";

const Home = () => {
	return (
		<>
			<h3>
				<FormattedMessage id="HomeTitle" />
			</h3>
			<p>
				<FormattedMessage id="HomePresentation" />
			</p>
		</>
	);
};

export default Home;
