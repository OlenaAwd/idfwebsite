import microphone from "../assets/expansiveCardImg/mic.svg";
import chat from "../assets/expansiveCardImg/chat.svg";
import socials from "../assets/expansiveCardImg/social.svg";
import menu from "../assets/expansiveCardImg/menu.svg";


export interface ICardProps{
    id: number,
    span: string,
    img: string,
    title: string,
    description: string,
    link?:string
}

export  const ourExpansiveNetwork: ICardProps[] = [
    {
        id: 1,
        span:"Voice Search",
        img: microphone,
        title: "Alexa <br/> Voice Chat​",
        description:"Voice search is not just the future; it's now. Harness the power of Alexa Voice Chat, tapping into a fast-growing user base eager to interact with businesses in the most intuitive way. This feature not only offers convenience but positions your brand at the cutting-edge of technological innovation.​",
    },
    {
        id: 2,
        span:"Chat Bots",
        img: chat,
        title: "Chatbots<br/> Google Business Profile, Facebook, and Instagram​​",
        description:"Customer engagement is paramount. Our chatbots on Google Business Profile, Facebook, and Instagram ensure immediate and efficient interaction with potential clients or customers, answering queries promptly, and guiding them through your offerings. Enhance user experience and build lasting digital relationships.​​",
    },
    {
        id: 3,
        span:"Social Posting",
        img: socials,
        title: "Social Posting across Multiple Platforms​​",
        description:"Your brand's story deserves to be told far and wide. Our automated social posting feature amplifies your reach, ensuring consistent visibility across Google Business Profile, Apple Maps, Instagram, Facebook, and LinkedIn. Every post, every story, every promotion is optimised and shared to captivate a broader audience.​​",
    },
    {
        id: 4,
        span:"Menu Search Results​",
        img: menu,
        title: "Tailored Menu Solution for Bars and Restaurants​​",
        description:"In the dynamic world of dining and nightlife, staying relevant is key. With our specialised menu solution, bars and restaurants can effortlessly update and showcase their culinary and beverage offerings on platforms like Google and Apple Maps. An accurate, enticing menu can be the difference between a potential diner scrolling past or walking through your door.​​",
    },
]