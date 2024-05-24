document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("modal");
    const modalContent = document.getElementById("modal-body");
    const closeBtn = document.querySelector(".close");

    const projectDetails = {
        "route-optimization": {
            title: "Route Optimization Algorithm",
            date: "01/2022",
            description: `
                <p>Designed and implemented a route optimization algorithm using C++ to minimize travel time and fuel consumption for delivery vehicles. Utilized graph theory and dynamic programming techniques to solve the traveling salesman problem efficiently. Conducted experiments to evaluate the performance of the algorithm and compared it with existing solutions.</p>
            `
        },
        "cloud-native": {
            title: "Cloud-Native Data Processing Pipeline for Real-Time Analytics",
            date: "08/2021",
            description: `
                <p>Tools & Technologies Used: Git, Perforce, Jenkins, AWS (Amazon Web Services), Apache Kafka, Apache Spark, MongoDB.</p>
                <p>Developed and deployed on AWS. Achieved 20% speed boost and 25% cost reduction.</p>
            `
        },
        "ai-pest-detection": {
            title: "Artificial Intelligence Based Detection of Pest Infected Crop and Leaf",
            date: "Oct 2021 - May 2022",
            description: `
                <p>This project is mainly focused on using artificial intelligence (AI) techniques to detect pest infected crops and leaves. This can involve using image recognition algorithms to analyze images of crops and leaves, and identifying signs of pest infestation such as discoloration, holes, or other abnormalities. The goal of the project is to improve the efficiency and accuracy of pest detection in agriculture, which can help farmers take steps to protect their crops and prevent crop loss. Depending on the specific implementation, the project may involve using machine learning techniques to train models on large datasets of images, and then using those models to classify new images in real-time.</p>
            `
        },
        "banfield": {
            title: "Strengthening Cybersecurity for Banfield Hospitals",
            date: "Oct 2022 - Jul 2023",
            description: `
                <p>As a Consultant in Cyber Security at L&T Infotech, I played a pivotal role in enhancing the cybersecurity posture for the Banfield Hospitals project. This US-based hospital chain, with a global presence, required robust security measures to safeguard sensitive healthcare information and maintain the integrity of its operations.</p>
                <p>Responsibilities:</p>
                <ul>
                    <li>Developed and implemented incident response plans and procedures to ensure rapid responses to security threats.</li>
                    <li>Analyzed security incidents, identified root causes, and implemented corrective actions to enhance system security.</li>
                    <li>Collaborated with cross-functional teams to minimize threats' impact on operations and restore normalcy.</li>
                    <li>Applied security best practices to protect critical systems.</li>
                </ul>
            `
        },
        "internship": {
            title: "Backend Infrastructure Enhancement",
            date: "May 2021 - Aug 2021",
            description: `
                <p>During my internship at Tech Innovative, I contributed to enhancing the backend infrastructure, which resulted in a 20% efficiency boost. Additionally, I strengthened security, reducing risks by 15%, and collaborated on API design, boosting response speed by 25%.</p>
            `
        }
    };

    document.querySelectorAll(".project-link").forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            const project = event.target.getAttribute("data-project");
            if (projectDetails[project]) {
                const { title, date, description } = projectDetails[project];
                modalContent.innerHTML = `<h2>${title}</h2><p>${date}</p>${description}`;
                modal.style.display = "block";
            }
        });
    });

    closeBtn.onclick = function() {
        modal.style.display = "none";
    };

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };

    // EmailJS Integration
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        emailjs.sendForm('service_c854r67', 'template_mgpzvsa', this)
            .then(function() {
                alert('Message sent successfully!');
            }, function(error) {
                alert('Failed to send the message. Please try again.');
            });
    });
});
