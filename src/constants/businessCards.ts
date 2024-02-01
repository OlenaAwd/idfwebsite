import { IServicesProps } from './../types/cardType';
import DigitalMarketing from "../assets/businessServices/Digital Marketing.webp";
import OrderFulfilment from "../assets/businessServices/Order Fulfillment 1.webp";
import CuratedHampers from "../assets/businessServices/Curated Hampers.webp";
import Packaging from "../assets/businessServices/packaging.webp";
import PackagingAndDisplay from "../assets/businessServices/Card4.webp";
import WhiteLabel from "../assets/businessServices/whiteLabel.webp";
export const businessCardsData: IServicesProps[] = [
    {
    id: 1,
    span: "Digital&nbsp;marketing",
        hoverText: "Harness the power of Google Business Profile to enhance local search visibility and connect with your community. Tap into Apple Business Connect to streamline customer interactions and enrich their experience. Deploy cutting-edge chatbots for 24/7 customer engagement, addressing queries, and boosting conversions. And with strategic social posting, we ensure your brand story reaches the right audience, fostering engagement and driving growth.",
    src: DigitalMarketing
    },
     {
    id: 2,
    span: "Order&nbsp;Fulfilment",
    hoverText: "Streamline your business operations with our reliable order fulfilment services. We manage the end-to-end process, from inventory management to timely delivery, ensuring your customers experience smooth and efficient transactions. As you focus on expanding your business horizons, our service stands as a symbol of efficiency intertwined with the empowerment of our neurodiverse talents.",
    src:OrderFulfilment
    },
    {
    id: 3,
    span: "Curated&nbsp;Hampers",
    hoverText: "Gift-giving becomes a unique experience with our bespoke hampers. Crafted with a touch of personalization, each hamper is a blend of quality products and thoughtful curation. Ideal for corporate gifting or special occasions, our hampers not only serve as a token of appreciation but also support the aspirations of our neurodiverse community.",
    src:CuratedHampers,
    },
     {
    id: 4,
    span: "Packaging&nbsp;and&nbsp;Display",
    hoverText: "Our high performing packaging and point of sale team work with Australia's leading companies.",
    src:Packaging,
    },
      {
    id: 5,
    span: "Packing&nbsp;Services",
    hoverText: "Elevate your product delivery with our meticulous packing services. At IDF, precision meets professionalism, ensuring that each package is handled with utmost care. Whether you're a startup or an established brand, our packing services can be tailored to your specific needs, all while promoting the employment of our remarkable neurodiverse workforce.",
    src:PackagingAndDisplay,
    },
        {
    id: 6,
    span: "Wellness&nbsp;Manufacturing",
    hoverText: "We manufacture well-being and personal care products on behalf of leading brands.",
    src:WhiteLabel,
    },
]
    