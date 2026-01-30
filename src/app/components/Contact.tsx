import { Github, Linkedin } from 'lucide-react';

export function Contact() {
  return (
    <div className="min-h-screen py-20 px-4 pt-[100px]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Section - Socials */}
          <div className="flex flex-col gap-[57px] items-center">
            <h2 className="font-['Orbitron',sans-serif] text-[64px] text-center">
              Send a message
            </h2>
            
            <h3 className="font-['Exo_2',sans-serif] text-[40px] text-center">
              Socials
            </h3>

            {/* Social Links */}
            <div className="flex gap-[67px] items-center">
              <a 
                href="https://github.com/pedroM720" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block shrink-0 rounded-full p-6 border-[3px] border-white hover:bg-white/10 hover:scale-110 transition-all"
              >
                <Github className="w-[100px] h-[100px] text-white" strokeWidth={1.5} />
              </a>
              
              <a 
                href="https://www.linkedin.com/in/pedro7/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block shrink-0 rounded-full p-6 border-[3px] border-white hover:bg-white/10 hover:scale-110 transition-all"
              >
                <Linkedin className="w-[100px] h-[100px] text-white" strokeWidth={1.5} />
              </a>
            </div>

            {/* Divider */}
            <div className="w-full h-[2px] bg-white" />
          </div>

          {/* Right Section - Contact Form */}
          <div className="flex flex-col gap-[42px]">
            <div className="relative">
              <input
                type="email"
                placeholder="Email"
                className="w-full bg-transparent border-b-2 border-white py-4 font-['Exo_2',sans-serif] text-[32px] text-white placeholder-[#a4a4a4] outline-none focus:border-blue-400 transition-colors"
              />
            </div>

            <div className="relative">
              <textarea
                placeholder="Message"
                rows={6}
                className="w-full bg-transparent border-b-2 border-white py-4 font-['Exo_2',sans-serif] text-[32px] text-white placeholder-[#a4a4a4] outline-none focus:border-blue-400 transition-colors resize-none"
              />
            </div>

            <button className="self-start border border-white rounded-[15px] px-12 py-4 font-['Exo_2',sans-serif] text-[40px] text-white hover:bg-white/10 transition-colors">
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}