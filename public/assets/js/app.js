// Load skills from skills.json
async function loadSkills() {
    try {
        const response = await fetch('../../skills.json');
        const skills = await response.json();
        
        const skillsContainer = document.getElementById('skillsContainer');
        skillsContainer.innerHTML = '';
        
        skills.forEach(skill => {
            const skillDiv = document.createElement('div');
            skillDiv.className = 'bar';
            skillDiv.innerHTML = `
                <div class="info">
                    <img src="${skill.icon}" alt="${skill.name}" />
                    <span>${skill.name}</span>
                </div>
            `;
            skillsContainer.appendChild(skillDiv);
        });
    } catch (error) {
        console.error('Error loading skills:', error);
    }
}

// Load skills when DOM is ready
document.addEventListener('DOMContentLoaded', loadSkills);
