// Function to toggle a section and its heading
function toggleSection(sectionId) {
    var section = document.getElementById(sectionId);
    if (section) {
        // Toggle visibility of section
        section.classList.toggle('hidden');
    }
}
// Add event listeners for each button to toggle its respective section
var personalInfoButton = document.getElementById('toggle-personal-info');
var educationButton = document.getElementById('toggle-education');
var skillsButton = document.getElementById('toggle-skills');
var workExperienceButton = document.getElementById('toggle-work-experience');
// Add event listeners to each button
personalInfoButton.addEventListener('click', function () { return toggleSection('section-1'); });
educationButton.addEventListener('click', function () { return toggleSection('section-2'); });
skillsButton.addEventListener('click', function () { return toggleSection('section-3'); });
workExperienceButton.addEventListener('click', function () { return toggleSection('section-4'); });
