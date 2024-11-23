import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, useState } from "react"; // Add useState import
import {
  RiUserLine,
  RiBriefcase2Line,
  RiLightbulbLine,
  RiSunLine,
  RiMoonLine,
  RiPhoneLine, 
} from "react-icons/ri";
import { ArrowUp, ChevronUp, ChevronDown } from "lucide-react"; // Add ChevronUp and ChevronDown

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
      <div className="h-8 w-px bg-[#020f22] mx-2 self-center" />
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
        <div className="absolute inset-0 rounded-full bg-[#f4f4f5] dark:bg-gray-600 opacity-0 transition-opacity duration-200"></div>
        <div className="relative z-10 text-2xl text-gray-600 dark:text-gray-800 [&>*]:w-6 [&>*]:h-6 transition-all duration-300">
          {icon}
        </div>
        <div className="absolute bottom-0 h-0.5 w-0 bg-gradient-to-r from-[#0894FF] via-[#C959DD] to-[#FF2E54] group-hover:w-full transition-all duration-300"></div>
      </motion.div>
      <div className="absolute -top-12 left-1/2 -translate-x-1/2 scale-0 rounded-md bg-gray-800/90 dark:bg-gray-700/90 px-3 py-2 text-sm text-white opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200">
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
  const [isVisible, setIsVisible] = useState(false);

  const dockAnimation = {
    initial: { y: "100%", opacity: 0 },
    animate: { 
      y: isVisible ? "calc(100vh - 144px)" : "100%",
      opacity: isVisible ? 1 : 0
    },
    transition: { 
      type: "spring",
      stiffness: 100,
      damping: 20,
      opacity: { duration: 0.2 }
    }
  };

  const toggleAnimation = {
    tap: { scale: 0.95 },
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 25
    }
  };

  const contentAnimation = {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { 
      type: "spring",
      stiffness: 300,
      damping: 25,
      delay: 0.1
    }
  };

  return (
    <>
      {/* Dock with Toggle Button */}
      <motion.div
        className="fixed w-screen flex justify-center items-center z-40"
        {...dockAnimation}
      >
        <div className="relative flex flex-col items-center">
          <motion.div
            className="flex flex-row h-20 items-center gap-2 px-4 py-2 rounded-2xl 
              bg-white dark:bg-[#DBE2E9]
              shadow-[0_2px_10px_rgba(0,0,0,0.05)] dark:shadow-[0_2px_10px_rgba(0,0,0,0.2)]
              transition-all duration-300
              relative"
            {...contentAnimation}
          >
            {/* Animated gradient border for dock */}
            <div 
              className="absolute -inset-[1.5px] rounded-2xl z-[-1]"
              style={{
                background: 'linear-gradient(108deg, #0894FF, #C959DD 34%, #FF2E54 68%, #FF9004)',
                backgroundSize: '200% 200%',
                animation: 'gradientMove 3s linear infinite'
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

          {/* Toggle Button */}
          <div className="absolute -bottom-12">
            <div className="relative">
              {/* Gradient Border */}
              <div 
                className={`absolute -inset-[1.5px] z-[-1] ${isVisible ? 'rounded-b-full' : 'rounded-full'}`}
                style={{
                  background: 'linear-gradient(108deg, #0894FF, #C959DD 34%, #FF2E54 68%, #FF9004)',
                  backgroundSize: '200% 200%',
                  animation: 'gradientMove 3s linear infinite'
                }}
              />
              <motion.button
                className={`bg-white  dark:bg-[#DBE2E9] w-24 h-12 shadow-lg flex items-center justify-center ${isVisible ? 'rounded-b-full' : 'rounded-full'}`}
                onClick={() => setIsVisible(!isVisible)}
                whileTap={toggleAnimation.tap}
                transition={toggleAnimation.transition}
              >
                <motion.div
                  animate={{ rotate: isVisible ? 180 : 0 }}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                >
                  <ChevronUp className="w-6 h-6 text-gray-600 dark:bg-[#020f22]-300" />
                </motion.div>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Initial Toggle Button (only visible when dock is hidden) */}
      {!isVisible && (
        <motion.div
          className="fixed bottom-8 w-full flex justify-center z-50"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 20, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
        >
          <div className="relative">
            {/* Gradient Border */}
            <div 
              className={`absolute -inset-[1.5px] z-[-1] ${isVisible ? 'rounded-t-full' : 'rounded-full'}`}
              style={{
                background: 'linear-gradient(108deg, #0894FF, #C959DD 34%, #FF2E54 68%, #FF9004)',
                backgroundSize: '200% 200%',
                animation: 'gradientMove 3s linear infinite'
              }}
            />
            <motion.button
              className={`bg-white dark:bg-[#DBE2E9] w-24 h-12 shadow-lg flex items-center justify-center ${isVisible ? 'rounded-t-full' : 'rounded-full'}`}
              onClick={() => setIsVisible(!isVisible)}
              whileTap={{ scale: 0.95 }}
            >
              {isVisible ? (
                <ChevronDown className="w-6 h-6 text-gray-600 dark:bg-[#020f22]-300" />
              ) : (
                <ChevronUp className="w-6 h-6 text-gray-600 dark:bg-[#020f22]-300" />
              )}
            </motion.button>
          </div>
        </motion.div>
      )}
    </>
  );
};