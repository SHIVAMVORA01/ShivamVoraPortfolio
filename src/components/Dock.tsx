import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  RiUserLine,
  RiBriefcase2Line,
  RiLightbulbLine,
  RiSunLine,
  RiMoonLine,
  RiPhoneLine, 
} from "react-icons/ri";
import { ArrowUp } from "lucide-react"; // Import ArrowUp icon

interface DockIconProps {
  icon?: React.ReactNode;
  label?: string;
  href?: string;
  onClick?: () => void;
  isDivider?: boolean;
  className?: string;
}

const DockIcon = ({ icon, label, href, onClick, isDivider, className }: DockIconProps) => {
  const ref = useRef<HTMLAnchorElement | HTMLButtonElement>(null);
  const distance = useMotionValue(0);
  const size = useSpring(distance, {
    damping: 15,
    stiffness: 200,
  });

  const width = useTransform(size, [0, 1], [48, 56]);
  const height = useTransform(size, [0, 1], [48, 56]);

  if (isDivider) {
    return (
      <div className="h-8 md:h-px w-px md:w-8 bg-gray-300/50 dark:bg-gray-600/50 mx-2 md:mx-0 md:my-2 self-center" />
    );
  }

  function handleMouseMove(e: React.MouseEvent) {
    const rect = ref.current?.getBoundingClientRect();
    if (rect) {
      const distanceFromCenter = Math.abs(
        (rect.left + rect.width / 2) - e.clientX
      );
      const maxDistance = 150;
      const distanceScale = Math.max(0, 1 - distanceFromCenter / maxDistance);
      distance.set(distanceScale);
    }
  }

  const BaseComponent = href ? 'a' : 'button';

  return (
    <BaseComponent
      ref={ref as React.RefObject<HTMLAnchorElement & HTMLButtonElement>}
      href={href}
      className={`group relative flex items-center justify-center ${className || ''}`}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => distance.set(0)}
      target={href?.startsWith('http') ? '_blank' : undefined}
      rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
    >
      <motion.div
        style={{ width, height }}
        className="relative flex items-center justify-center rounded-xl transition-colors"
      >
        <div className="absolute inset-0 rounded-full bg-[#f4f4f5] dark:bg-gray-600 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
        <div className="relative z-10 text-2xl text-gray-800 dark:text-gray-200 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
          {icon}
        </div>
      </motion.div>
      <div className="absolute md:right-full md:mr-4 md:top-1/2 md:-translate-y-1/2 -top-12 scale-0 rounded-md bg-gray-800/90 dark:bg-gray-700/90 px-3 py-2 text-sm text-white opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200">
        {label}
      </div>
    </BaseComponent>
  );
};

interface DockProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
  showTopButton: boolean;
  scrollToTop: () => void;
}

export const Dock = ({ darkMode, toggleDarkMode, showTopButton, scrollToTop }: DockProps) => {
  return (
    <div className="fixed bottom-8 md:bottom-auto md:right-8 md:top-1/2 md:transform md:-translate-y-1/2 w-screen md:w-auto flex justify-center md:justify-start items-center z-50">
      <motion.div
        className="flex md:flex-col h-20 md:h-auto items-center gap-2 px-6 md:px-2 py-2 md:py-6 rounded-2xl 
          bg-white dark:bg-gray-800 
          shadow-[0_2px_10px_rgba(0,0,0,0.05)] dark:shadow-[0_2px_10px_rgba(0,0,0,0.2)]
          transition-all duration-300
          relative"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        style={{
          position: 'relative',
        }}
      >
        {/* Add gradient border using pseudo-element */}
        <div className="absolute -inset-[1.5px] rounded-2xl z-[-1]"
          style={{
            background: 'linear-gradient(108deg, #0894FF, #C959DD 34%, #FF2E54 68%, #FF9004)',
          }}
        />
        {/* Navigation Icons */}
        <DockIcon icon={<RiUserLine />} label="About" href="#about" />
        <DockIcon icon={<RiBriefcase2Line />} label="Work" href="#work" />
        <DockIcon icon={<RiLightbulbLine />} label="Skills" href="#skills" />
        <DockIcon icon={<RiPhoneLine />} label="Contact" href="#contact" />
        
        {/* Divider */}
        <DockIcon isDivider />
           
        {/* Theme Toggle */}
        <DockIcon 
          icon={darkMode ? <RiSunLine /> : <RiMoonLine />}
          label={darkMode ? "Light" : "Dark"}
          onClick={toggleDarkMode}
        />

        {/* Back to Top Button - Always visible when showTopButton is true */}
        {showTopButton && (
          <DockIcon 
            icon={<ArrowUp />}
            label="Top"
            onClick={scrollToTop}
          />
        )}
      </motion.div>
    </div>
  );
};