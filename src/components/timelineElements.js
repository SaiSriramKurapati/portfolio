import titanLogo from '../assets/titan_logo.png';
import agwiseLogo from '../assets/agwise_logo.png';
import ucfLogo from '../assets/ucf_logo.jpeg';

let timelineElements = [
  {
    id: 1,
    title: "AgWise",
    location: "Software Engineer - Frontend",
    description: `<ul>
<li>Re-architected legacy UI into a modular v2.0 frontend, halving feature release cycles supporting 5 k+ monthly precision-ag users.</li>
<li>Built a 10+ component Storybook design system, reducing frontend bugs by 40% and accelerating new feature delivery by 2x.</li>
<li>Migrated from REST API to GraphQL across 10+ components, reducing payload by 30% and cutting page load time by 20%.</li>
<li>Integrated Mapbox GL JS with WebSocket streaming to visualize 200 + farm fields in real time (<150 ms latency) and achieved sub-2 s LCP on 3G connections.</li>
<li>Improved (RBAC/ABAC) UI layer by building permission-config UIs reducing support queries on access issues by 40%.</li>
<li>Conducted 100 + pull-request reviews and introduced a GitHub Actions matrix gating every PR,cut CI failures by 45% and mentored 2 junior devs.</li>
<li>Built an OpenAI-powered support chatbot integrated with our KB, resolving 80% of tier-1 tickets and cutting volume by 35%.</li>
<li>Developed a lab recommendation pipeline using AWS Step Functions + Lambda, automating 100% of manual ops and processing 10k+ records/week.</li>
<li>Deployed PostHog analytics with feature flags, enabling weekly A/B releases and lifting key-workflow conversion +18 % through data-driven iteration.</li>
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
<li>Architected a forensic-tools portal on the UCF site, serving 1M records to 300+ institutions.</li>
<li>Built a data-discovery UI employing fuzzy search, server-side pagination, and SWR caching, reducing query latency by 50% and boosted dataset views +22 % via A/B testing.</li>
<li>Partnered with UX to ship a Tailwind + Figma design-token system; delivered pixel-perfect responsive layouts and achieved WCAG 2.1 AA compliance.</li>
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
<li>Built companion web interfaces for smartwatch health data visualization and sync used by 200K+ users.</li>
<li>Developed modular UI components for reuse across multiple watch models, accelerating new product rollouts by 30%.</li>
<li>Worked with firmware and backend teams to visualize sensor data (heart rate, sleep, steps).</li>
<li>Boosted site performance via code splitting, lazy loading, and compression, improving LCP by 40% and reducing time-to-interactive to <2s on average.</li>
<li>Achieved 98+ Lighthouse and WCAG AA scores on marketing site driving a 30% lift in organic traffic MoM.</li>
<li>Led design QA, visual regression testing using Chromatic for 20+ components, ensured parity between Figma and production UI.</li>
<li>Established a testing pipeline for unit, integration, and E2E tests, achieved 80% coverage and reduced production bugs.</li>

</ul>`,
    date: "January 2021 - August 2022",
    icon: "work",
    techStack: ["React", "AngularJS", "Storybook", "Jenkins", "AWS", "Tailwind", "Cypress", "Lighthouse"],
    logo: titanLogo
  }
];

export default timelineElements;