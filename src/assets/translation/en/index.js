import error from "./error.json";
import home from "./home.json";
import about from "./about.json";
import projects from "./projects.json";
import project from "./project.json";

const en = {
	...error,
	...home,
	...about,
	...projects,
	...project,
	/* On concatène tous nos objets JSON en un seul */
};

export default en;
