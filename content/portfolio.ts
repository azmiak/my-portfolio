import type { Portfolio } from "./types";

/*
  The only file you need to edit to change what the site says.

  Every value in [SQUARE BRACKETS] is a placeholder. Replace it with your own text.
  Rules the site follows, so you know what to expect:
  - A list set to [] hides its whole section and its navigation entry.
  - Optional fields (demoUrl, repoUrl, url, year, location, image, availability)
    render only when you fill them in. Delete the line to hide it.
  - Add only facts you can back up. The site shows nothing you do not write here.
*/

export const portfolio: Portfolio = {
  site: {
    title: "Azmi A.K | Portfolio",
    description: "Azmi Abdurrahman Kautsar | Portfolio",
    // url: "https://your-domain.example",
  },

  person: {
    name: "Azmi A.K",
    role: "Computer Engineering Graduate",
    headline: "I Specialize in IoT and Embedded Systems and also Web Development",
    availability: "Open to work on freelance projects and full-time positions",
    photo: {
      src: "/images/IMG202607161720553.jpg",
      alt: "Portrait of Azmi Abdurrahman Kautsar",
      width: 480,
      height: 600,
    },
  },

  about: {
    paragraphs: [
      "Computer Engineering graduate with hands-on experience in embedded systems, IoT, and web development. Eager to apply my hardware-software integration skills to build connected devices and robust web applications.",
    ],
    facts: [
      { label: "Based in", value: "Cimahi, Indonesia" },
      { label: "Languages", value: "Indonesian, English" },
    ],
  },

  education: [
    {
      school: "Telkom University",
      degree: "Bachelor of Engineering in Computer Engineering",
      period: "2022 to 2026",
      location: "Bandung, Indonesia",
      details: ["Relevant Coursework: Data Structures and Algorithms, Computer Networks, Embedded Systems, IoT Development, Web Development, Deep Learning, Artificial Intelligence"],
    },
  ],

  skills: [
    {
      group: "Web Development",
      items: ["HTML", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS", "SQL"],
    },
    {
      group: "Embedded Systems & IoT",
      items: ["Arduino", "STM32", "ESP32", "C/C++", "I2C", "SPI", "UART", "MQTT", "HTTP"],
    },
    {
      group: "Tools",
      items: ["Git", "GitHub", "Docker", "VS Code", "Arduino IDE", "PlatformIO", "Fritzing"],
    },
  ],

  projects: [
    {
      title: "Sistem Monitoring Kegiatan Santri di SMP MBS A.R. Fachruddin Kota Bekasi",
      summary: "Hardware Designs for taking attendance and transactions of students in the school using RFID and ESP32, connected to a web-based and mobile application for monitoring student activities.",
      tech: ["Hardware Development", "Embedded Systems", "ESP32", "RFID", "IoT"],
      year: "2026",
      // demoUrl: "https://your-live-demo.example",
      repoUrl: "https://github.com/azmiak/MBS-A.R.-Fachruddin",
    },
    {
      title: "Library Information System",
      summary: "Information system for library management, including book cataloging and borrowing functionalities.",
      tech: ["Web Development", "Database Management", "SQL", "PHP", "HTML", "CSS"],
      year: "2024",
      repoUrl: "https://github.com/azmiak/sistem-informasi-perpustakaan",
    },
    {
      title: "Hands-On Machine Learning with Scikit-Learn, Keras, and TensorFlow",
      summary: "Code examples and summaries for each chapter of the book Hands-On Machine Learning with Scikit-Learn, Keras, and TensorFlow.",
      tech: ["Machine Learning", "Deep Learning", "Python"],
      year: "2025",
      repoUrl: "https://github.com/azmiak/Hands-on-Machine-Learning-with-Scikit-Learn-Keras-TensorFlow",
    },
  ],

  experience: [
    {
      role: "Internship in System Engineering Division",
      organization: "AVS Simulator",
      period: "2025",
      points: ["Integration of I2C angle sensor to Modbus RTU protocol for data acquisition and monitoring using Arduino Nano.", "Designing the circuit for inter-protocol sensor integration."],
    },
    {
      role: "Practicum Assistant",
      organization: "Robotics and Embedded System Technology Laboratory, Telkom University",
      period: "2025 to 2026",
      points: ["Developing hands-on laboratory sessions for Digital Engineering and Microprocessors and Interfacing course practicals, designed for second- and third-year students.", "Organizing study groups on the topics of Embedded Systems and the Internet of Things"],
    },
  ],

  certificates: [
    {
      title: "HTML Essentials",
      issuer: "Cisco Networking Academy",
      year: "2026",
      // url: "https://link-to-your-credential.example",
    },
    {
      title: "CSS Essentials",
      issuer: "Cisco Networking Academy",
      year: "2026",
      // url: "https://link-to-your-credential.example",
    },
    {
      title: "AWS Cloud Practitioner Essentials",
      issuer: "AWS Academy",
      year: "2026",
      // url: "https://link-to-your-credential.example",
    },
    {
      title: "AWS Technical Essentials",
      issuer: "AWS Academy",
      year: "2026",
      // url: "https://link-to-your-credential.example",
    },
    {
      title: "Data Analytics Essentials",
      issuer: "Cisco Networking Academy",
      year: "2026",
      // url: "https://link-to-your-credential.example",
    },
    {
      title: "Introduction to Cybersecurity",
      issuer: "Cisco Networking Academy",
      year: "2026",
      // url: "https://link-to-your-credential.example",
    },
    {
      title: "Introduction to Data Science",
      issuer: "Cisco Networking Academy",
      year: "2026",
      // url: "https://link-to-your-credential.example",
    },
  ],

  contact: {
    email: "azmicod04@gmail.com",
    note: "Got a question or an opportunity? Contact +62 821-1926-6766, or email me directly at",
    socials: [
      { label: "GitHub", href: "https://github.com/azmiak" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/azmi-abdurrahman-kautsar-9562a62a2" },
    ],
  },
};
