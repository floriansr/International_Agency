import error from "./error.json";
import home from "./home.json";
import about from "./about.json";
import projects from "./projects.json";
import project from "./project.json";

const fr = {
	...error,
	...home,
	...about,
	...projects,
	...project,
	/* On concatène tous nos objets JSON en un seul */
};

export default fr;
