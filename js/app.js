import { $sections, $form } from './selectors.js'
import { handleSubmit, setEntries } from './functions.js'

$form.addEventListener('submit', handleSubmit)

const observer = new IntersectionObserver(entries => setEntries(entries));

for (const section of $sections) {
    observer.observe(section);
}