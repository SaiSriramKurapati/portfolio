import titanLogo from '../assets/titan_logo.png';
import marlabsLogo from '../assets/marlabs_logo.png';
import agwiseLogo from '../assets/agwise_logo.png';
import ucfLogo from '../assets/ucf_logo.jpeg';

let timelineElements = [
  {
    id: 1,
      title: "AgWise",
      location: "Frontend Developer",
      description: `<ul>
<li>Leading end-to-end frontend development of a SAAS platform in a 3-developer team, focusing on building scalable and performant solutions.</li>
<li>Spearheaded the development of serverless applications and implemented GraphQL, resulting in 40% faster data processing and 30% improved API efficiency.</li>
<li>Modernized tech stack with Next.js and implemented comprehensive testing strategies using Jest and Cypress.</li>
</ul>`,
      date: "March 1, 2024 - Present",
      icon: "work",
      techStack: ["React", "Next.js", "GraphQL", "AWS", "TypeScript", "Jest", "Cypress"],
      logo: agwiseLogo
  },
  {
    id: 2,
      title: "Computer Science Department at UCF",
      location: "Graduate Research Assistant",
      description: `<ul>
<li>Led frontend development for the Computer Forensic Department's research platform using React and Material UI.</li>
<li>Achieved 75% performance improvement through advanced optimization techniques and state management.</li>
</ul>`,
      date: "July 1, 2023 - March 1, 2024",
      icon: "work",
      techStack: ["React", "Material UI", "Redux", "REST APIs"],
      logo: ucfLogo
  },
  {
    id: 3,
    title: "Titan Company Ltd.",
    location: "Frontend Developer",
    description: `<ul>
<li>Developed and optimized high-traffic e-commerce platform serving thousands of concurrent users.</li>
<li>Led migration from AngularJS to React, reducing codebase size by 50% and improving development velocity.</li>
<li>Created a comprehensive component library and implemented accessibility standards (WCAG).</li>
</ul>`,
    date: "January 1, 2021 - August 1, 2022",
    icon: "work",
    techStack: ["React", "AngularJS", "Storybook", "Jenkins", "AWS"],
    logo: titanLogo
  },
    {
      id: 4,
        title: "Marlabs",
        location: "Software Developer Intern",
        description: `<ul>
<li>Successfully migrated a marketing website from WordPress to React, achieving a 95+ Lighthouse score.</li>
</ul>`,
        date: "January 1, 2020 - June 1, 2020",
        icon: "work",
        techStack: ["React", "WordPress", "JavaScript"],
        logo: marlabsLogo
    },
  ];
  
  export default timelineElements;