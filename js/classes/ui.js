import { $projects } from '../selectors.js';

class UI {
	constructor() {
		this.imgPath = './assets/images/';
	}

	async createProject(jsonPath) {
		const res = await fetch(jsonPath);
		const { projects } = await res.json();

		for (const project of projects) {
			const projectContainer = document.createElement('div');
			const projectDescription = this.createDescription(project);
			const projectTestimony = this.createTestimony(project);

			projectContainer.className = 'project-container';
			projectContainer.appendChild(projectDescription);
			projectContainer.appendChild(projectTestimony);

			$projects.appendChild(projectContainer);
		}
		console.log(projects);
	}

	createDescription({ name, description, image, alt, url, repository }) {
		const projectDescription = document.createElement('div');
		projectDescription.className = 'project';

		projectDescription.innerHTML = `
        <div class="project-image">
            <img
                src="${this.imgPath + image}"
                alt="${alt}"
            />
        </div>
        <div class="project-description">
            <a
                class="title"
                target="_blank"
                href="${url}"
                rel="noreferrer"
                >${name}</a
            >
            <p>${description}</p>
            <div class="button-container">
                <a
                    target="_blank"
                    href="${url}"
                    rel="noreferrer"
                    class="button"
                    >Ver proyecto</a
                >
                <a
                    target="_blank"
                    href="${repository}"
                    rel="noreferrer"
                    class="button is-secondary"
                    ><i class="icon-github"></i> Ver código</a
                >
            </div>
        </div>
        `;

		return projectDescription;
	}

	createTestimony({ testimony: { author, position, photo, alt, quote } }) {
		const projectTestimony = document.createElement('article');
		projectTestimony.className = 'testimony';
		projectTestimony.innerHTML = `
        <img
            src="${this.imgPath + photo}"
            height="80"
            width="80"
            alt="${alt}"
        />
        <p>"${quote}".</p>
        <p>${author} / ${position}</p>
    `;

		return projectTestimony;
	}
}

export default UI;
