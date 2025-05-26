//Page not in use

import { FaBrain, FaMoneyBillWave, FaClock, FaPlug } from "react-icons/fa";
import { FaArrowUpRightDots, FaMoneyBill1, FaCoins } from "react-icons/fa6";

export const mainTitleWords =
  "cu Demandra, retailers don’t just get data, <br> they get clarity".split(
    " "
  );

export const mainParagraphWords =
  "Demandra is a demand forecasting platform powered by AI that helps <br> retailers optimize inventory by solving the root of both overstocking <br> and understocking: inaccurate demand prediction.".split(
    " "
  );

export const getStartedText = "Get Started";

// Skip button labels as constants
export const skipBtnWhyUs = "   Why us?  ";
export const skipBtnPerformance = " Performance";
export const skipBtnTechnology = " Technology ";
export const skipBtnAboutUs = "  About us  ";

export const whyStockSmartTitle = "Why Stock Smart?";

export const strongPointsTitle = "Why us?";

export const modelPerformanceTitle = (
  <>
    <strong>Model Performance</strong>
    <br />
    We reached
    <br />
  </>
);

export const modelPerformanceFooter = (
  <>
    Average Accuracy
    <br />
    in the first week
  </>
);

export const strongPoints = [
  {
    icon: <FaBrain />,
    text: <>Accurate forecasting using past data and external factors</>,
  },
  {
    icon: <FaMoneyBillWave />,
    text: <>Best price to petformance ratio on the market</>,
  },
  {
    icon: <FaClock />,
    text: <>High precizion for the firt few weeks</>,
  },
  {
    icon: <FaPlug />,
    text: <>Seemless plug-n-play solution integration</>,
  },
  {
    icon: <FaBrain />,
    text: <>Accurate forecasting using past data and external factors</>,
  },
  {
    icon: <FaMoneyBillWave />,
    text: <>Best price to petformance ratio on the market</>,
  },
];

export const PuncteT1 = [
  {
    icon: <FaMoneyBill1 />,
    text: (
      <>
        With the right amount of, stores can better manage prices (e.g., premium
        pricing when demand is high) instead of discounting to clear excess
        inventory.
      </>
    ),
  },
  {
    icon: <FaArrowUpRightDots />,
    text: (
      <>
        &nbsp; &nbsp; Keeping track of demand allows the store to reduce
        over-purchasing and ensure that stock gets rotated properly.
      </>
    ),
  },
  {
    icon: <FaCoins />,
    text: (
      <>
        &nbsp; &nbsp; With our solution, big retailers could save milions that
        are now going to waste.
      </>
    ),
  },
];

export const extraDetails = [
  "Extra details about price management and premium pricing when demand is high.",
  "Extra details about demand tracking, over-purchasing, and stock rotation.",
  "Extra details about how big retailers can save millions with our solution.",
];

export const loremIpsumSection1 = {
  title: "Lorem Ipsum",
  text: (
    <>
      Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
      fugit.
    </>
  ),
};

export const loremIpsumSection2 = {
  title: "Lorem Ipsum",
  text: (
    <>
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
      deserunt mollit anim id est laborum.
    </>
  ),
};

export const AboutUs = {
  title: "Despre noi",
  text: (
    <>
      Suntem deja în mișcare. Am semnat un NDA cu Auchan, unul dintre cei mai
      mari retaileri din Europa, și pregătim un Proof of Concept cu KPI-uri deja
      definite. De asemenea, am luat legătura cu alți jucători importanți precum
      Penny și Kaufland, care încep să manifeste interes pentru soluția noastră.
    </>
  ),
};
