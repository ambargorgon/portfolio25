// Tecnologias.tsx
import { motion, useAnimation, type Variants, type Transition } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import TechButton from "./common/TechButton"; // tu componente de botón

// Tipamos la transición correctamente
const spring: Transition = {
  type: "spring",
  damping: 12,
  stiffness: 120,
};

// Variants tipados
const itemVariants: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: spring,
  },
};

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.06,
    },
  },
};

const Tecnologias: React.FC = () => {
  const controls = useAnimation();
  // useInView devuelve { ref, inView } en la forma de objeto
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true, // solo una vez
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <section className="py-12 md:px-8 lg:px-16">
        <h3 className="w-[90%] border-b-1 font-bold pl-36 my-16 pb-2 text-2xl border-white">

        Tecnologías
      </h3>

      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={containerVariants}
        className="flex flex-col gap-8 items-center"
      >
        {/* Fila 1 */}
        <div className="flex flex-wrap justify-center gap-6">
          <motion.div variants={itemVariants}>
            <TechButton text="React" iconSrc="/icons/react.svg" />
          </motion.div>
          <motion.div variants={itemVariants}>
            <TechButton text="TypeScript" iconSrc="/icons/typescript.svg" />
          </motion.div>
          <motion.div variants={itemVariants}>
            <TechButton text="Figma" iconSrc="/icons/figma.svg" />
          </motion.div>
        </div>

        {/* Fila 2 */}
        <div className="flex flex-wrap justify-center gap-6">
          <motion.div variants={itemVariants}>
            <TechButton text="React Native" iconSrc="/icons/react-native.svg" />
          </motion.div>
          <motion.div variants={itemVariants}>
            <TechButton text="Spring Boot" iconSrc="/icons/spring.svg" />
          </motion.div>
          <motion.div variants={itemVariants}>
            <TechButton text="JavaScript" iconSrc="/icons/javascript.svg" />
          </motion.div>
        </div>

        {/* Fila 3 */}
        <div className="flex flex-wrap justify-center gap-6">
          <motion.div variants={itemVariants}>
            <TechButton text="Next.js" iconSrc="/icons/next.svg" />
          </motion.div>
          <motion.div variants={itemVariants}>
            <TechButton text="Tailwind" iconSrc="/icons/tailwind.svg" />
          </motion.div>
          <motion.div variants={itemVariants}>
            <TechButton text="Firebase" iconSrc="/icons/firebase.svg" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Tecnologias;
