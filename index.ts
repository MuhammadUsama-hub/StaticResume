// Function to toggle a section and its heading
function toggleSection(sectionId: string) {
    const section = document.getElementById(sectionId);
    
    if (section ) {
    
        // Toggle visibility of section
        section.classList.toggle('hidden');
  
    }
}

// Add event listeners for each button to toggle its respective section
const personalInfoButton = document.getElementById('toggle-personal-info') as HTMLButtonElement;
const educationButton = document.getElementById('toggle-education') as HTMLButtonElement;
const skillsButton = document.getElementById('toggle-skills') as HTMLButtonElement;
const workExperienceButton = document.getElementById('toggle-work-experience') as HTMLButtonElement;

// Add event listeners to each button
personalInfoButton.addEventListener('click', () => toggleSection('section-1'));
educationButton.addEventListener('click',() => toggleSection('section-2'))
skillsButton.addEventListener('click', () => toggleSection('section-3'));
workExperienceButton.addEventListener('click', () => toggleSection('section-4'));
