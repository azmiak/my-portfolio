export type NavLink = {
    label: string;
    href: string;
};

export type Project = {
    title: string;
    description: string;
    tags: string[];
    image: string;
    imageAlt: string;
    githubUrl: string;
};

export const site = {
    name: "Azmi A.K",
    role: "Computer Engineering Graduate",
    heroIntro:
        "I design and build websites and IoT applications from the first sketch to the deployed product.",
    bio: "Dedicated undergraduate student in Computer Engineering with a strong passion for embedded systems and Internet of Things (IoT) development and also Web Development. Eager to pursue a career as an embedded systems engineer, backed by hands-on experience in hardware-software integration and practical project work in connected device solutions.",
    description:
        "[SEO DESCRIPTION: one sentence, 160 characters or fewer, describing you and this portfolio.]",
    url: "http://localhost:3000",

    heroImage: "/images/hero.svg",
    photo: "/images/IMG202607161720553.jpg",

    education: {
        degree: "Bachelor of Computer Engineering",
        university: "Telkom University",
        graduationYear: "2026",
    },

    skills: [
        "HTML/CSS",
        "JavaScript",
        "TypeScript",
        "React",
        "Next.js",
        "Tailwind CSS",
        "C/C++",
        "Python",
        "Hardware Development",
        "IoT",
        "Embedded Systems",
    ],

    projects: [
        {
            title: "Sistem Monitoring Kegiatan Santri di SMP MBS A.R. Fachruddin Kota Bekasi",
            description:
                "Hardware Designs for taking attendance and transactions of students in the school using RFID and ESP32, connected to a web-based and mobile application for monitoring student activities.",
            tags: ["Hardware Development", "IoT", "Embedded Systems"],
            image: "/images/transaksi idle.jpeg",
            imageAlt: "Screenshot of Hardware Design",
            githubUrl: "https://github.com/azmiak/MBS-A.R.-Fachruddin",
        },
        {
            title: "Library Information System",
            description:
                "Information system for library management, including book cataloging and borrowing functionalities.",
            tags: ["Web Development", "Database", "User Interface"],
            image: "/images/Screenshot 2026-11-04 100526.png",
            imageAlt: "Screenshot of Library Information System",
            githubUrl: "https://github.com/your-username/project-2",
        },
        {
            title: "Hands-On Machine Learning with Scikit-Learn, Keras, and TensorFlow",
            description:
                "Code examples and summaries for each chapter of the book Hands-On Machine Learning with Scikit-Learn, Keras, and TensorFlow.",
            tags: ["Deep Learning", "Machine Learning", "Python"],
            image: "/images/Screenshot 2026-11-04 100927.png",
            imageAlt: "Screenshot of Hands-On Machine Learning",
            githubUrl: "https://github.com/azmiak/Hands-on-Machine-Learning-with-Scikit-Learn-Keras-TensorFlow",
        },
    ] satisfies Project[],

    contact: {
        email: "azmicod04@gmail.com",
        github: "https://github.com/azmiak",
        linkedin: "https://www.linkedin.com/in/azmi-abdurrahman-kautsar-9562a62a2/",
    },

    nav: [
        { label: "Home", href: "#home" },
        { label: "About", href: "#about" },
        { label: "Projects", href: "#projects" },
        { label: "Contact", href: "#contact" },
    ] satisfies NavLink[],
};