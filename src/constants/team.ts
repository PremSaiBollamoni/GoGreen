import ashishRanjanDash from '@/assets/team/ashish-ranjan-dash.jpeg';
import babuShankar from '@/assets/team/babu-shankar.png';
import dnRao from '@/assets/team/dn-rao.png';
import laxmidharReddy from '@/assets/team/laxmidhar-reddy.jpg';
import muktiKantaMishra from '@/assets/team/mukti-kanta-mishra.png';
import mukundjeePandey from '@/assets/team/mukundjee-pandey.jpeg';
import nilanjanBhattacharya from '@/assets/team/nilanjan-bhattacharya.jpeg';
import sadatAli from '@/assets/team/sadat-ali.png';
import sudheerChoudhary from '@/assets/team/sudheer-choudhary.jpeg';
import supriyaPattanayak from '@/assets/team/supriya-pattanayak.png';
import venkatShivaanandKumar from '@/assets/team/venkat-shivaanand-kumar.jpeg';

export interface TeamMember {
  name: string;
  role: string;
  bio?: string;
  photo?: string;
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
        photo: muktiKantaMishra,
        bio: "Recognized as one of India's foremost education innovators and social entrepreneurs, Prof. Mishra is pioneering a nationally and internationally cited model of skill-integrated higher education. He established Centurion University of Technology and Management — the first private, multi-sector, multi-campus state university in Odisha through an Act of Parliament — in 2010. With two Master's degrees from India in Analytical & Applied Economics and Public Administration, followed by an MBA and PhD from Victoria University, Australia, Prof. Mishra spent 15 years in Fortune 500 companies before transitioning to education. He repositioned the university not merely as a site of learning, but as a living ecosystem integrating education, skills, industry, enterprise and on-campus jobs through social enterprises, particularly serving youth from India's most disadvantaged geographies. In recognition of his exceptional contributions to education, skill development and social entrepreneurship — and for fostering India–Australia institutional partnerships — Deakin University, Australia, conferred upon him an Honorary Doctorate in 2024.",
      },
      {
        name: 'Prof. (Dr.) D.N. Rao',
        role: 'Vice-President, CUTM Andhra Pradesh · Co-Founder, Centurion Group',
        photo: dnRao,
        bio: "Prof. D. Narasimha Rao came to Odisha in 1989 from IIM Kolkata as a Young Professional to work in the drought-prone Kalahandi district, driven by a student's understanding of the district's dynamics during the critical child-selling episodes of that period. He has since worked extensively across Odisha with government, NGOs like Gram Vikas, and institutions like XIM Bhubaneswar. Prof. Rao co-founded the Centurion Group of Institutes with Prof. Mukti Kanta Mishra in 2005, taking over the Jagannath Institute for Technology and Management. His expertise spans access to energy, water-energy nexus, energy efficiency measures, demand-side management and non-grid solutions — particularly solar power for rural communities. He has extensive experience in monitoring and evaluation of development sector projects, serving as advisor to projects funded by the Indo-Canadian Water Facility, DFID, USAID and the World Bank, and consulting for mining companies and energy services companies. He is a core member of the GramTarang leadership team.",
      },
    ],
  },
  {
    title: 'Directors',
    members: [
      {
        name: 'Prof. (Dr.) Supriya Pattanayak',
        role: 'Vice-Chancellor, Centurion University of Technology and Management',
        photo: supriyaPattanayak,
        bio: "Prof. Pattanayak holds a distinguished academic background, with qualifications from the Tata Institute of Social Sciences (MA), Mumbai, the National Institute of Mental Health and Neuro Sciences (MPhil), Bangalore, and a PhD from RMIT University, Australia. She brings extensive experience in teaching, research and policy development, with a dedicated focus on gender and development issues and social work pedagogy across diverse settings. With 25+ years of experience in the development sector and academia, Prof. Pattanayak serves as Vice-Chancellor at CUTM while holding the position of Industry Liaison person with RMIT University, Melbourne, and Research Fellow at St Petersburg State University, Russia. She emphasizes learning through practical ways and has provided oversight of DFID programs in Odisha for over 15 years. Under her leadership, CUTM provides 120 skill courses and 45 domain specializations, with students practicing in more than 50 industry-sponsored labs to prepare for the workforce.",
      },
      {
        name: 'Mr. Babu Shankar',
        role: 'Managing Director, Gram Tarang Technologies Pvt. Ltd.',
        photo: babuShankar,
        bio: "An engineering and management graduate from IIM Calcutta, Babu Shankar presently manages GramTarang Technologies, a social outreach start-up incubated within Centurion University of Technology and Management. As one of the board directors of Gramtarang Technologies Private Limited, he serves alongside co-directors in steering the company's strategic initiatives. His business consulting background spans diverse sectors including automobile dealerships, telecom, logistics and education. Operating from the company's registered office in Visakhapatnam, Andhra Pradesh, he leads GT Tech's operations across multiple business pillars: product design & development, management of Centres of Excellence (CoE) for student skilling, and value-added reseller (VAR) solutions.",
      },
      {
        name: 'Venkat Shivaanand Kumar',
        role: 'Director',
        photo: venkatShivaanandKumar,
        bio: 'Holds a B.Com degree from Osmania University and a management degree from the Xavier Institute of Management, Bhubaneswar. Two years with the Agribusiness Group at ICICI Bank and 15 months with Intellecap, a development consulting company, preceded a microfinance consultancy and NBFC, Gram Tarang Financial Services Pvt. Ltd., founded in 2009, working extensively across Andhra Pradesh and Odisha. His expertise spans retail banking, ratings, microfinance institution loan portfolio audits, microfinance institution development, business planning, financial modeling and investment banking.',
      },
    ],
  },
  {
    title: 'Development & Implementation Team',
    members: [
      {
        name: 'Mr. N Laxmidhar Reddy',
        role: 'Design Engineer, Centurion University of Technology and Management',
        photo: laxmidharReddy,
        bio: 'Specializes in product design and engineering project development, proficient in CATIA V5, 3DEXPERIENCE and SolidWorks. His experience includes multidisciplinary projects such as EV Rickshaws, the Geodesic Dome and Trellis Systems, and he holds certifications in CATIA V5, 3DEXPERIENCE Professional Mechanical Designer and SolidWorks Professional CAD.',
      },
      {
        name: 'Dr. Mukundjee Pandey',
        role: 'Associate Professor, Mechanical Engineering, Centurion University',
        photo: mukundjeePandey,
        bio: 'An Associate Professor in the Mechanical Engineering Department at Centurion University of Technology & Management, Bhubaneswar, with expertise in Thermal Science, Renewable Energy, CFD and FEA. He has published over 30 SCI/Scopus-indexed papers, authored six book chapters, holds ten patents, supervises six PhD scholars, and leads industry consultancy and funded research in renewable energy — proficient in Ansys, SIMULIA, DWSIM and Star-CCM+.',
      },
      {
        name: 'Prof. Sadat Ali',
        role: 'Dean, School of Vocational Training, Centurion University',
        photo: sadatAli,
        bio: 'A B.Tech and IIT Kharagpur M.Tech graduate, faculty of the Mechanical Department at Centurion University and Dean, School of Vocational Training. As one of the first-ever employees of Gram Tarang, he was responsible for setting up training operations at the Paralakhemundi campus and now leads curriculum development, pedagogy and training-of-trainers for technical trades, alongside the Mini Tool Room project in partnership with the Government of Odisha.',
      },
      {
        name: 'Dr. Ashish Ranjan Dash',
        role: 'Director–CIQA & CEO, Smart Infrastructure Research Centre, Centurion University',
        photo: ashishRanjanDash,
        bio: 'A Professor, Director–CIQA, and CEO of the Smart Infrastructure Research Centre at Centurion University of Technology and Management. He leads the Vanilla Automation Project, integrating IoT, AI and precision agriculture technologies to develop climate-resilient, smart cultivation systems for sustainable vanilla production.',
      },
      {
        name: 'Nilanjan Bhattacharya',
        role: 'Development & Implementation Team',
        photo: nilanjanBhattacharya,
        bio: 'A procurement and strategic sourcing professional with over 13 years of experience across pharmaceuticals, manufacturing and corporate services. He specializes in supplier management, contract negotiation, cost optimization and process improvement, consistently delivering measurable business value through strategic procurement initiatives. Currently associated with Centurion University of Technology and Management, he actively builds industry–academia collaborations, strengthens corporate partnerships and enhances student placement opportunities.',
      },
      {
        name: 'Sudheer Choudhary',
        role: 'Assistant Professor, Civil Engineering, Centurion University (Andhra Pradesh)',
        photo: sudheerChoudhary,
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
    photo: m.photo,
  }),
);
