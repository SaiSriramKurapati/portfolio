import titanLogo from '../assets/titan_logo.png';
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
<li>Designed and developed the ILRC’s public-facing web portal enabling streamlined access to forensic tools, datasets, and educational resources for 300+ partner institutions.</li>
<li>Architected the <strong>Data Portal</strong> interface, implementing server-side pagination, faceted filters, and fuzzy search across 1M+ records; optimized query response time by 50% via SWR caching and debounced input handling</li>
<li>Elevated SEO, Lighthouse scores, and WCAG 2.1 accessibility compliance—achieving 98+ scores for key pages.</li>
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
  <li>Built web-based companion interfaces for smartwatch users to manage health data, sync devices, and view activity trends—used by 200K+ desktop users.</li>
  <li>Developed modular UI components for reuse across multiple watch models, accelerating new product rollouts by 30%.</li>
  <li>Improved SEO, Lighthouse scores, and accessibility (WCAG AA) for public-facing pages, boosting organic reach and discoverability.</li>
  <li>Worked with firmware and backend teams to visualize sensor data (heart rate, sleep, steps) using D3 and custom SVG dashboards.</li>
  <li>Optimized performance via code splitting, lazy loading, and asset compression—reducing page load times by 40%.</li>
  <li>Established a robust testing pipeline using Jest, React Testing Library, and Playwright, covering unit, integration, and end-to-end tests; improved coverage to 80% and reduced production bugs across major releases.</li>

</ul>`,
    date: "January 2021 - August 2022",
    icon: "work",
    techStack: ["React", "AngularJS", "Storybook", "Jenkins", "AWS", "Tailwind", "Cypress", "Lighthouse"],
    logo: titanLogo
  }
];

export default timelineElements;