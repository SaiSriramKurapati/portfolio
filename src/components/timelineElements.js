import titanLogo from '../assets/titan_logo.png';
import marlabsLogo from '../assets/marlabs_logo.png';
import agwiseLogo from '../assets/agwise_logo.png';
import ucfLogo from '../assets/ucf_logo.jpeg';

let timelineElements = [
  {
    id: 1,
    title: "AgWise",
    location: "Software Engineer - Frontend",
    description: `<ul>
<li>Led frontend development for precision agriculture tools used by 5k+ users monthly, spanning scientists, agronomists, and growers.</li>
<li>Built and maintained a 10+ component reusable design system in Storybook, reducing frontend bugs by 40% and speeding delivery across 3 internal apps.</li>
<li>Developed a lab recommendation pipeline using AWS Step Functions + Lambda, automating 100% of manual ops and processing 10k+ records/week.</li>
<li>Built a support chatbot integrated with OpenAI + internal APIs, resolving 80% of tier-1 tickets and cutting ticket volume by 35%.</li>
<li>Migrated REST API consumption to GraphQL across 30+ components, reducing payload by 30% and cutting page load time by 20%.</li>
<li>Implemented WebSockets using AWS API Gateway for real-time crop data updates, reducing dashboard refresh latency by 50%.</li>
<li>Designed interactive field maps using Mapbox, enabling spatial insights and drawing tools for 200+ farm fields.</li>
<li>Built Role-Based Access Control (RBAC) supporting 5 user types across multiple teams, cutting onboarding time by 20%.</li>
<li>Enhanced CI/CD pipelines using Docker, AWS CodePipeline to support zero-downtime deployments and rollback safety.</li>
<li>Wrote 70+ Jest/Cypress tests, achieving 85% frontend test coverage across critical workflows.</li>
</ul>`,
    date: "March 2024 - Present",
    icon: "work",
    techStack: ["React", "Next.js", "GraphQL", "AWS", "TypeScript", "Jest", "Cypress", "Storybook", "Mapbox", "WebSockets"],
    logo: agwiseLogo
  },
  {
    id: 2,
    title: "University of Central Florida",
    location: "Research Assistant | Web Developer",
    description: `<ul>
<li>Sole frontend owner for a grant-funded forensic research portal used by 300+ academic institutions.</li>
<li>Integrated 20+ REST APIs with advanced filters and pagination to allow real-time querying of 1M+ research records.</li>
<li>Wrote 30+ unit tests and integration tests using Jest and Cypress to ensure accuracy across research workflows.</li>
</ul>`,
    date: "July 2023 - March 2024",
    icon: "work",
    techStack: ["React", "Material UI", "Redux", "REST APIs", "Jest", "Cypress"],
    logo: ucfLogo
  },
  {
    id: 3,
    title: "Titan Company Ltd.",
    location: "Software Engineer - Frontend",
    description: `<ul>
<li>Migrated a 40k+ LOC AngularJS app to React, reducing tech debt and improving load speed by 60%.</li>
<li>Developed mobile-first UI revamp using React + Tailwind, increasing mobile session time by 22% and reducing bounce rate by 15%.</li>
<li>Built an internal campaign tracker integrating Google Ads + Facebook Pixel, improving cross-channel ad analysis by 15%.</li>
<li>Fixed 50+ SEO and a11y issues using tools like Lighthouse and Axe, increasing WCAG 2.1 AA compliance and driving 40% lift in organic reach.</li>
<li>Added Cypress end-to-end tests for 3 core flows, reducing regression errors by 30%.</li>
</ul>`,
    date: "January 2021 - August 2022",
    icon: "work",
    techStack: ["React", "AngularJS", "Storybook", "Jenkins", "AWS", "Tailwind", "Cypress", "Lighthouse"],
    logo: titanLogo
  },
  {
    id: 4,
    title: "Marlabs",
    location: "SDE Intern",
    description: `<ul>
<li>Migrated company website from WordPress to a custom-built React app, achieving Lighthouse score of 95+ across performance, SEO, and accessibility.</li>
<li>Integrated form tracking and conversion analytics using Google Tag Manager, enabling marketing attribution and improving lead tracking by 25%.</li>
</ul>`,
    date: "January 2020 - June 2020",
    icon: "work",
    techStack: ["React", "WordPress", "JavaScript", "Google Tag Manager"],
    logo: marlabsLogo
  },
];

export default timelineElements;