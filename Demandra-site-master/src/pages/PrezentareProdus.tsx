// Elimină importurile directe din ContentEN
// import { ... } from "./ContentEN";
import "./PrezentareProdus.css";
import { useRef, useState } from "react";
import { FaChevronDown } from "react-icons/fa6";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import AnimatedCounter from "../components/AnimatedCounter";
import ApexChart from "../components/chart";

const ScrollButton: React.FC<{ label: string; onClick: () => void }> = ({
  label,
  onClick,
}) => (
  <button className="scroll-btn" onClick={onClick}>
    {label}
  </button>
);

type ContentType = typeof import("./ContentEN");

type PrezentareProdusProps = {
  content: ContentType;
};

function PrezentareProdus({ content }: PrezentareProdusProps) {
  const {
    mainTitleWords,
    mainParagraphWords,
    getStartedText,
    whyStockSmartTitle,
    strongPointsTitle,
    modelPerformanceTitle,
    modelPerformanceFooter,
    AboutUs,
    Technology,
    strongPoints,
    PuncteT1,
    extraDetails,
    skipBtnWhatWeSolve,
    skipBtnWhyUs,
    skipBtnTechnology,
    skipBtnAboutUs,
  } = content;

  const buttons = [
    { label: skipBtnWhatWeSolve, onClick: () => scrollTo(refTheProblem), className: "hide-mobile" },
    { label: skipBtnWhyUs, onClick: () => scrollTo(refWhyUs) },
    { label: skipBtnTechnology, onClick: () => scrollTo(refTechnology) },
    { label: skipBtnAboutUs, onClick: () => scrollTo(refAboutUs) },
  ];

  const refTheProblem = useRef<HTMLDivElement>(null);
  const refWhyUs = useRef<HTMLDivElement>(null);
  const refTechnology = useRef<HTMLDivElement>(null);
  const refAboutUs = useRef<HTMLDivElement>(null);

  const scrollTo = (ref: React.RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  // State pentru elementul extins
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  // Detectează dacă este mobil
  const isMobile = window.matchMedia("(max-width: 600px)").matches;

 return (
    <div className="bodyPrezentare">
      
      
      <motion.div
            
            initial={{ opacity: 0, x: 70 }}
            whileInView={{
              opacity: 1,
              x: 32,
              transition: { duration: 0.5, delay: 1.75},
            }}
            viewport={{ once: true }}
          >
            <img src="/decor1.png" alt="" className="decor1-img" draggable={false} />

          </motion.div>

     <div className="center">
      <div className="Titlu">
        {mainTitleWords.map((el, i) => (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 1.25,
              delay: i / 7,
            }}
            key={i}
          >
            {el === "<br>" ? <br /> : `${el} `}
          </motion.span>
        ))}
      </div>
     
      <div className="Paragraf1">
        {mainParagraphWords.map((el, i) => (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.8,
              delay: mainTitleWords.length / 7 + i / 100,
            }}
            key={i}
          >
            {el === "<br>" ? <br /> : `${el} `}
          </motion.span>
        ))}
      </div>
     </div>
     
       <motion.div
            className="decor2-img"
            initial={{ opacity: 0, y: 0, x: -70 }}
            whileInView={{
              opacity: 1,
              x: 0,
              y: 0,
              transition: { delay: 1.7, duration: 0.5},
            }}
            viewport={{ once: true }}
          >
            
           <img src="/decor2.png" alt="" className="decor2-img" draggable={false} />
          </motion.div>
      

      <motion.div
        initial={{ opacity: 0, y: 23 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.7, duration: 0.5 }}
      >
        <Link to="/contact" className="GetStarted">
          {getStartedText}
        </Link>
      </motion.div>

      <div className="nav-buttons">
        {buttons.map((btn, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.7 + i * 0.2, duration: 0.4 }}
          >
            <div className={btn.className || ""}>
              <ScrollButton label={btn.label} onClick={btn.onClick} />
            </div>
          </motion.div>
        ))}
      </div>

      <p ref={refTheProblem}>
        <br />
        <br></br>
      </p>

      <div className="TheProblem"></div>

      <div className="skew">
        <motion.div
          className="flex-container-T1-1"
          viewport={{ once: true }}
          initial={{ opacity: 0, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: isMobile ? (mainTitleWords.length / 7 + 0.5) : 0 // delay după titlu pe mobil
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 200 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.15, delay: 0.09 }}
            viewport={{ once: true }}
          >
            <h2 className="Titlu1">{whyStockSmartTitle}</h2>
          </motion.div>

          <div className="flex-container-T1-2">
            {PuncteT1.map((point, index) => (
              <motion.div
                className={`flex-item-T1${
                  expandedIndex === index ? " expanded" : ""
                }`}
                key={index}
                initial={{ opacity: 0, y: -30 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { duration: 1, delay: index * 0.33 },
                }}
                viewport={{ once: true }}
              >
                <div className="icon">{point.icon}</div>
                <div className="flex-item-T1-content">
                  <p>{point.text}</p>
                  <button
                    className={`arrow-btn${
                      expandedIndex === index ? " rotated" : ""
                    }`}
                    onClick={() =>
                      setExpandedIndex(expandedIndex === index ? null : index)
                    }
                    aria-label="Show more"
                  >
                    <FaChevronDown />
                  </button>
                  <div
                    className={`extra-details${
                      expandedIndex === index ? " show" : ""
                    }`}
                  >
                    <p>{extraDetails[index]}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <p ref={refWhyUs}>
        <br />
      </p>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.09 }}
        viewport={{ once: true }}
      >
        <h1 className="StrongPoints">{strongPointsTitle}</h1>
      </motion.div>
    
     <div className="center">
      <div className="space-between">
        
        <motion.div
            className="decor4-img"
            initial={{ opacity: 0, y: 0, x: -70 }}
            whileInView={{
              opacity: 1,
              x: 0,
              y: 0,
              transition: { duration: 0.7, delay: 0.15},
            }}
            viewport={{ once: true }}
          >
           <img src="/decor4.png" alt="" className="decor4-img" draggable={false} />
       </motion.div>
     <div>
       <div className="flex-container-SP">
        {strongPoints.map((point, index) => (
          <motion.div
            className="flex-item-SP"
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.6, delay: index * 0.1 },
            }}
            whileHover={{ scale: 1.05 }}
            viewport={{ once: true }}
          >
            <div className="icon">{point.icon}</div>
            <p>{point.text}</p>
          </motion.div>
        ))}
       </div>
      
     </div>
        <motion.div
            className="decor3-img"
            initial={{ opacity: 0, y: 0, x: 70 }}
            whileInView={{
              opacity: 1,
              x: 0,
              y: 0,
              transition: { delay: 0.15, duration: 0.7},
            }}
            viewport={{ once: true }}
          >
            
           <img src="/decor3.png" alt="" className="decor3-img" draggable={false} />
          </motion.div>

      </div>
    </div>

      <div ref={refTechnology}>
        <p>
          <br /> <br /> <br /> <br /> <br /> <br /> <br />
        </p>
      
      
        <div className="Technology">
          <div className="center">
          <motion.div
            className="title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 1, delay: 0.16 },
            }}
            viewport={{ once: true }}
          >
            {Technology.title}
          </motion.div>
      </div>

     <div className="space-between">

      <motion.div
            className="decor6-img"
            initial={{ opacity: 0, y: 0, x: -70 }}
            whileInView={{
              opacity: 1,
              x: 0,
              y: 0,
              transition: { duration: 0.7, delay: 0.15},
            }}
            viewport={{ once: true }}
          >
           <img src="/decor6.png" alt="" className="decor6-img" draggable={false} />
       </motion.div>
       
          <motion.div
            className="text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 1, delay: 0.25 },
            }}
            viewport={{ once: true }}
          >
            {Technology.text}
          </motion.div>

          <motion.div
            className="decor5-img"
            initial={{ opacity: 0, y: 0, x: 70 }}
            whileInView={{
              opacity: 1,
              x: 0,
              y: 0,
              transition: { delay: 0.15, duration: 0.7},
            }}
            viewport={{ once: true }}
          >
            
           <img src="/decor5.png" alt="" className="decor5-img" draggable={false} />
          </motion.div>
        </div>
      </div>
      
      <div>
        <motion.div
          className="flex-container-c"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3, delay: 0.13 }}
          viewport={{ once: true }}
        >
          <h1 className="counter">
            {modelPerformanceTitle}
            <AnimatedCounter
              from={0}
              to={93}
              duration={1.3}
              className="counter-counter"
              prefix="~"
              suffix="%"
            />
            {modelPerformanceFooter}
          </h1>
          <div className="chart-container">
            <ApexChart />
          </div>
        </motion.div>
       </div>
    </div>

    <div className="flex-right">
    <motion.div
            className="decor7-img"
            initial={{ opacity: 0, y: 0, x: 70 }}
            whileInView={{
              opacity: 1,
              x: 0,
              y: 0,
              transition: { delay: 0.15, duration: 0.7},
            }}
            viewport={{ once: true }}
          >
            
           <img src="/decor7.png" alt="" className="decor7-img" draggable={false} />
          </motion.div>

      <p ref={refAboutUs}>
        <br /> <br /> <br />
      </p>
    </div>

      <motion.div
        className="AboutUs"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.1 }}
        viewport={{ once: true }}
      >
        <h2 className="title">{AboutUs.title}</h2>
        <p className="text">{AboutUs.text}</p>
      </motion.div>

      <motion.div
        className="brands"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: 1, delay: 0.16 },
        }}
        viewport={{ once: true }}
      >
        <img src="Auchan.png" alt="Auchan" className="Auchan" />
        <img src="Penny.svg" alt="Penny" className="Penny" />
        <img src="Kaufland.svg" alt="Kaufland" className="Kaufland" />
      </motion.div>
    </div>
  );
}

export default PrezentareProdus;
