import { FaBrain, FaMoneyBillWave, FaClock, FaPlug } from "react-icons/fa";
import { FaArrowUpRightDots, FaMoneyBill1, FaCoins } from "react-icons/fa6";

export const mainTitleWords =
  "With Demandra, retailers don’t just get data, <br> they get clarity".split(
    " "
  );

export const mainParagraphWords =
  "Demandra is a demand forecasting platform powered by AI that helps <br> retailers optimize inventory by solving the root of both overstocking <br> and understocking: inaccurate demand prediction.".split(
    " "
  );

export const getStartedText = "Get Started";

// Skip button labels as constants
export const skipBtnWhatWeSolve = "What we solve";
export const skipBtnWhyUs = "   Why us?   ";
export const skipBtnTechnology = " Technology  ";
export const skipBtnAboutUs = "  About us   ";

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
        &nbsp; &nbsp; Keeping consistent track of demand allows the store to reduce
        over-purchasing and ensure that stock gets rotated properly.
      </>
    ),
  },
  {
    icon: <FaCoins />,
    text: (
      <>
        &nbsp; &nbsp; With our solution, big retailers could save millions that are now going to waste, reclaiming budget previously lost to inefficiencies and redirecting those funds toward growth.

      </>
    ),
  },
];

export const extraDetails = [
  "Extra details about price management and premium pricing when demand is high.",
  "Extra details about demand tracking, over-purchasing, and stock rotation.",
  "Extra details about how big retailers can save millions with our solution.",
];

export const Technology = {
  title: "Technology that predicts demand — not just reacts to it",
  text: (
    <>
      Demandra leverages advanced AI to analyze historical sales data, seasonal
      trends, and real-time consumer behavior. Our intelligent forecasting
      engine identifies patterns and shifts before they happen, enabling
      retailers to make proactive decisions. By learning from past trends,
      Demandra helps you stock smarter, reduce waste, and stay ahead of customer
      demand.
    </>
  ),
};

export const AboutUs = {
  title: "About us",
  text: (
    <>
      We’re already in motion. We've signed an NDA with Auchan, one of the
      largest retailers in Europe, and are preparing a Proof of Concept with
      KPIs already defined. Not only this, but we also got in touch with other
      big players in the field such as Penny and Kaufland and they are starting
      to show interest towards our solution.
    </>
  ),
};
