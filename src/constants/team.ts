export interface TeamMember {
  name: string;
  role: string;
  bio?: string;
}

export interface TeamGroup {
  title: string;
  members: TeamMember[];
}

export const TEAM_GROUPS: TeamGroup[] = [
  {
    title: 'Promoters',
    members: [
      {
        name: 'Prof. (Dr.) Mukti Kanta Mishra',
        role: 'Founder & President, Centurion University of Technology and Management',
        bio: "Recognized as one of India's foremost education innovators and social entrepreneurs, Prof. Mishra pioneered a nationally and internationally cited model of skill-integrated higher education. He established Centurion University — the first private, multi-sector, multi-campus state university in Odisha through an Act of Parliament — in 2010. With two Master's degrees from India, followed by an MBA and PhD from Victoria University, Australia, he spent 15 years in Fortune 500 companies before transitioning to education, repositioning the university as a living ecosystem integrating education, skills, industry, enterprise and on-campus jobs. Deakin University, Australia, conferred upon him an Honorary Doctorate in 2024.",
      },
      {
        name: 'Prof. (Dr.) D.N. Rao',
        role: 'Vice-President, CUTM Andhra Pradesh · Co-Founder, Centurion Group',
        bio: "Prof. D. Narasimha Rao came to Odisha in 1989 from IIM Kolkata as a Young Professional to work in the drought-prone Kalahandi district. He has since worked extensively across Odisha with government, NGOs like Gram Vikas, and institutions like XIM Bhubaneswar. He co-founded the Centurion Group of Institutes with Prof. Mukti Kanta Mishra in 2005, and his expertise spans access to energy, water-energy nexus, energy efficiency and non-grid solar solutions for rural communities — including advisory work for the Indo-Canadian Water Facility, DFID, USAID and the World Bank.",
      },
    ],
  },
  {
    title: 'Directors',
    members: [
      {
        name: 'Prof. (Dr.) Supriya Pattanayak',
        role: 'Vice-Chancellor, Centurion University of Technology and Management',
        bio: 'Prof. Pattanayak holds qualifications from the Tata Institute of Social Sciences, the National Institute of Mental Health and Neuro Sciences, and a PhD from RMIT University, Australia. With 25+ years across the development sector and academia, she serves as Vice-Chancellor at CUTM while holding the position of Industry Liaison with RMIT University, Melbourne, and Research Fellow at St Petersburg State University, Russia. Under her leadership, CUTM provides 120 skill courses and 45 domain specializations across more than 50 industry-sponsored labs.',
      },
      {
        name: 'Mr. Babu Shankar',
        role: 'Managing Director, Gram Tarang Technologies Pvt. Ltd.',
        bio: "An engineering and management graduate from IIM Calcutta, Babu Shankar presently manages GramTarang Technologies, a social outreach start-up incubated within Centurion University. His business consulting background spans automobile dealerships, telecom, logistics and education. Operating from the company's registered office in Visakhapatnam, he leads GT Tech's operations across product design & development, Centres of Excellence for student skilling, and value-added reseller solutions.",
      },
      {
        name: 'Venkat Shivaanand Kumar',
        role: 'Director',
        bio: 'Holds a B.Com degree from Osmania University and a management degree from the Xavier Institute of Management, Bhubaneswar. Two years with the Agribusiness Group at ICICI Bank and 15 months with Intellecap preceded a microfinance consultancy and NBFC, Gram Tarang Financial Services Pvt. Ltd., founded in 2009. His expertise spans retail banking, ratings, microfinance institution audits, business planning, financial modeling and investment banking.',
      },
    ],
  },
  {
    title: 'Development & Implementation Team',
    members: [
      {
        name: 'Mr. N Laxmidhar Reddy',
        role: 'Design Engineer, Centurion University of Technology and Management',
        bio: 'Specializes in product design and engineering project development, proficient in CATIA V5, 3DEXPERIENCE and SolidWorks. His experience includes multidisciplinary projects such as EV Rickshaws, the Geodesic Dome and Trellis Systems, and he holds certifications in CATIA V5, 3DEXPERIENCE Professional Mechanical Designer and SolidWorks Professional CAD.',
      },
      {
        name: 'Dr. Mukundjee Pandey',
        role: 'Associate Professor, Mechanical Engineering, Centurion University',
        bio: 'An Associate Professor at Centurion University, Bhubaneswar, with expertise in Thermal Science, Renewable Energy, CFD and FEA. He has published over 30 SCI/Scopus-indexed papers, authored six book chapters, holds ten patents, supervises six PhD scholars, and leads industry consultancy and funded research in renewable energy — proficient in Ansys, SIMULIA, DWSIM and Star-CCM+.',
      },
      {
        name: 'Prof. Sadat Ali',
        role: 'Dean, School of Vocational Training, Centurion University',
        bio: 'A B.Tech and IIT Kharagpur M.Tech graduate, faculty of the Mechanical Department at Centurion University. As one of the first employees of Gram Tarang, he set up training operations at the Paralakhemundi campus and now leads curriculum development, pedagogy and training-of-trainers for technical trades, alongside the Mini Tool Room project in partnership with the Government of Odisha.',
      },
      {
        name: 'Dr. Ashish Ranjan Dash',
        role: 'Director–CIQA & CEO, Smart Infrastructure Research Centre, Centurion University',
        bio: 'Leads the Vanilla Automation Project, integrating IoT, AI and precision agriculture technologies to develop climate-resilient, smart cultivation systems for sustainable vanilla production.',
      },
      {
        name: 'Nilanjan Bhattacharya',
        role: 'Development & Implementation Team',
      },
      {
        name: 'Sudheer Choudhary',
        role: 'Assistant Professor, Civil Engineering, Centurion University (Andhra Pradesh)',
        bio: 'A VMRDA Licensed Structural Engineer and PhD scholar specializing in structural engineering, finite element analysis, soil-structure interaction, transmission line tower design and sustainable infrastructure. His research integrates advanced computational methods, artificial intelligence and innovative construction technologies, backed by numerous publications, books and patents.',
      },
      {
        name: 'Vikash Meruva',
        role: 'Development & Implementation Team',
      },
    ],
  },
];

/** Flat, homepage-preview slice — the three Directors. */
export const TEAM_PREVIEW = TEAM_GROUPS.find((g) => g.title === 'Directors')!.members.map(
  (m) => ({
    name: m.name,
    role: 'Director',
    summary: m.bio ?? m.role,
  }),
);
