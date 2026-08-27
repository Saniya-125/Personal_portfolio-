// Tech Stack & Skill Badge Array Collection
const skills = [
    { name: "React.js", icon: "fa-brands fa-react", color: "text-cyan-400" },
    { name: "JavaScript", icon: "fa-brands fa-js", color: "text-yellow-400" },
    { name: "Git & GitHub", icon: "fa-brands fa-github", color: "text-white" },
    { name: "C", icon: "fa-solid fa-code", color: "text-blue-400" },
    { name: "C++", icon: "fa-solid fa-terminal", color: "text-indigo-400" },
    { name: "Java", icon: "fa-brands fa-java", color: "text-orange-500" },
    { name: "HTML5", icon: "fa-brands fa-html5", color: "text-orange-400" },
    { name: "CSS3", icon: "fa-brands fa-css3-alt", color: "text-blue-500" },
    { name: "Python", icon: "fa-brands fa-python", color: "text-yellow-500" },
    { name: "MySQL", icon: "fa-solid fa-database", color: "text-blue-300" },
    { name: "PL/SQL", icon: "fa-solid fa-server", color: "text-red-400" }
];

// Project Object Structure Container
const projects = [
    {
        title: "Personal Portfolio Website",
        description: "Designed and developed a mobile-friendly personal portfolio using HTML, CSS, JavaScript, Bootstrap, and animations to create a smooth and visually engaging UI.",
        tags: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
        mockIcon: "fa-solid fa-laptop-code",
        codeLink: "https://github.com"
    },
    {
        title: "AI/ML Product Design Agency Website",
        description: "Created an interactive website using HTML, CSS, JavaScript, Bootstrap, and GSAP animations to highlight AI/ML-based services in a dynamic and appealing way.",
        tags: ["GSAP", "Bootstrap", "UI/UX", "JavaScript"],
        mockIcon: "fa-solid fa-brain",
        codeLink: "https://github.com"
    },
    {
        title: "Bank Management System",
        description: "Implemented an object-oriented program supporting account creation, deposits, withdrawals, and transaction history using file handling and class-based architecture.",
        tags: ["C++", "OOP", "File Handling", "CLI"],
        mockIcon: "fa-solid fa-building-columns",
        codeLink: "https://github.com"
    }
];

document.addEventListener("DOMContentLoaded", () => {
    // 1. Render Skills Matrix
    const skillsGrid = document.getElementById("skills-grid");
    skills.forEach(skill => {
        const item = document.createElement("div");
        item.className = "glass-effect border border-white/5 rounded-xl p-4 flex flex-col items-center justify-center text-center gap-3 group hover:border-cyan-400/30 transition-all duration-300 hover:-translate-y-1";
        item.innerHTML = `
            <i class="${skill.icon} text-3xl ${skill.color} transition-transform group-hover:scale-110"></i>
            <span class="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">${skill.name}</span>
        `;
        skillsGrid.appendChild(item);
    });

    // 2. Render Projects Grid Layout
    const projectsGrid = document.getElementById("projects-grid");
    projects.forEach(proj => {
        const card = document.createElement("div");
        card.className = "glass-effect border border-white/5 rounded-2xl flex flex-col overflow-hidden group hover:border-violet-500/20 reveal-on-scroll transition-all duration-300 hover:-translate-y-2";
        
        // Custom interactive syntax frame mockup header component
        card.innerHTML = `
            <div class="h-48 bg-gradient-to-br from-zinc-900 to-zinc-950 flex items-center justify-center border-b border-white/5 relative overflow-hidden">
                <div class="absolute top-3 left-3 flex space-x-1.5">
                    <span class="w-2.5 h-2.5 rounded-full bg-red-500/60"></span>
                    <span class="w-2.5 h-2.5 rounded-full bg-yellow-500/60"></span>
                    <span class="w-2.5 h-2.5 rounded-full bg-green-500/60"></span>
                </div>
                <i class="${proj.mockIcon} text-5xl text-violet-500/40 group-hover:text-cyan-400/50 transition-colors duration-500"></i>
            </div>
            <div class="p-6 flex-1 flex flex-col justify-between">
                <div>
                    <h3 class="text-xl font-bold text-gray-100 mb-3 group-hover:text-cyan-400 transition-colors">${proj.title}</h3>
                    <p class="text-gray-400 text-sm font-light leading-relaxed mb-4">${proj.description}</p>
                </div>
                <div>
                    <div class="flex flex-wrap gap-2 mb-6">
                        ${proj.tags.map(t => `<span class="text-[11px] font-medium tracking-wide bg-white/5 text-gray-300 px-2.5 py-1 rounded-md border border-white/5">${t}</span>`).join('')}
                    </div>
                    <a href="${proj.codeLink}" target="_blank" class="inline-flex items-center text-sm font-semibold text-violet-400 hover:text-cyan-400 transition-colors group/link">
                        View Code <i class="fa-solid fa-arrow-up-right-from-square ml-1.5 text-xs transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"></i>
                    </a>
                </div>
            </div>
        `;
        projectsGrid.appendChild(card);
    });

    // 3. Mobile Navigation Controls Toggle
    const menuBtn = document.getElementById("menu-btn");
    const mobileMenu = document.getElementById("mobile-menu");
    
    menuBtn.addEventListener("click", () => {
        mobileMenu.classList.toggle("hidden");
        const icon = menuBtn.querySelector("i");
        icon.classList.toggle("fa-bars");
        icon.classList.toggle("fa-xmark");
    });

    // Close menu when clicking structural nav anchor items
    document.querySelectorAll(".mobile-link").forEach(link => {
        link.addEventListener("click", () => {
            mobileMenu.classList.add("hidden");
            const icon = menuBtn.querySelector("i");
            icon.className = "fa-solid fa-bars text-2xl";
        });
    });

    // 4. Scroll Intersection Animation System
    const scrollElements = document.querySelectorAll(".reveal-on-scroll");
    
    const elementInView = (el, dividend = 1) => {
        const elementTop = el.getBoundingClientRect().top;
        return (elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend);
    };

    const displayScrollElement = (element) => {
        element.classList.add("active");
    };

    const handleScrollAnimation = () => {
        scrollElements.forEach((el) => {
            if (elementInView(el, 1.15)) {
                displayScrollElement(el);
            }
        });
    };

    window.addEventListener("scroll", handleScrollAnimation);
    // Initialize once on initial loading phase
    setTimeout(handleScrollAnimation, 200);

    // 5. Contact Form Submissions Handler 
    const contactForm = document.getElementById("contact-form");
    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("Thanks for reaching out, Saniya will get back to you shortly!");
        contactForm.reset();
    });
});