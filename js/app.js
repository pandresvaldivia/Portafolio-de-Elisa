import { $sections, $form } from './selectors.js';
import { handleSubmit, setEntries } from './functions.js';
import UI from './classes/ui.js';

$form.addEventListener('submit', handleSubmit);

const ui = new UI();
const observer = new IntersectionObserver((entries) => setEntries(entries));

for (const section of $sections) {
	observer.observe(section);
}

document.addEventListener(
	'DOMContentLoaded',
	ui.createProject('../assets/json/projects.json')
);
