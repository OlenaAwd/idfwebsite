import img1 from "../../../assets/sweet.webp";
import img2 from "../../../assets/rejuventating.webp";
import img3 from "../../../assets/delicious.webp";
import img4 from "../../../assets/citrus.webp";
import img5 from "../../../assets/ocean.webp";
import img6 from "../../../assets/rose.webp";



export interface ICardForHamper{
    id:number, 
    title:string,
    src:string,
    header:string,
    description:string,
}
export const cardsDataWithImg:ICardForHamper[]=[
    {
        id:1,
        title:"sweet",
        src:img1,
        header:"Confectionary Wonders Hamper",
        description: "An ever-expanding array of sweet delights await in our hampers. From specially blended teas that soothe the soul, hand-made fudge that melts the heart, to beautifully packed rock candy that sparkles with joy—every bite is a celebration.",
    },
    {
        id:2,
        title:"REJUVENTATING",
        src:img2,
        header:"Specially Made Wellness Hamper",
        description: "Our hampers are brimming with our scented and beauty range. Candles that illuminate, diffusers that invigorate, hand creams that rejuvenate, and lip balms that nourish. Each product reflects our commitment to quality, passion, and love.",
    },
    {
        id:3,
        title:"DELICIOUS",
        src:img3,
        header:"Gourmet Foodies Hampers",
        description: "Heartfelt Hampers for Foodies are a culinary delight. Indulge in a gourmet journey featuring an exquisite selection of fine teas, decadent fudge, artisanal crackers, and an array of premium condiments. It's a flavour-packed experience that'll tantalize every food lover's taste buds.",
    },

]
export const cardsDataWithImgSpecially:ICardForHamper[]=[
    {
        id:1,
        title:"CITRUS",
        src:img4,
        header:"Mandarin, blood orange and lime scent<",
        description: "Our zesty citrus range includes: Essential oils, diffusers, candles, body creams, balms and body wash.",
    },
    {
        id:2,
        title:"OCEAN",
        src:img5,
        header:"Ocean fresh, acqua scent",
        description: "The crisp invigorating scent of Amalfi Coast will bring an ocean breeze into your very home. You can get the ocean fragrance through our body creams, balms, oils and home scents such as candles, diffusers and essential oils.",
    },
    {
        id:3,
        title:"ROSE",
        src:img6,
        header:"Succulent and rich rose fragrance",
        description: "The classic warm rose fragrance will make your home and body feel fresh and sweet. Freshen the room with glorious scent of rose wafting from our range of candles, oils and diffusers",
    },

]