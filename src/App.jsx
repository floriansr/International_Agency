import React, { useState, useEffect } from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { IntlProvider } from "react-intl";
import LanguagesContext from "context/LanguagesContext";
import { flattenMessages } from "tools/FlattenMessages";
import fr from "assets/translation/fr";
import en from "assets/translation/en";

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

	useEffect(() => {
		localStorage.setItem("Language fav", language);
	}, [language]);

	useEffect(() => {
		setLanguage(localStorage.getItem("Language fav"));
	}, []);

	return (
		<>
			<IntlProvider
				locale={language}
				messages={flattenMessages(messages[language])}
			>
				<Router>
					<div>
						<LanguagesContext.Provider
							value={{ language, setLanguage }}
						>
							<Navbar />

							<Switch>
								<Route
									exact
									path="/works"
									component={Projects}
								/>
								<Route
									path="/works/:projectSlug"
									component={Project}
								/>

								<Route path="/about" component={About} />
								<Route path="/" component={Home} />
							</Switch>
						</LanguagesContext.Provider>
					</div>
				</Router>
			</IntlProvider>
		</>
	);
};

export default App;
