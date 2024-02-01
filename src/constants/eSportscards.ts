import { IServicesProps } from "../types/cardType";
import LeagueLegends from "../assets/esportsServices/1.webp";
import CounterStrike from "../assets/esportsServices/2.webp";
import Dota from "../assets/esportsServices/3.webp";
import Overwatch from "../assets/esportsServices/4.webp";
import RocketLeague from "../assets/esportsServices/5.webp";
import Hearthstone from "../assets/esportsServices/6.webp";


export const esportsCardsData: IServicesProps[] = [
    {
    id: 1,
    span: "League&nbsp;of&nbsp;Legends",
        // hover: "Harness the power of Google Business Profile to enhance local search visibility and connect with your community. Tap into Apple Business Connect to streamline customer interactions and enrich their experience. Deploy cutting-edge chatbots for 24/7 customer engagement, addressing queries, and boosting conversions. And with strategic social posting, we ensure your brand story reaches the right audience, fostering engagement and driving growth.",
    src: LeagueLegends
    },
     {
    id: 2,
    span: "Counter&nbsp;Strike",
    // hover: "Streamline your business operations with our reliable order fulfilment services. We manage the end-to-end process, from inventory management to timely delivery, ensuring your customers experience smooth and efficient transactions. As you focus on expanding your business horizons, our service stands as a symbol of efficiency intertwined with the empowerment of our neurodiverse talents.",
    src:CounterStrike
    },
    {
    id: 3,
    span: "Dota&nbsp;2",
    // hover: "Gift-giving becomes a unique experience with our bespoke hampers. Crafted with a touch of personalization, each hamper is a blend of quality products and thoughtful curation. Ideal for corporate gifting or special occasions, our hampers not only serve as a token of appreciation but also support the aspirations of our neurodiverse community.",
    src:Dota,
    },
     {
    id: 4,
    span: "Overwatch",
    // hover: "Our high performing packaging and point of sale team work with Australia's leading companies.",
    src:Overwatch,
    },
      {
    id: 5,
    span: "Rocket&nbsp;League",
    // hover: "Elevate your product delivery with our meticulous packing services. At IDF, precision meets professionalism, ensuring that each package is handled with utmost care. Whether you're a startup or an established brand, our packing services can be tailored to your specific needs, all while promoting the employment of our remarkable neurodiverse workforce.",
    src:RocketLeague
    },
        {
    id: 6,
    span: "Hearthstone",
    // hover: "We manufacture well-being and personal care products on behalf of leading brands.",
    src:Hearthstone,
    },
]