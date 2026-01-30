import { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import { Home } from '@/app/components/Home';
import { About } from '@/app/components/About';
import { Projects } from '@/app/components/Projects';
import { Contact } from '@/app/components/Contact';
import { Navigation } from '@/app/components/Navigation';
import { ProjectDetail } from '@/app/components/ProjectDetail';
import { PageTransition } from '@/app/components/PageTransition';

// --- IMPORTS (All images must be imported here to work on GitHub Pages) ---

// PlanWise Assets
import planWiseSupabase from '../assets/369c157ddb323e2e2f559ba0835e672f76d84c5c.png';
import planWiseBolt from '../assets/c84148390bf52d0cfab52024ae0317ec2925bd94.png';
import pythonIcon from '../assets/d434f57587bc5db10671cc4fd5de71a9b6512455.png';
import reactIcon from '../assets/866b2bb0d815e015d62c6f372c869abe06b1b33c.png';
import planWisePreview from '../assets/2ee6aa0a8881c08b2687a6a807522af7426be3e4.png';

// PomoTime Assets
import tsIcon from '../assets/5c8cd8082fc863b5c16f485b27bafeeac681c54a.png';
import pomoPreview from '../assets/1524cd9fa5bebf0365746caced0bd3e3ee47e890.png';

// Student Manager Assets
import javaIcon from '../assets/f05e692f410dd50d885e94060e10923fbe744ed9.png';
import mysqlIcon from '../assets/6701a649c6e7634c2632d26ab2f29d709a919248.png';
import studentPreview from '../assets/fd5b37658e61da4a2410365058567365fa884c3f.png';

// Ouroboros Assets
import geminiIcon from '../assets/63ab5154e3f6ccf09ca30971d3475493d7ef4a1f.png';
import spoonosIcon from '../assets/0aa0820a07f48698d9754f42eabac3bd013844db.png';
import ouroborosPreview from '../assets/926e03d10b577d1b9ff84f9264eab8206f8f5a08.png';


export type Page = 'home' | 'about' | 'projects' | 'contact';
export type ProjectPage = 'planwise' | 'pomotime' | 'studentmanager' | 'ouroboros';

// Project data
const projectData = {
  planwise: {
    name: 'PlanWise',
    description: 'A scheduling web-app for making plans with groups, integrates with Google Calendar and generates heatmaps of everyone\'s availabilities (v2)',
    stack: [
      { name: 'Supabase', image: planWiseSupabase },
      { name: 'Bolt', image: planWiseBolt },
      { name: 'Python', image: pythonIcon },
      { name: 'React', image: reactIcon }
    ],
    githubUrl: 'https://github.com/pedroM720/scheduler_app',
    previewImage: planWisePreview
  },
  pomotime: {
    name: 'PomoTime',
    description: 'For aesthetic and efficient studying. A beautiful Pomodoro timer application designed to enhance productivity and focus during study sessions.',
    stack: [
      { name: 'React', image: reactIcon },
      { name: 'TypeScript', image: tsIcon },
    ],
    githubUrl: 'https://github.com/pedroM720/PomoApp',
    previewImage: pomoPreview
  },
  studentmanager: {
    name: 'Student Manager',
    description: 'Classroom tool for educators. A comprehensive platform for managing student information, assignments, and classroom activities efficiently.',
    stack: [
      { name: 'React', image: reactIcon },
      { name: 'Java', image: javaIcon },
      { name: 'MySQL', image: mysqlIcon }
    ],
    githubUrl: 'https://github.com/pedroM720/Full-Stack-Student-Database-Project',
    previewImage: studentPreview
  },
  ouroboros: {
    name: 'Ouroboros',
    description: 'Self Adapting Agentic framework that generates tools to help it complete tasks and save compute while beating GPT5 on certain benchmarks',
    stack: [
      { name: 'Gemini', image: geminiIcon },
      { name: 'Spoonos', image: spoonosIcon },
      { name: 'Spoonos (React)', image: reactIcon }, // Note: You used the React icon hash here in your original code
      { name: 'Python', image: pythonIcon }
    ],
    githubUrl: 'https://github.com/pedroM720/ouroboros',
    previewImage: ouroborosPreview
  }
};

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [currentProject, setCurrentProject] = useState<ProjectPage | null>(null);

  const handleNavigate = (page: Page) => {
    setCurrentPage(page);
    setCurrentProject(null);
  };

  const handleProjectClick = (project: ProjectPage) => {
    setCurrentProject(project);
  };

  const handleBackToProjects = () => {
    setCurrentProject(null);
    setCurrentPage('projects');
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-x-hidden">
      {/* Navigation - Always visible */}
      <Navigation currentPage={currentPage} onNavigate={handleNavigate} />
      
      {/* Page Content with Transitions */}
      <main className="relative">
        <AnimatePresence mode="wait">
          {currentProject ? (
            <PageTransition key={`project-${currentProject}`}>
              <ProjectDetail 
                {...projectData[currentProject]} 
                onBack={handleBackToProjects}
              />
            </PageTransition>
          ) : (
            <>
              {currentPage === 'home' && (
                <PageTransition key="home">
                  <Home onNavigate={handleNavigate} />
                </PageTransition>
              )}
              {currentPage === 'about' && (
                <PageTransition key="about">
                  <About />
                </PageTransition>
              )}
              {currentPage === 'projects' && (
                <PageTransition key="projects">
                  <Projects onProjectClick={handleProjectClick} />
                </PageTransition>
              )}
              {currentPage === 'contact' && (
                <PageTransition key="contact">
                  <Contact />
                </PageTransition>
              )}
            </>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}