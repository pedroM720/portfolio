import { useState, memo, FormEvent } from 'react';
import { Github, Linkedin, Mail, Copy, Check } from 'lucide-react';
import { motion, AnimatePresence } from "framer-motion";
import emailjs from '@emailjs/browser';

const EMAILJS_SERVICE_ID = 'service_sbgq2xe';
const EMAILJS_TEMPLATE_ID = 'template_q7m6bpi';
const EMAILJS_PUBLIC_KEY = 'MnW9n5sdpcspR3UOc';
const RECIPIENT_EMAIL = 'banditstoes@gmail.com';

type FormStatus = 'idle' | 'sending' | 'success' | 'error';

export const Contact = memo(() => {
  const containerVariants: any = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const [hoveredButton, setHoveredButton] = useState<string | null>(null);
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<FormStatus>('idle');
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(RECIPIENT_EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getGlowStyle = (btnId: string) => ({
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    filter: 'blur(16px)',
    transform: 'scale(1.2)',
    zIndex: 0,
    borderRadius: 'inherit',
    opacity: hoveredButton === btnId ? 1 : 0,
    transition: 'opacity 300ms ease-in-out'
  });

  const itemVariants: any = {
    hidden: { opacity: 0, x: -20, y: 30 },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.8, ease: [0.33, 1, 0.68, 1] }
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!email.trim() || !message.trim()) {
      setStatus('error');
      return;
    }

    setStatus('sending');

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_email: email,
          message: message,
          to_email: RECIPIENT_EMAIL,
        },
        EMAILJS_PUBLIC_KEY
      );

      setStatus('success');
      setEmail('');
      setMessage('');

      // Reset success message after 5 seconds
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      console.error('EmailJS error:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const statusConfig = {
    idle: { text: '', color: '' },
    sending: { text: 'Sending...', color: 'text-blue-400' },
    success: { text: 'Message sent! 🎉', color: 'text-green-400' },
    error: { text: 'Something went wrong. Please try again.', color: 'text-red-400' },
  };

  return (
    <div className="h-full py-12 px-4 relative overflow-y-auto flex flex-col items-center justify-start pt-[120px]">
      <motion.div
        className="max-w-6xl mx-auto w-full"
        variants={containerVariants}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Section - Socials */}
          <div className="flex flex-col gap-[57px] items-center">
            <motion.h2
              className="font-['Orbitron',sans-serif] text-[clamp(32px,5vw,64px)] text-center text-white"
              variants={itemVariants}
            >
              Send a message
            </motion.h2>

            <motion.h3
              className="font-['Exo_2',sans-serif] text-[clamp(24px,3vw,40px)] text-center text-gray-300"
              variants={itemVariants}
            >
              Socials
            </motion.h3>

            {/* Social Links */}
            <div className="flex gap-[67px] items-center">
              <motion.a
                href="https://github.com/pedroM720"
                target="_blank"
                rel="noopener noreferrer"
                className="relative block shrink-0 rounded-full p-6 border-[3px] border-white hover:bg-white/10 transition-all group"
                variants={itemVariants}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onMouseEnter={() => setHoveredButton('github')}
                onMouseLeave={() => setHoveredButton(null)}
              >
                <div className="relative z-10">
                  <Github className="w-[100px] h-[100px] text-white" strokeWidth={1.5} />
                </div>
                <span
                  className="absolute inset-0 rounded-full pointer-events-none"
                  style={getGlowStyle('github')}
                />
              </motion.a>

              <motion.a
                href="https://www.linkedin.com/in/pedro7/"
                target="_blank"
                rel="noopener noreferrer"
                className="relative block shrink-0 rounded-full p-6 border-[3px] border-white hover:bg-white/10 transition-all group"
                variants={itemVariants}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onMouseEnter={() => setHoveredButton('linkedin')}
                onMouseLeave={() => setHoveredButton(null)}
              >
                <div className="relative z-10">
                  <Linkedin className="w-[100px] h-[100px] text-white" strokeWidth={1.5} />
                </div>
                <span
                  className="absolute inset-0 rounded-full pointer-events-none"
                  style={getGlowStyle('linkedin')}
                />
              </motion.a>
            </div>

            {/* Divider */}
            <motion.div
              className="w-full h-[2px] bg-white/30"
              variants={itemVariants}
            />
          </div>

          {/* Right Section - Contact Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-[42px]">
            <motion.div className="relative" variants={itemVariants}>
              <input
                id="contact-email"
                type="email"
                placeholder="Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-transparent border-b-2 border-white/50 py-4 font-['Exo_2',sans-serif] text-[clamp(18px,2.5vw,32px)] text-white placeholder-[#a4a4a4] outline-none focus:border-white transition-all"
              />
            </motion.div>

            <motion.div className="relative" variants={itemVariants}>
              <textarea
                id="contact-message"
                placeholder="Message"
                required
                rows={6}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full bg-transparent border-b-2 border-white/50 py-4 font-['Exo_2',sans-serif] text-[clamp(18px,2.5vw,32px)] text-white placeholder-[#a4a4a4] outline-none focus:border-white transition-all resize-none"
              />
            </motion.div>

            {/* Status Message */}
            <AnimatePresence>
              {status !== 'idle' && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className={`font-['Exo_2',sans-serif] text-[20px] ${statusConfig[status].color}`}
                >
                  {statusConfig[status].text}
                </motion.p>
              )}
            </AnimatePresence>

            <motion.button
              type="submit"
              disabled={status === 'sending'}
              className="relative self-start border border-white rounded-[15px] px-8 py-3 font-['Exo_2',sans-serif] text-[clamp(24px,3vw,40px)] text-white hover:bg-white/10 transition-colors group overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed"
              variants={itemVariants}
              whileHover={status !== 'sending' ? { scale: 1.05 } : {}}
              whileTap={status !== 'sending' ? { scale: 0.95 } : {}}
              onMouseEnter={() => setHoveredButton('send')}
              onMouseLeave={() => setHoveredButton(null)}
            >
              <span className="relative z-10">
                {status === 'sending' ? 'Sending...' : 'Send'}
              </span>
              <span
                className="absolute inset-0 pointer-events-none"
                style={getGlowStyle('send')}
              />
            </motion.button>
          </form>
        </div>
      </motion.div>
    </div>
  );
});

Contact.displayName = 'Contact';