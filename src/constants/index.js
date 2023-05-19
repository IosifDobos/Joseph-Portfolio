import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    threejs,
} from "../assets";

const services = [
    {
        title: "Web Developer",
        icon: web,
    },
    {
        title: "React Native Developer",
        icon: mobile,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },
    {
        title: "Web Designer",
        icon: creator,
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Redux Toolkit",
        icon: redux,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "figma",
        icon: figma,
    },
    {
        name: "docker",
        icon: docker,
    },
];

const experiences = [
    {
        title: "Freelancer",
        company_name: "N/A",
        icon: starbucks,
        iconBg: "#383E56",
        date: "Nov 2020 - Present",
        points: [
            "Working closely with clients to discuss the scope of various projects and understanding their business requirements",
            "Designing, implementing and maintaining scalable web applications for various clients",
        ],
    },
    {
        title: "Software Developer Intern",
        company_name: "Revenue Commissioners",
        icon: tesla,
        iconBg: "#E6DEDD",
        date: "Feb 2019 - Aug 2019",
        points: [
            "Involved in multiple projects where AngularJS, JavaScript and jQuery programming language was used to developed the frontend application, Java Spring boot to manage the backend and the applications was tested and deployed using Jenkins",
            "Engaged in all phases of the software development lifecycle which include gathering business system requirements",
            "Worked in AGILE methodology and participated in weekly meeting discussing the stage of the projects and planning future work",
            "Testing and debug applications to meet business needs and interacting with the third party partners in the achievement of business initiatives",
        ],
    },
    {
        title: "Professional Football Player",
        company_name: "FC Bohemians, FC Real Transilvania",
        iconBg: "#383E56",
        date: "Jan 2011 - Dec 2013 | Jan 2015 - Dec 2020",
        points: [
            "Taking part in many competitions as part of the club, and training hard to improve my skills and ability.",
            "Adapted to the high pressure, extremely competitive environment, and collaborated with team members to achieve team goals.",
        ],
    },
    {
        title: "Mentor",
        company_name: "Summer Together",
        icon: meta,
        iconBg: "#E6DEDD",
        date: "Jan 2009 - Dec 2011",
        points: [
            "Project’s goal was to provide favourable conditions for children to learn more and to behave better during summer holiday, included a program of education, culture and arts, set up especially for children with lower financial status.",
            "The main responsibility looking after group of children between six and fifteen years of age, researching for a variety of children games and other activities.",
            "During mentoring time, helped children to communicate with each other and discover the professional universe they dream of.",
        ],
    },
];

const testimonials = [
    {
        testimonial:
            "That Iosif Dobos must be one of the most brilliant developers I've ever met! It is amazing that nobody has hired him yet.Hey you, you should hire this guy, he may be fresh out of University and have zero on the job experience but I am confident that he will be one of your best developers in no time!",
        name: "Sara Lee",
        designation: "CFO",
        company: "Acme Co",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        testimonial:
            "I've never met a web developer who truly cares about their clients' success like Joseph does.",
        name: "Chris Brown",
        designation: "COO",
        company: "DEF Corp",
        // image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial:
            "After Joseph optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Lisa Wang",
        designation: "CTO",
        company: "456 Enterprises",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
];



export { services, technologies, experiences, testimonials };