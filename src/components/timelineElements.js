import titanLogo from '../assets/titan_logo.png';
import agwiseLogo from '../assets/agwise_logo.png';
import ucfLogo from '../assets/ucf_logo.jpeg';

let timelineElements = [
  {
    id: 1,
    title: "AgWise",
    location: "Tampa, USA",
    position: "Founding Engineer | Full-Time",
    description: `<ul>
<li>Took over full product and engineering ownership within 6 months, leading architecture, delivery, and roadmap across 4 AgTech products – AgIQ, FoliarWise, CattleWise, and HaneyAI – serving 5K+ precision-ag users.</li>
<li>Contributed across the full stack – designed database schemas, planned API contracts, and implemented backend endpoints in Express JS and FastAPI, enabling seamless data flow and reducing API latency 30 %.</li>
<li>Built and launched FoliarWise (web + mobile) with AWS Step Functions + Lambda-based lab automation, processing 10K+ test records/week and removing 100% of manual operations.</li>
<li>Developed CattleWise, a commodity-hedging tool for 500+ farmers/ranchers, and Haney AI, an OpenAI-powered agronomy chatbot reducing agronomist support load 40% used by 1000+ farmers.</li>
<li>Unified auth, billing, and data models into a shared account platform (Supabase + Stripe + Next.js App Router), eliminating duplicate codebases and cutting integration effort 60%.</li>
<li>Scaled engineering culture – managed 3 offshore engineers through JIRA-driven sprints and roadmaps. Improved delivery predictability and raised test coverage from 0 → 25 % with Playwright E2E standards.</li>
<li>Modernized frontend infrastructure – migrated from AWS EC2 to Vercel, integrated automated build previews, analytics, and performance tracing, improving deploy reliability 45 % and enabling insight-driven iteration.</li>
</ul>`,
    date: "March 2024 - Present",
    icon: "work",
    techStack: ["React", "Next.js", "AWS", "TypeScript", "Express JS", "FastAPI", "Supabase", "Stripe", "Playwright", "Vercel"],
    logo: agwiseLogo
  },
  {
    id: 2,
    title: "University of Central Florida",
    location: "Orlando, FL, USA",
    position: "Web Developer | (Part-Time)",
    description: `<ul>
<li>Architected a forensic-tools portal on the UCF site, serving 1M records to 300+ institutions.</li>
<li>Built a data-discovery UI employing fuzzy search, server-side pagination, and SWR caching, reducing query latency by 50% and boosted dataset views +22 % via A/B testing.</li>
<li>Partnered with UX to ship a Tailwind + Figma design-token system; delivered pixel-perfect responsive layouts and achieved WCAG 2.1 AA compliance.</li>
</ul>`,
    date: "Aug 2023 - March 2024",
    icon: "work",
    techStack: ["React", "TailwindCSS", "SWR", "Figma"],
    logo: ucfLogo
  },
  {
    id: 3,
    title: "Titan Company Ltd",
    location: "India",
    position: "Software Engineer - Frontend | Full-Time",
    description: `<ul>
<li>Built companion web interfaces for smartwatch health data visualization and sync used by 200K+ users.</li>
<li>Developed modular UI components for reuse across multiple watch models, accelerating new product rollouts by 30%.</li>
<li>Worked with firmware and backend teams to visualize sensor data (heart rate, sleep, steps).</li>
<li>Boosted site performance via code splitting, lazy loading, and compression, improving LCP by 40% and reducing time-to-interactive to <2s on average.</li>
<li>Achieved 98+ Lighthouse and WCAG AA scores on marketing site driving a 30% lift in organic traffic MoM.</li>
<li>Led design QA, visual regression testing using Chromatic for 20+ components, ensured parity between Figma and production UI.</li>
<li>Established a testing pipeline for unit, integration, and E2E tests, achieved 80% coverage and reduced production bugs.</li>
</ul>`,
    date: "Jan 2022 - August 2022",
    icon: "work",
    techStack: ["React", "Angular", "TailwindCSS", "Chromatic", "Cypress", "Lighthouse"],
    logo: titanLogo
  }
];

export default timelineElements;