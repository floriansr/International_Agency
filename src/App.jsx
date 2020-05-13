import React, { useState } from "react";
import { IntlProvider } from "react-intl";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { flattenMessages } from "tools/FlattenMessages";
import fr from "assets/translation/fr";
import en from "assets/translation/en";

import LanguagesContext from "context/LanguagesContext";

import Navbar from "components/Navbar";
import Home from "components/Home";
import Projects from "components/Projects";
import Project from "components/Project";
import About from "components/About";

const messages = {
	fr,
	en,
};

const App = () => {
	const [language, setLanguage] = useState("fr");

	return (
		<>
			<IntlProvider
				locale={language}
				messages={flattenMessages(messages[language])}
			>
				<Router>
					<div>
						<LanguagesContext.Provider value={{ setLanguage }}>
							<Navbar />
						</LanguagesContext.Provider>

						<Switch>
							<Route exact path="/works" component={Projects} />
							<Route
								path="/works/:projectSlug"
								component={Project}
							/>
							<Route path="/about" component={About} />
							<Route exact path="/" component={Home} />
						</Switch>
					</div>
				</Router>
			</IntlProvider>
		</>
	);
};

export default App;
