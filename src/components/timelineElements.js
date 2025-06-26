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
<li>Built and maintained a 10+ component reusable design system in Storybook, reducing frontend bugs by 40% and speeding delivery.</li>
<li>Migrated REST API consumption to GraphQL across 30+ components, reducing payload by 30% and cutting page load time by 20%.</li>
<li>Integrated Mapbox GL JS, implementing custom layers, drawing tools, and tooltips to enable viewing and editing of 200+ farm fields.</li>
<li>Replaced legacy ID-based permission logic with a robust RBAC + ABAC system, enabling multi-tier entity hierarchies and supporting both predefined and custom user roles; improved code maintainability and reduced access-related bugs by 30%.</li>
<li>Replaced frontend polling with WebSocket integration to stream live lab results and crop records; reduced stale data issues and improved dashboard responsiveness by 50%.</li>
<li>Built a support chatbot integrated with OpenAI + internal APIs, resolving 80% of tier-1 tickets and cutting ticket volume by 35%.</li>
<li>Developed a lab recommendation pipeline using AWS Step Functions + Lambda, automating 100% of manual ops and processing 10k+ records/week.</li>
<li>Enhanced CI/CD pipelines using Docker, AWS CodePipeline to support zero-downtime deployments and rollback safety.</li>
<li>Authored 50+ unit tests and 20+ end-to-end flows, achieving 85% test coverage across key user journeys.</li>
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
<li>Contributed to the frontend of a grant-funded forensic research portal serving 300+ academic institutions.</li>
<li>Built a performant search interface in React using TanStack Table, SWR, and server-side pagination to query over 1M research records with advanced filters and debounced search.</li>
<li>Collaborated on UI architecture, implemented modular components, and added 30+ unit and integration tests, achieving 85% coverage across critical data workflows.</li>
</ul>`,
    date: "August 2023 - March 2024",
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
    date: "August 2021 - August 2022",
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
    date: "May 2019 - July 2019",
    icon: "work",
    techStack: ["React", "WordPress", "JavaScript", "Google Tag Manager"],
    logo: marlabsLogo
  },
];

export default timelineElements;