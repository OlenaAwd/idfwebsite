import { ICareerCard, ICeoCard, IDonateCard, IEmploymentHubModal, IEnterpriseCard, IGrowCard, IImpactCard, IKeyObjectives, IManagementCard, IOpportunitiesCard, IParticipantCardProps, IPurposeCard, IStepsCard, ISupportedEmploymentCard, IVideoCardsProps } from "../types/cardType";
import participantCard1 from "../assets/participantCard/Picture1.webp";
import participantCard2 from "../assets/participantCard/Picture2.webp";
import participantCard3 from "../assets/participantCard/Picture3.webp";
import participantCard4 from "../assets/participantCard/Picture4.webp";
import supportedStories1 from "../assets/supportedStories/Picture1.webp";
import supportedStories2 from "../assets/supportedStories/Picture2.webp"
import supportedStories3 from "../assets/supportedStories/Picture3.webp"
import supportedStories4 from "../assets/supportedStories/Picture4.webp";
import supportedStories5 from "../assets/supportedStories/Picture5.webp";
import supportedStories6 from "../assets/supportedStories/Picture6.webp";
import supportedStories7 from "../assets/supportedStories/Picture7.webp";
import supportedStories8 from "../assets/supportedStories/Picture8.webp";
import danate1 from "../assets/donateCard/Picture1.webp";
import danate2 from "../assets/donateCard/Picture2.webp";
import danate3 from "../assets/donateCard/Picture3.webp";
import danate4 from "../assets/donateCard/Picture4.webp";
import enterpriseCard1 from "../assets/enterpriseCards/socialEnterprise.webp";
import enterpriseCard2 from "../assets/enterpriseCards/businessEnterprise.webp";
import enterpriseCard3 from "../assets/enterpriseCards/participantEnterprise.webp";
import supportedEmp1 from "../assets/supportedEmploymentCard/Picture1.webp";
import supportedEmp2 from "../assets/supportedEmploymentCard/Picture2.webp";
import supportedEmp3 from "../assets/supportedEmploymentCard/Picture3.webp";
import supportedEmp4 from "../assets/supportedEmploymentCard/Picture4.webp";
import keyObj1 from '../assets/keyObjCards/Picture1.webp';
import keyObj2 from '../assets/keyObjCards/Picture2.webp'
import keyObj3 from '../assets/keyObjCards/Picture3.webp'
import keyObj4 from '../assets/keyObjCards/Picture4.webp';
import keyObjPurpose1 from '../assets/keyObjCards/purposeCards/Picture1.webp';
import keyObjPurpose2 from '../assets/keyObjCards/purposeCards/Picture2.webp';
import keyObjPurpose3 from '../assets/keyObjCards/purposeCards/Picture3.webp';
import keyObjPurpose4 from '../assets/keyObjCards/purposeCards/Picture4.webp';
import opportunityCard1 from "../assets/opportunitiesCards/Picture1.webp";
import opportunityCard2 from "../assets/opportunitiesCards/Picture2.webp";
import opportunityCard3 from "../assets/opportunitiesCards/Pic3.webp";
import ceo1 from "../assets/modalCEO/1.webp";
import ceo2 from "../assets/modalCEO/2.webp";
import ceo3 from "../assets/modalCEO/3.webp";
import ceo4 from "../assets/modalCEO/4.webp";
import ceo5 from "../assets/modalCEO/5.webp";
import ceo6 from "../assets/modalCEO/6.webp";
import ceo7 from "../assets/modalCEO/7.webp";
import ceo8 from "../assets/modalCEO/8.webp";
import ceo9 from "../assets/modalCEO/9.webp";
import ceo10 from "../assets/modalCEO/10.webp";
import managementSliderCard1 from "../assets/managementSliderCards/Picture1.webp";
import managementSliderCard2 from "../assets/managementSliderCards/Picture2.webp";
import managementSliderCard3 from "../assets/managementSliderCards/Picture3.webp";
import managementSliderCard4 from "../assets/managementSliderCards/Picture4.webp";
import supportedBusiness1 from "../assets/supportedEmploymentCard/businessServices/Picture1.webp";
import supportedBusiness4 from "../assets/supportedEmploymentCard/businessServices/Picture4.webp";
import supportedBusiness5 from "../assets/supportedEmploymentCard/businessServices/packingServices.webp";
import supportedBusiness6 from "../assets/supportedEmploymentCard/businessServices/digitalMarketing.webp";
import supportedBusiness7 from "../assets/supportedEmploymentCard/businessServices/orderFulfil.webp";
import supportedBusiness8 from "../assets/supportedEmploymentCard/businessServices/hampers.webp";

import supportedSocial2 from "../assets/supportedEmploymentCard/socialEnt/Picture2.webp";
import supportedSocial3 from "../assets/supportedEmploymentCard/socialEnt/Picture3.webp"
import supportServ2 from "../assets/supportedEmploymentCard/supportServices/Picture2.webp";
import supportServ3 from "../assets/supportedEmploymentCard/supportServices/Picture3.webp";
import careerCardGetSupport1 from "../assets/careerCardsGetSupport/Picture1.webp";
import careerCardGetSupport2 from "../assets/careerCardsGetSupport/Picture2.webp";
import careerCardGetSupport3 from "../assets/careerCardsGetSupport/Picture3.webp";
import itemsForYou1 from "../assets/itemsForYou/img1.svg";
import itemsForYou2 from "../assets/itemsForYou/img2.svg";
import itemsForYou3 from "../assets/itemsForYou/img3.svg";
import itemsForYou4 from "../assets/itemsForYou/img4.svg";
import videoImg1 from "../assets/videoCards/Picture1.webp";
import videoImg2 from "../assets/videoCards/Picture2.webp";
import videoImg3 from "../assets/videoCards/Picture3.webp";
import neurodiversityCard1 from "../assets/neurodiversityCard1.webp";
import neurodiversityCard2 from "../assets/neurodiversityCard2.webp";
import neurodiversityCard3 from "../assets/neurodiversityCard3.webp";
import checkProgImg from "../assets/checkProgramModal.webp";
import enquireImg from "../assets/enquireNow.webp";
import enquireImgBusiness from "../assets/enquireBusinessHub.webp";
import enquireImgActivity from "../assets/enquireActivityHub.webp";
import neurodiversityTransformCard1 from "../assets/neurodiversityTransformationCard1.webp";
import neurodiversityTransformCard2 from "../assets/neurodiversityTransformationCard2.webp";
import neurodiversityTransformCard3 from "../assets/neurodiversityTransformationCard3.webp";
import advCard1 from "../assets/advSuccess1.webp";
import advCard2 from "../assets/advSuccess2.webp";
import advCard3 from "../assets/advSuccess3.webp";
import advCard4 from "../assets/advSuccess4.webp";
import advBusiness from "../assets/opportunitiesCards/Picture1.webp";
import advActivity from '../assets/opportunitiesCards/Picture2.webp';
import advEmployment from '../assets/opportunitiesCards/Pic3.webp';
import jobBoard from "../assets/HubjobBoard.webp";
import coWork from "../assets/HubBusiness.webp";
import hubActivity from "../assets/HubActivity.webp"
import esport1 from "../assets/esports/eSpportsForAll1.webp";
import esport2 from "../assets/esports/eSpportsForAll2.webp";
import esport3 from "../assets/esports/eSpportsForAll3.webp";
import sportCareer1 from "../assets/esports/eSpportsCareer1.webp";
import sportCareer2 from "../assets/esports/eSpportsCareer2.webp";
import sportCareer3 from "../assets/esports/eSpportsCareer3.webp";
import enquireImgEsports from "../assets/enquireImgEsports.webp";
import gamingModal from "../assets/gamingHubModal.webp";

export const participantCardData: IParticipantCardProps[] = [
    {
        id: 1,
        src: participantCard1,
        title: "Career pathways",
        description: "IDF's social enterprise initiatives in rapidly expanding sectors.",
    
    },
    {
        id: 3,
        src: participantCard3,
        title: "Jobs people love",
        description: "A diverse range of job types tailored to individual abilities. ",
       
    },
    {
        id: 4,
        src: participantCard4,
        title: "Lifestyle activities",
        description: "Dive into a range of enriching activities. Explore a more vibrant lifestyle with us.",
        
    },
    {
        id: 2,
        src: participantCard2,
        title: "Coming Soon: The SLES Program!",
        description: "School Leaver Employment Supports ",
     
    },
];
export const growWaysData: IGrowCard[] = [
    {
        id: 1,
        title: "optimise",
        header: "Increased Online Visibility",
        description: "In today's digital age, many customers begin their dining or bar experience online. By adding your menu to Google and Apple Maps, your establishment can appear in more relevant search results. When potential patrons search for specific dishes, ingredients, or drinks, having a detailed menu can place your restaurant or bar at the top of their list."
    },
    {
        id: 2,
        title: "promote",
        header: "Attracting the Right Crowd",
        description: `With accurate and comprehensive menu details, including images and ingredient information, you cater to a diverse range of customers. From the foodies looking for a particular dish to those with dietary restrictions searching for suitable dining options, your establishment becomes their go-to choice.`
    },
    {
        id: 3,
        title: "chat",
        header: "Enhanced Customer Experience",
        description: "No more outdated menus or disappointed customers unable to find that drink or dish they had their heart set on. By keeping your online menu up-to-date on Google and Apple Maps, you ensure a seamless customer journey, from online discovery to the in-person dining experience. This can lead to better reviews, word-of-mouth recommendations, and repeat business."
    }
];
export const growCardData: IGrowCard[] = [
    {
        id: 1,
        title: "optimise",
        header: "Make your menu searchable on Apple Maps and Google",
        description: "We focus on consistently updating your entire menu to Google and Apple Maps, ensuring diners always see your latest offerings. "
    },
    {
        id: 2,
        title: "promote",
        header: "Share your weekly specials across all platforms",
        description: `Our advanced platform automatically detects and <span>posts</span> your specials across key social platforms like Google, Facebook, Instagram, Apple, and LinkedIn.`
    },
    {
        id: 3,
        title: "chat",
        header: "Use Chat Bots to talk to your customers",
        description: "Enhance customer interactions, we integrate <span>chatbots</span> on Google, Facebook, and Instagram, ensuring queries are addressed promptly. With IDF, you're always in the spotlight."
    }
];
export const growCardDataSecondRow: IGrowCard[] = [
    {
        id: 1,
        title: "update",
        header: "Dynamic Menu Updates",
        description: "We focus on consistently updating your entire menu to Google and Apple Maps, ensuring diners always see your latest offerings. "
    },
    {
        id: 2,
        title: "promote",
        header: "Share your weekly specials across all platforms",
        description: `Our advanced platform automatically detects and <span>posts</span> your specials across key social platforms like Google, Facebook, Instagram, Apple, and LinkedIn.`
    },
    {
        id: 3,
        title: "chat",
        header: "Use Chat Bots to talk to your customers",
        description: "Enhance customer interactions, we integrate <span>chatbots</span> on Google, Facebook, and Instagram, ensuring queries are addressed promptly. With IDF, you're always in the spotlight."
    }
];
export const growCardData2: IGrowCard[] = [
    {
        id: 1,
        title: "EFFORTLESS LISTINGS",
        header: "Listing Updates with a Single Touch",
        description: "By connecting* just once to your CRM, our platform ensures that whenever you update a new listing, every solution in our network updates automatically — it's digital magic at work."
    },
    {
        id: 2,
        title: "BE SEEN",
        header: "Automated Social Posting",
        description: "Our platform doesn't just stop at updating listings. It also detects and auto-posts* your new properties across essential platforms - Google, Facebook, Instagram, Apple, and LinkedIn. A wider net means a larger catch of potential clients."
    },
    {
        id: 3,
        title: "ENGAGE MORE",
        header: "Chatbots for Seamless Queries",
        description: "Potential buyers often have immediate questions. Our integrated chatbots* on Google, Facebook, and Instagram ensure these queries get timely responses, elevating the customer's experience. Keep your listings in the spotlight.",
        // header2: "The Bonus Touch",
        // description2:" When you work with IDF, you're not just boosting your agency's digital reach; you're also creating an invaluable impact. Each time you adopt our solutions, someone with an intellectual disability finds purpose and pride by playing a part in growing your business. Your success story is intertwined with theirs, making every sale even more meaningful."
    }
];
export const growCardData3: IGrowCard[] = [
    {
        id: 1,
        title: "CROSS PLATFORM",
        header: "Reach more people on different platforms",
        description: "Be more visible by showing up on different social media platforms. Cross post to get better return on investment."
    },
    {
        id: 2,
        title: "DAILY",
        header: "Increase your following with daily posts",
        description: "With more people using social channels for search, it is more important than ever to increase the frequency of your posts."
    },
    {
        id: 3,
        title: "PROOF",
        header: "Create customer comments to build trust",
        description: "Increasingly potential customers are looking for the endorsement of existing customers on social media before buying."
    }
];
export const impactCardData: IImpactCard[] = [
    {
        id: 1,
        title: "Crafting a Digital Livelihood: The Power of Audience Building",
        img: supportedStories1,
        link: `resources/supported-employment/1`,
        modalTitles:["1", "2"]
    },
    {
        id: 2,
        title: "Harnessing Holistic Health: Wellness Manufacturing",
        img: supportedStories2,
        link: "/resources/supported-employment/2",
           modalTitles:["1", "2"]
    },
    {
        id: 3,
        title: "Joy in Creation: Wellness Manufacturing",
        img: supportedStories3,
        link: "/resources/supported-employment/3"
    },
    {
        id: 4,
        title: "Nurtured Nature: The Magic of Our Garden Centre",
        img: supportedStories4,
        link: "/resources/supported-employment/4"
    },

];
export const DonateCardData: IDonateCard[] = [
    {
        id: 1,
        label: "Donate to IDF",
        title: "Donate now to create supported employment opportunities",
        img: danate1,
        text: "We invest your donations into our social enterprise to create supported employment for people living with disability. Our social enterprise investments generate $100 per annum in wages, from every donar $1 invested. All donations over $2 are tax deductible. ABN 76 389 462 946"
    },
    {
        id: 2,
        label: "Volunteer",
        title: "Build the lifestyle and work skills of people living with disability",
        img: danate2,
        text: "You can volunteer for a once off event or for ongoing activities. We believe in developing our participants skills to provide more meaningful work and richer lives. By sharing your skills in our activities programs, you are investing in their ongoing independence, an investment that can pay dividends for a lifetime."
    },
    {
        id: 3,
        label: "Shop Business Services",
        title: "Our business services create work opportunities for people with disabilities",
        img: danate3,
        text: `Our social enterprise has created expert business services. The business services include: <li style={{listStyle:"inside"}}>Packaging and point of sale processing</li> <li style={{listStyle:"inside"}}>Social media posting services</li> <li style={{listStyle:"inside"}}>Google partner real estate</li> <li style={{listStyle:"inside"}}>Google partner restaurants and cafes</li> <li style={{listStyle:"inside"}}>Corporate hampers and well-being products</li>`
    },
    {
        id: 4,
         label: "Shop our Products",
        title: "",
        img: danate4,
        text: "When you buy products from IDF's social enterprise, you are supporting people living with disability to do the work they love."
    },



];
export const SocialEnterpriseServicesData: IDonateCard[] = [
    {
        id: 1,
        label: "Shop Our Products",
        title: "Our business services create work opportunities for people with disabilities",
        img: danate4,
        text: "When you buy products from IDF's social enterprise, you are supporting people living with disability to do the work they love."
    },
];
export const SocialServicesData: IDonateCard[] = [
    {
        id: 1,
        label: "Become a Business Client",
        title: "Our business services create work opportunities for people with disabilities",
        img: danate3,
        text: "When you buy IDF's business services, you are supporting people living with disability to do the work they love."
    },
];
export const DonateCardDataHeader: IDonateCard[] = [
    {
        id: 1,
        label: "Donate to IDF",
        title: "Donate now to create supported employment opportunities",
        img: danate1,
        text: "We invest your donations into our social enterprise to create supported employment for people living with disability. Our social enterprise investments generate $100 per annum in wages, from every donar $1 invested. All donations over $2 are tax deductible. ABN XXXXXXXXXXXXXX"
    },

];
export const DonateCardDataEnquireCards: IDonateCard[] = [
    {
        id: 1,
        label: "Become a Business Client",
        title: "Our business services create work opportunities for people with disabilities",
        img: danate3,
        text: "When you buy IDF's business services, you are supporting people living with disability to do the work they love."
    },
    {
        id: 2,
        label: "Shop Our Products",
        title: "Our business services create work opportunities for people with disabilities",
        img: danate4,
        text: "When you buy products from IDF's social enterprise, you are supporting people living with disability to do the work they love."
    },

];
export const enterpriseCards: IEnterpriseCard[] = [
    {
        id: 1,
        label: "Social Enterprise",
        title: "Lewis Tutti, Diversity Hub’s video streaming master hits 500K views",
        img: enterpriseCard1,
        category: "social-enterprise"
    },
    {
        id: 2,
        label: "Business Services",
        title: "IDF's manufacturing services appointed by Kellog's for packing services",
        img: enterpriseCard2,
        category: "business-services"
    },
    {
        id: 3,
        label: "Participant Stories",
        title: "Bayside Nursery opens 5 new supported employment positions",
        img: enterpriseCard3,
        category: "participant-stories"
    },

];
export const supportedEmploymentCards: ISupportedEmploymentCard[] = [
    {
        id: 1,
        title: "Our vision",
        img: supportedEmp1,
    },
    {
        id: 2,
        title: "Social enterprise",
        img: supportedEmp2,
        link: "/social-enterprise"
    },
    {
        id: 3,
        title: "Participant services",
        img: supportedEmp3,
        link: "/support"
    },
    {
        id: 4,
        title: "Our organisation",
        img: supportedEmp4,
    },
]
export const keyObjectivesCardSlider: IKeyObjectives[] = [
    {
        id: 1,
        img: keyObj1,
        title: "Opportunities",
        description: "Design and create work opportunities for supported employment.",
        point: 'Working hub to create friendly and supportive work opportunities.',
        point2: "200 new jobs through IDF ventures per annum."
    },
    {
        id: 2,
        img: keyObj2,
        title: "Advocacy",
        description: "Advocate for the needs of supported employment.",
        point: 'IDF submissions to NDIS.',
        point2: "IDF’s corporate education on talent for supported employment."
    },
    {
        id: 3,
        img: keyObj3,
        title: "Innovation",
        description: "Innovate and promote for supported employment.",
        point: 'IDF are a leader in employment opportunities for neurodiverse talent.',
        point2: 'IDF launch new ventures in high growth areas',
    },
    {
        id: 4,
        img: keyObj4,
        title: "Impact",
        description: "Measure and monitor the impact of supported employment.",
        point: 'IDF competencies and proficiencies framework for workplace inclusion and compensation value.',
        point2: "Tracking organizational inclusion of supported employment."
    },
      {
        id: 5,
        img: keyObj1,
        title: "Opportunities",
        description: "Design and create work opportunities for supported employment.",
        point: 'Working hub to create friendly and supportive work opportunities.',
        point2: "200 new jobs through IDF ventures per annum."
    },
    {
        id: 6,
        img: keyObj2,
        title: "Advocacy",
        description: "Advocate for the needs of supported employment.",
        point: 'IDF submissions to NDIS.',
        point2: "IDF’s corporate education on talent for supported employment."
    },
    {
        id: 7,
        img: keyObj3,
        title: "Innovation",
        description: "Innovate and promote for supported employment.",
        point: 'IDF are a leader in employment opportunities for neurodiverse talent.',
        point2: 'IDF launch new ventures in high growth areas',
    },
    {
        id: 8,
        img: keyObj4,
        title: "Impact",
        description: "Measure and monitor the impact of supported employment.",
        point: 'IDF competencies and proficiencies framework for workplace inclusion and compensation value.',
        point2: "Tracking organizational inclusion of supported employment."
    },

]
export const keyObjectivesCard: IKeyObjectives[] = [
    {
        id: 1,
        img: keyObj1,
        title: "Opportunities",
        description: "Design and create work opportunities for supported employment.",
        point: 'Working hub to create friendly and supportive work opportunities.',
        point2: "200 new jobs through IDF ventures per annum."
    },
    {
        id: 2,
        img: keyObj2,
        title: "Advocacy",
        description: "Advocate for the needs of supported employment.",
        point: 'IDF submissions to NDIS.',
        point2: "IDF’s corporate education on talent for supported employment."
    },
    {
        id: 3,
        img: keyObj3,
        title: "Innovation",
        description: "Innovate and promote for supported employment.",
        point: 'IDF are a leader in employment opportunities for neurodiverse talent.',
        point2: 'IDF launch new ventures in high growth areas',
    },
    {
        id: 4,
        img: keyObj4,
        title: "Impact",
        description: "Measure and monitor the impact of supported employment.",
        point: 'IDF competencies and proficiencies framework for workplace inclusion and compensation value.',
        point2: "Tracking organizational inclusion of supported employment."
    },

]
export const opportunitiesDataCards: IOpportunitiesCard[] = [
    {
        id: 1,
        link: "/business-hub",
        src: opportunityCard1,
        title: "Business Hub",
        text: "The <b>Business Hub</b> is an enterprise incubator and accelerator for supported self employment business.",
        text2: "Mentoring, training, contractual work, a co working space and equipment can support business startups to thrive."
    },
    {
        id: 2,
        link: "/activity-hub",
        src: opportunityCard2,
        title: "Activities Hub",
        text: "The <b>Activity Hub</b> provides participants with access to equipment, devices and activities for a rich and rewarding lifestyle.",
    },
    {
        id: 3,
        link: "/employment-hub",
        src: opportunityCard3,
        title: "Employment Hub",
        text: "The <b>Employment Hub</b> offers supported employment recruitment services for participants. The work opportunities include self employment, full time employment and on the job training.",
    },

]
export const opportunitiesDataCardsSlider: IOpportunitiesCard[] = [
    {
        id: 1,
        link: "/business-hub",
        src: opportunityCard1,
        title: "Business Hub",
        text: "The <b>Business Hub</b> is an enterprise incubator and accelerator for supported self employment business.",
        text2: "Mentoring, training, contractual work, a co working space and equipment can support business startups to thrive."
    },
    {
        id: 2,
        link: "/activity-hub",
        src: opportunityCard2,
        title: "Activities Hub",
        text: "The <b>Activity Hub</b> provides participants with access to equipment, devices and activities for a rich and rewarding lifestyle.",
    },
    {
        id: 3,
        link: "/employment-hub",
        src: opportunityCard3,
        title: "Employment Hub",
        text: "The <b>Employment Hub</b> offers supported employment recruitment services for participants. The work opportunities include self employment, full time employment and on the job training.",
    },
    {
        id: 4,
        link: "/business-hub",
        src: opportunityCard1,
        title: "Business Hub",
        text: "The <b>Business Hub</b> is an enterprise incubator and accelerator for supported self employment business.",
        text2: "Mentoring, training, contractual work, a co working space and equipment can support business startups to thrive."
    },
    {
        id: 5,
        link: "/activity-hub",
        src: opportunityCard2,
        title: "Activities Hub",
        text: "The <b>Activity Hub</b> provides participants with access to equipment, devices and activities for a rich and rewarding lifestyle.",
    },
    {
        id: 6,
        link: "/employment-hub",
        src: opportunityCard3,
        title: "Employment Hub",
        text: "The <b>Employment Hub</b> offers supported employment recruitment services for participants. The work opportunities include self employment, full time employment and on the job training.",
    },

]
export const impactCardData2: IImpactCard[] = [
    {
        id: 1,
        title: "Winning professional e-sport trophies",
        img: supportedStories5,
        link: "/blog"
    },
    {
        id: 2,
        title: "Working with Australia's leading brands",
        img: supportedStories6,
        link: "/blog"
    },
    {
        id: 3,
        title: "A passion for wellness blossoms into a new career",
        img: supportedStories7,
        link: "/blog"
    },
    {
        id: 4,
        title: "Discover your green thumb",
        img: supportedStories8,
        link: "/blog"
    },

];
export const cardsCeoData: ICeoCard[] = [
    {
        id: 1,
        img: ceo1,
        name: "Hon Douglas McClelland AC",
        position: "Patron"
    },
    {
        id: 2,
        img: ceo2,
        name: "Michael Price",
        position: "Chief Executive Officer"
    },
    {
        id: 3,
        img: ceo3,
        name: "Mike Dennis",
        position: "Chairman of the Board"
    },
    {
        id: 4,
        img: ceo4,
        name: "Jeff Vella",
        position: "Governor and Director"
    },
    {
        id: 5,
        img: ceo5,
        name: "Spiro Pissas",
        position: "Director"
    },
    {
        id: 6,
        img: ceo6,
        name: "Spiro Pissas",
        position: "Director"
    },
    {
        id: 7,
        img: ceo7,
        name: "Richard Nikolovski",
        position: "Director"
    },
    {
        id: 8,
        img: ceo8,
        name: "Sue Tytherleigh",
        position: "Sustainable Homes"
    },
    {
        id: 9,
        img: ceo9,
        name: "Geoff Vickers",
        position: "Director"
    },
    {
        id: 10,
        img: ceo10,
        name: "Bill Dunn",
        position: "Executive Director"
    },
]
export const cardsManagementData: IManagementCard[] = [
    {
        id: 1,
        img: managementSliderCard1,
        name: "Spiro Pissas",
        position: "Chief Executive Officer<br/><br/>",
        subPosition: "Executive officer and entrepreneur in residence.",
        description: "Spiro joined IDF’ board and management team in 2020, to bring his experience in technology and new ventures to further diversify IDF’s social enterprise. He now serves as the Chief Executive Officer and remains committed to his vision of bringing meaningful and rewarding work to participants.",
        social: "https://ua.linkedin.com"
    },
    {
        id: 2,
        img: managementSliderCard2,
        name: "Brad Burridge",
        position: "General Manager Services<br/><br/>",
        subPosition: "Managing participant service outcomes",
        description: "Brad is a leading Disability Program Manager who is focused on improving work, training and social outcomes for participants. Brad’s management approach spans from strategy to operation and participant experience.",
        social: "https://ua.linkedin.com"
    },
    {
        id: 3,
        img: managementSliderCard3,
        name: "Sunitha Mohanakumaran",
        position: "SLES and Training Manager<br/><br/>",
        subPosition: "Job training and school leaver program for supported employment",
        description: "Sunitha designs and manage programs for the professional development and career pathways in supported employment. Sunitha’s programs includes on the job training and the onboarding of school leavers into the workforce.",
        social: "https://ua.linkedin.com"
    },
    {
        id: 4,
        img: managementSliderCard4,
        name: "Alice Cheng",
        position: "Manager Specially Made<br/><br/>",
        subPosition: "Business Unit Management",
        description: "Alice is an expert training and career coach with extensive experience in FMCG and retail. In line with her own belief that everyone deserves an inspiring career, Alice applies the <b>Love My Work</b> approach to provide rewarding employee experiences. Specially Made is a supported employment social enterprise.",
        social: "https://ua.linkedin.com"
    },
    {
        id: 5,
        img: managementSliderCard4,
        name: "Maria Viola",
        position: "Finance Manager<br/><br/>",
        subPosition: "Business Unit Management",
        description: "Maria Viola is IDF’s manager of finance. Maria applies her background in reviewing and improving the performance of business operations to IDF’s social enterprise entities and ‘go to market’ strategies. IDF’s enterprise forecasting and tracking is based on Maria’s data driven business intelligence.",
        social: "https://ua.linkedin.com"
    },
]
export const businessServiceSupportedCards: ISupportedEmploymentCard[] = [
    {
        id: 10,
        title: "Packing Services",
        img: supportedBusiness5,
    },
    {
        id: 11,
        title: "Digital Marketing",
        img: supportedBusiness6,
        // link: "/real-estate-services"
    },
    {
        id: 3,
        title: "Order Fulfillment",
        img: supportedBusiness7,
        link: "/social-media"
    },
    {
        id: 12,
        title: "Curated Hampers",
        img: supportedBusiness8,
    },
]
export const socialServiceSupportedCards: ISupportedEmploymentCard[] = [
    {
        id: 1,
        title: "Our Enterprise",
        img: supportedBusiness1,
    },
    {
        id: 2,
        title: "Shop Products",
        img: supportedSocial2,
    },
    {
        id: 3,
        title: "Buy Services",
        img: supportedSocial3,

    },
    {
        id: 4,
        title: "Advocacy",
        img: supportedBusiness4,
        link: '/advocacy'
    },
]
export const participantServiceSupportedCards: ISupportedEmploymentCard[] = [
    {
        id: 2,
        title: "Activity Hub",
        img: supportServ2,
        link: "/activity-hub"
    },
    {
        id: 3,
        title: "Employment Hub",
        img: supportServ3,
        link: "/employment-hub"
    },
    {
        id: 4,
        title: "Business Hub",
        img: supportedBusiness4,
        link: "/business-hub"
    },
]
export const forPurposeCard: IPurposeCard[] = [
    {
        id: 1,
        img: keyObjPurpose1,
        title: "Love My Work",
        description: "<p><b>Love My Work</b> is a participant centred approach to work, which  ensures we provide meaningful and rewarding work.</p>",

    },
    {
        id: 2,
        img: keyObjPurpose2,
        title: "Unique abilities",
        description: "We match roles to the natural abilities and interests of our workers. Our clients consistently experience higher quality, productivity and better services outcomes.",

    },
    {
        id: 3,
        img: keyObjPurpose3,
        title: "Over 200 employees",
        description: "Our business services grow year on year, as does our workforce. We are now 200 employees strong. As we grow, so does the diversity of roles we can offer our participants.",

    },
    {
        id: 4,
        img: keyObjPurpose4,
        title: "A trusted provider",
        description: "IDF has been a trusted service provider for leading organisations in Australia including Lindt and Kelloggs. We service over 100 businesses Australia wide.",
    },

]
export const careerCardsData: ICareerCard[] = [
    {
        id: 1,
        img: careerCardGetSupport1,
        title: "Business Hub",
        link: "/business-hub",
        description: "Got a business concept but unsure how to begin? Our dedicated business support services cater to those with entrepreneurial aspirations. Let's have a confidential conversation to guide you forward. ",
    },
    {
        id: 2,
        img: careerCardGetSupport2,
        title: "Activity Hub",
        link: "/activity-hub",
        description: "<p>The classes, resources and activities to keep you fit, healthy, social, independent and creative. We have a non stop program of fun filled activities.</p>",
    },
    {
        id: 3,
        img: careerCardGetSupport3,
        title: "Employment Hub",
        link: "/employment-hub",
        description: "<p>Through our growing social enterprise network, we craft tailored employment opportunities. With a spectrum of careers designed to align with individual skills and passions, our hands-on training ensures you'll be well-equipped and thriving in your chosen profession.</p>",
    },
]
export const careerCardsDataSlider: ICareerCard[] = [
    {
        id: 1,
        img: careerCardGetSupport1,
        title: "Business Hub",
        link: "/business-hub",
        description: "Got a business concept but unsure how to begin? Our dedicated business support services cater to those with entrepreneurial aspirations. Let's have a confidential conversation to guide you forward. ",
    },
    {
        id: 2,
        img: careerCardGetSupport2,
        title: "Activity Hub",
        link: "/activity-hub",
        description: "<p>The classes, resources and activities to keep you fit, healthy, social, independent and creative. We have a non stop program of fun filled activities.</p>",
    },
    {
        id: 3,
        img: careerCardGetSupport3,
        title: "Employment Hub",
        link: "/employment-hub",
        description: "<p>Through our growing social enterprise network, we craft tailored employment opportunities. With a spectrum of careers designed to align with individual skills and passions, our hands-on training ensures you'll be well-equipped and thriving in your chosen profession.</p>",
    },
    {
        id: 5,
        img: careerCardGetSupport1,
        title: "Business Hub",
        link: "/business-hub",
        description: "Got a business concept but unsure how to begin? Our dedicated business support services cater to those with entrepreneurial aspirations. Let's have a confidential conversation to guide you forward. ",
    },
    {
        id: 5,
        img: careerCardGetSupport2,
        title: "Activity Hub",
        link: "/activity-hub",
        description: "<p>The classes, resources and activities to keep you fit, healthy, social, independent and creative. We have a non stop program of fun filled activities.</p>",
    },
    {
        id: 6,
        img: careerCardGetSupport3,
        title: "Employment Hub",
        link: "/employment-hub",
        description: "<p>Through our growing social enterprise network, we craft tailored employment opportunities. With a spectrum of careers designed to align with individual skills and passions, our hands-on training ensures you'll be well-equipped and thriving in your chosen profession.</p>",
    },
]
export const EmploymentHubModalData: IDonateCard[] = [
    {
        id: 1,
        label: "Check job board",
        img: jobBoard,
        text: "Sign up to receive constant updates on the jobs on offer at IDF. We have a different range of jobs to cater to unique interests and abilities.",
        title: "We are posting new jobs weekly",
    },



]
export const ActivityHubModalData: IEmploymentHubModal[] = [
    {
        id: 1,
        label: "Check our program",
        img: checkProgImg,
        text: `Join our 'Transform to Neurodiversity' program`,
    },
]
export const BusinessHubModalData: IEmploymentHubModal[] = [
    {
        id: 1,
        label: "Enquire now",
        img: danate1,
        text: "Register now....."
    },

]
export const BusinessHubModalProgramData: IDonateCard[] = [
    {
        id: 1,
        label: "Start a business",
        img: coWork,
        text: "Backed by the support of Business Mentors and a fully equipped co working venue, the Business Hub can keep you connected to opportunities.",
        title: "Find new opportunities for your business."
    },
]
export const ActivityHubModalProgramData: IDonateCard[] = [
    {
        id: 1,
        label: "Check our Activities",
        img: hubActivity,
        text: "Lifestyle, entertainment, fitness classes and so much more, the Activity Hub is a place to learn new things and meet new people.",
        title: "Stay updated on our  non stop program of activities"
    },
]
export const EmploymentHubModalDataEnquire: IEmploymentHubModal[] = [
    {
        id: 2,
        label: "Enquire Now",
        img: enquireImg,
        text: "Talk to one of our employment advisors to better understand your employment options",
        title:"Work with us to find your new career"
    },
]
export const AdvocacyHubModalDataEnquire: IEmploymentHubModal[] = [
    {
        id: 2,
        label: "Enquire Now",
        text: "Talk to one of our employment advisors to better understand your employment options",
        title:"Work with us to find you new career"
    },
]

export const GamingHubModalProgramData: IDonateCard[] = [
    {
        id: 1,
        label: "Join Us",
        img: gamingModal,
        text: "",
        title: ""
    },
]
export const becomeGamer: IDonateCard[] = [
    {
        id: 1,
        label: "Become an IDF Gamer",
        img: gamingModal,
        text: "",
        title: ""
    },
]
export const ExpansiveModalDataEnquire: IEmploymentHubModal[] = [
    {
        id: 2,
        label: "Enquire Now",
        text: "Talk to one of our digital marketing experts to find out which solution is right for you",
        // title:"Work with us to find you new career"
    },
]
export const BusinessHubModalDataEnquire: IEmploymentHubModal[] = [
    {
        id: 2,
        label: "Enquire Now",
        img: enquireImgBusiness,
        text: "Our experienced business mentors will get your business off to a good start. Make an appointment today.",
        title:"Consult our business mentors" 
    },
]
export const ActivityHubModalDataEnquire: IEmploymentHubModal[] = [
    {
        id: 2,
        label: "Enquire Now",
        img: enquireImgActivity,
        text: "Our activities coordinators can answer your questions about our full program of activities.",
        title:"Talk to us to find the right activities for you" 
    },
]
export const EsportsbModalDataEnquire: IEmploymentHubModal[] = [
    {
        id: 2,
        label: "Enquire Now",
        img: enquireImgEsports,
        text: "We can talk you through the process of training to become an e-sports professional. We talk you through the rewards and challenges you will experience along the way, and how we are here to support you, every step of the way.​",
        title:"Talk our E-Sports Careers Coordinator to find out if E-Sports is for you." 
    },
]

export const waysCareerCard: IPurposeCard[] = [
    {
        id: 1,
        img: "/careerAdvice.svg",
        title: "On The Job Training",
        description: "Our tailored training fosters skill development and confidence in an inclusive environment, empowering individuals to realise their career goals.",

    },
    {
        id: 2,
        img: "/workReplacement.svg",
        title: "Wellness Brand",
        description: "Join Our Wellness Brand's Exciting Journey",

    },
    {
        id: 3,
        img: "/jobTraining.svg",
        title: "Job Variety",
        description: "Diverse Roles Ignite Career Passion Daily",

    },
]
export const waysActivityCard: IPurposeCard[] = [
    {
        id: 1,
        img: "/careerAdvice.svg",
        title: "Diverse Offerings",
        description: "From crafts to cooking, the Activity Hub's range of activities caters to various interests, ensuring there's something for everyone.",

    },
    {
        id: 2,
        img: "/workReplacement.svg",
        title: "Skill Development",
        description: "Whether it's honing artistic abilities, mastering recipe, or levelling up in a game, the Activity Hub offers opportunities to learn and grow.",

    },
    {
        id: 3,
        img: "/jobTraining.svg",
        title: "Community Connection",
        description: "Engage with like-minded individuals, forge  friendships, and be a part of a community that celebrates shared passions and pursuits.",

    },
]
export const waysBusinessCard: IPurposeCard[] = [
    {
        id: 1,
        img: "/careerAdvice.svg",
        title: "TAILORED SUPPORT",
        description: "Access individualised mentoring and resources designed to amplify your unique talents and potential.",

    },
    {
        id: 2,
        img: "/workReplacement.svg",
        title: "COMMUNITY OF PEERS",
        description: "Collaborate and connect with a like-minded community, embracing different perspectives and celebrating neurodiverse strengths.​",

    },
    {
        id: 3,
        img: "/jobTraining.svg",
        title: "EMPOWERMENT",
        description: "Step into an environment that recognises and values your brilliance, providing you the platform to reshape the future of business.",

    },
]
export const waysGamingCard: IPurposeCard[] = [
    {
        id: 1,
        img: "/careerAdvice.svg",
        title: "Life Changing Skills",
        description: "Gaming Hub activities are designed to improve your digital and complex problem solving skills contributing to your professional and personal development.​",

    },
    {
        id: 2,
        img: "/workReplacement.svg",
        title: "Tournaments",
        description: "Gaming Hub will give you the opportunity to be participate or be a spectator as our Gaming team take on the world. Compete within the hub and across the world.",

    },
    {
        id: 3,
        img: "/jobTraining.svg",
        title: "Professional Gaming",
        description: "The Gaming and Growth Hub will coach exceptional players to step up to a professional level. Aspiring professional gamers will find resources and opportunities, at the Gaming and Growth Hub.",

    },
]
export const itemsForYouCard: IPurposeCard[] = [
    {
        id: 1,
        img: itemsForYou1,
        title: "IDF are leaders",
        description: "IDF leads in crafting work opportunities that celebrate the unique talents within our neurodiverse workspaces, all across our three locations in the St George area.",
    },
    {
        id: 2,
        img: itemsForYou2,
        title: "Work environments",
        description: "Spaces designed to highlight your strengths and fuel your passion. Work with ease in our welcoming surroundings.",
    },
    {
        id: 3,
        img: itemsForYou3,
        title: "Set career goals",
        description: "Define your career goals and hone skills while immersed in real-world tasks. Elevate your career with hands-on, on-the-job training",
    },
    {
        id: 4,
        img: itemsForYou4,
        title: "Be your own boss",
        description: "Have a vision or idea and aspire to be your own boss? Let IDF handle the intricacies of compliance and accounting, so you can fully concentrate on bringing your business idea to life.",
    },
    {
        id: 5,
        img: itemsForYou1,
        title: "IDF are leaders",
        description: "IDF leads in crafting work opportunities that celebrate the unique talents within our neurodiverse workspaces, all across our three locations in the St George area.",
    },
    {
        id: 6,
        img: itemsForYou2,
        title: "Work environments",
        description: "Spaces designed to highlight your strengths and fuel your passion. Work with ease in our welcoming surroundings.",
    },
    {
        id: 7,
        img: itemsForYou3,
        title: "Set career goals",
        description: "Define your career goals and hone skills while immersed in real-world tasks. Elevate your career with hands-on, on-the-job training",
    },
    {
        id: 8,
        img: itemsForYou4,
        title: "Be your own boss",
        description: "Have a vision or idea and aspire to be your own boss? Let IDF handle the intricacies of compliance and accounting, so you can fully concentrate on bringing your business idea to life.",
    },

]
export const itemsForYouActivitiesCard: IPurposeCard[] = [
        {
        id: 4,
        img: itemsForYou4,
        title: "Creative Workshops",
        description: "Dive into a world of creativity at the Activity Hub. Whether you're a seasoned artist or someone looking to explore a new hobby, there's a space for you to express, learn, and grow. Plus, our workshops are a fantastic way to meet fellow enthusiasts and share your passion.",
    },
    {
        id: 1,
        img: itemsForYou1,
        title: "Music and Dance Nights",
        description: "Feel the rhythm and lose yourself in the music at our Music and Dance Nights. Whether you prefer classical, rock, or pop, there’s a night tailored for you.  It's a night of joy, energy, and connection, where everyone is invited to join the dance floor.",
    },
    {
        id: 3,
        img: itemsForYou3,
        title: "Gaming Tournaments",
        description: "Gamers unite! The Activity Hub is home to some thrilling gaming tournaments. Whether you're into console gaming, PC showdowns, or board games, we've got an event for you. Compete, collaborate, and celebrate the world of gaming with fellow enthusiasts.",
    },
    {
        id: 2,
        img: itemsForYou2,
        title: "Culinary Adventures",
        description: "Discover the joy of cooking and baking at our Culinary Adventures. Led by passionate foodies, participants can learn everything from the basics of cooking to gourmet recipes, our kitchen is your playground. And the best part? Getting to savour your delicious creations at the end.",
    },
    
     {
        id: 5,
        img: itemsForYou1,
        title: "Artistic Expressions",
        description: "Dive into painting, sketching, or drawing sessions. Express yourself freely and discover your artistic side. On our Socials, see posts from some of our recent activities to learn more about what is on offer ",
    },
     


]
export const itemsForYouBusinessCard: IPurposeCard[] = [
    {
        id: 1,
        img: itemsForYou1,
        title: "Strategic Blueprint",
        description: "Tailored business planning sessions to navigate your venture's path with clarity and purpose.",
    },
    {
        id: 2,
        img: itemsForYou2,
        title: "Workspace Excellence",
        description: "Dive into our dedicated office space, equipped with cutting-edge tools and equipment, designed to supercharge your productivity.",
    },
    {
        id: 3,
        img: itemsForYou3,
        title: "Financial Mastery",
        description: "Leverage our top-tier bookkeeping services, ensuring your financial records are precise and optimised.",
    },
    {
        id: 4,
        img: itemsForYou4,
        title: "Funding Prospects",
        description: "Explore potential investment opportunities, offering the financial boost your business needs to soar.",
    },
    {
        id: 5,
        img: itemsForYou1,
        title: "Strategic Blueprint",
        description: "Tailored business planning sessions to navigate your venture's path with clarity and purpose.",
    },
    {
        id: 6,
        img: itemsForYou2,
        title: "Workspace Excellence",
        description: "Dive into our dedicated office space, equipped with cutting-edge tools and equipment, designed to supercharge your productivity.",
    },
    {
        id: 7,
        img: itemsForYou3,
        title: "Financial Mastery",
        description: "Leverage our top-tier bookkeeping services, ensuring your financial records are precise and optimised.",
    },
    {
        id: 8,
        img: itemsForYou4,
        title: "Funding Prospects",
        description: "Explore potential investment opportunities, offering the financial boost your business needs to soar.",
    },
]
export const itemsForYouGamingCard: IPurposeCard[] = [
    {
        id: 1,
        img: itemsForYou1,
        title: "More Than Games",
        description: "Beyond the adrenaline-charged matches, our centre becomes a vibrant social nexus. Here, gamers come to bond, share, and foster friendships that transcend digital avatars. It's a place where like-minded individuals can forge connections rooted in shared passions.",
    },
    {
        id: 2,
        img: itemsForYou2,
        title: "Learning Grounds​",
        description: "The games we champion aren't merely about high scores or flashy victories. They instil and sharpen crucial life skills, from effective communication and negotiation to intricate strategy formulation. Through every quest, challenge, and digital skirmish, our gamers hone abilities that resonate profoundly in real-world scenarios.",
    },
    {
        id: 3,
        img: itemsForYou3,
        title: "Empowering Platforms​",
        description: "Dive deeper, and you'll find a flourishing ecosystem tailored for digital-age expression. Our gaming enthusiasts have the opportunity to channel their experiences into compelling narratives on platforms like YouTube and Twitch. With hands-on training in content editing and digital storytelling, we don't just game; we inspire and entertain. ​",
    },
    {
        id: 4,
        img: itemsForYou4,
        title: "Business Acumen",
        description: "The journey doesn't stop at gaining followers. With the right guidance and resources, our budding content creators learn the nuances of monetising their passion, transforming their digital presence into sustainable, impactful ventures.",
    },
    {
        id: 5,
        img: itemsForYou1,
        title: "More Than Games",
        description: "Beyond the adrenaline-charged matches, our centre becomes a vibrant social nexus. Here, gamers come to bond, share, and foster friendships that transcend digital avatars. It's a place where like-minded individuals can forge connections rooted in shared passions.",
    },
    {
        id: 6,
        img: itemsForYou2,
        title: "Learning Grounds",
        description: "The games we champion aren't merely about high scores or flashy victories. They instil and sharpen crucial life skills, from effective communication and negotiation to intricate strategy formulation. Through every quest, challenge, and digital skirmish, our gamers hone abilities that resonate profoundly in real-world scenarios.",
    },
    {
        id: 7,
        img: itemsForYou3,
        title: "Empowering Platforms",
        description: "Dive deeper, and you'll find a flourishing ecosystem tailored for digital-age expression. Our gaming enthusiasts have the opportunity to channel their experiences into compelling narratives on platforms like YouTube and Twitch. With hands-on training in content editing and digital storytelling, we don't just game; we inspire and entertain. ​",
    },
    {
        id: 8,
        img: itemsForYou4,
        title: "Business Acumen",
        description: "The journey doesn't stop at gaining followers. With the right guidance and resources, our budding content creators learn the nuances of monetising their passion, transforming their digital presence into sustainable, impactful ventures.",
    },
]
export const stepsCards: IStepsCard[] = [
    {
        id: 1,
        header: '01',
        title: "Register Interest. Kickstart your journey by expressing your eagerness.",
        btnText: "Register now"
    },
    {
        id: 2,
        header: '02',
        title: "Goal Setting. Sit down with a team member to outline and discuss your career aspirations.",
        btnText: "Book an appointment",
        href: "https://calendly.com/idfstgeorge",
    },
    {
        id: 3,
        header: '03',
        title: "Experience Firsthand. Join us for hands-on work experience to get a feel for the role.",
        btnText: "Book an appointment",
        href: "https://calendly.com/idfstgeorge",
    },
    {
        id: 4,
        header: '04',
        title: "On-the-Job Training. Benefit from tailored training sessions to enhance your skills effectively.",
        btnText: "Book an appointment",
        href: "https://calendly.com/idfstgeorge",
    },
    {
        id: 5,
        header: '05',
        title: "Diverse Opportunities. Embrace the chance to work across various fields and discover your true passion.",
        btnText: "Book an appointment",
        href: "https://calendly.com/idfstgeorge",
    },
]
export const stepsCardsActivity: IStepsCard[] = [
    {
        id: 2,
        header: '01',
        title: "Check our calendar of events for activities that appeal to you",
        btnText: "Get the calendar"
    },
    {
        id: 1,
        header: '02',
        title: "Register for a chosen Activity Hub or join our welcome nights for new memebers",
        btnText: "Register now",

    },
    {
        id: 3,
        header: '03',
        title: "Lifestyle skills, keep me updated on ongoing learning programs such as smart phones, photography, cooking and budgeting",
        btnText: "Keep me updated",

    },
    {
        id: 4,
        header: '04',
        title: "Special request, whenever we can, we will work to meet your special requests. Talk to our Activity coordinators to find our more",
        btnText: "Book an appointment",
        href: "https://calendly.com/idfstgeorge",
    },
    {
        id: 5,
        header: '05',
        title: "Socials, see posts from some of our recent activities to learn more about what is on offer",
        btnText: "Visit socials",

    },
]
export const stepsCardsBusiness: IStepsCard[] = [
    {
        id: 1,
        header: '01',
        title: "Transform your vision into reality: Let's kickstart your business journey together.​",
        btnText: "Book an appointment",
        href: "https://calendly.com/idfstgeorge",

    },

    {
        id: 2,
        header: '02',
        title: "Schedule a chat: Dive deep into your business idea with our expert consultation​",
        btnText: "Book an appointment",
        href: "https://calendly.com/idfstgeorge",
    },

    {
        id: 3,
        header: '03',
        title: "Skill Up: Equip yourself with essential business skills through our tailored training modules​",
        btnText: "Book an appointment",
        href: "https://calendly.com/idfstgeorge",

    },
    {
        id: 4,
        header: '04',
        title: "Navigate the business maze: From ideation to execution, we've got you covered​",
        btnText: "Book an appointment",
        href: "https://calendly.com/idfstgeorge",
    },
    {
        id: 5,
        header: '05',
        title: "Accelerate growth: Tap into our resources and watch your business flourish​",
        btnText: "Book an appointment",
        href: "https://calendly.com/idfstgeorge",
    },
]
export const stepsCardsGaming: IStepsCard[] = [
    {
        id: 1,
        header: '01',
        title: "Explore our non stop program of gaming activities.",
        btnText: "Get the program",
        // href: "https://calendly.com/idfstgeorge",

    },

    {
        id: 2,
        header: '02',
        title: "Talk to a Gaming Co Ordinator to find out the gaming activities that work for you.​",
        btnText: "Book an appointment",
        href: "https://calendly.com/idfstgeorge",
    },

    {
        id: 3,
        header: '03',
        title: "Learn game streaming mastery: enhance skills, engage audiences, and monetise gameplay",
        btnText: "Get a Coach",
        // href: "https://calendly.com/idfstgeorge",

    },
    {
        id: 4,
        header: '04',
        title: "Improve your skills with our Gaming Coaching sessions. Talk to a Gaming Coach to get started.​",
        btnText: "Book an appointment",
        href: "https://calendly.com/idfstgeorge",
    },
    {
        id: 5,
        header: '05',
        title: "Aspiring Professional Gamers can connect with a mentor from the Gaming and Growth Hub.​",
        btnText: "Book an appointment",
        href: "https://calendly.com/idfstgeorge",
    },
]
export const videoCardsData: IVideoCardsProps[] = [
    {
        id: 1,
        url: "https://www.youtube.com/watch?v=wsrr27HEq4E",
        light: videoImg1,
        title: "Getting started as a participant"
    },
    {
        id: 2,
        url: "https://www.youtube.com/watch?v=wsrr27HEq4E",
        light: videoImg2,
        title: "How to get started as a Business Services client"
    },
    {
        id: 3,
        url: "https://www.youtube.com/watch?v=wsrr27HEq4E",
        light: videoImg3,
        title: "Hear our advocates talk about the future of neuro diverse work"
    },

]
export const neurodiversityCardsData: IPurposeCard[] = [
    {
        id: 1,
        img: neurodiversityCard1,
        title: "What is neurodiversity?",
        description: "Neurodiversity represents the different ways people’s brains work. 15% of the population are ND, including people living with Autism, ADHD, geniuses and Intellectual Disability.",
    },
    {
        id: 2,
        img: neurodiversityCard2,
        title: "What is a neurodiverse organisation?",
        description: "It is an organisation that better reflects the distribution of neurodiversity in the population. These organisations are designed around the skills of the differently abled.",
    },
    {
        id: 3,
        img: neurodiversityCard3,
        title: "How does neurodiversity make a difference?",
        description: "When organisations employ ND talent they experience new perspectives and value. These  organisations achieve uplifts in engagement, productivity and innovation.",
    },
]

export const eSportsCardsData: IPurposeCard[] = [
    {
        id: 1,
        img: esport1,
        title: "Developing e-sports talent​",
        description: "Our e-sports initiative aims to foster and promote talent among gaming enthusiasts with disabilities. We are creating a platform where they can receive professional training, participate in global tournaments, and pave the way for a career in e-sports.​",
    },
    {
        id: 2,
        img: esport2,
        title: "Changing perceptions, one game at a time​",
        description: "Through this initiative, we hope to change societal perceptions about disabilities. We want to demonstrate that when given the right opportunities, individuals with disabilities can excel in any field, including the fast-paced world of e-sports.​",
    },
    {
        id: 3,
        img: esport3,
        title: "Careers in E-Sports​",
        description: "​Esports offers inclusive opportunities for individuals with disabilities, including roles in gaming, coaching, streaming, and event management. Adaptability and skill define success in this thriving industry.​",
    },
]


export const neurodiversityTransformationCardsData: IPurposeCard[] = [
    {
        id: 4,
        img: neurodiversityTransformCard1,
        title: "Is neurodiversity right for your organisation?",
        description: "Many of the roles and responsibilities in your organisation will be enhanced by ND employees. A mindset and process shift will make your team ready.",
    },
    {
        id: 5,
        img: neurodiversityTransformCard2,
        title: "Build a ND workforce",
        description: "By understanding how the relative strength of neurodiverse talent maps across your required capabilities you will be ready to build a neurodiverse  workforce.",
    },
    {
        id: 6,
        img: neurodiversityTransformCard3,
        title: "Partner with a ND social enterprise",
        description: "IDF have a range of business services which employ neurodiverse talent. Your organisation can outsource services and manufacturing to one of our many social enterprises.",
    },
]
export const esportStartCareerCardsData: IPurposeCard[] = [
    {
        id: 4,
        img: sportCareer1,
        title: "Our training centre​",
        description: "We will set up state-of-the-art gaming and training centre equipped with the latest technology. Our centre will cater to the specific needs of our players, ensuring they have the best environment to hone their skills.​",
    },
    {
        id: 5,
        img: sportCareer2,
        title: "Mentor Programs​",
        description: "Seasoned e-sports professionals will mentor our players, guiding them through game strategies, team dynamics, and personal branding",
    },
    {
        id: 6,
        img: sportCareer3,
        title: "Global Tournaments​",
        description: "IDF plans to host and participate in e-sports tournaments, giving our players the exposure they deserve and showcasing their prowess to the world.​",
    },
]
export const toolsCards: IStepsCard[] = [
    {
        id: 1,
        header: '',
        title: "Is your organisation blocking neurodivergent talent  in the recruitment process",
        btnText: "Take our quick self assessment",
        href:"/neurodiversity-hire-process"
    },
    {
        id: 2,
        header: '',
        title: "Do you have the ND organisation mindset?",
        btnText: "Get our check list",
        href:"/neuro-inclusive-mindset"

    },
    {
        id: 3,
        header: '',
        title: "See neurotypical people through the ND lens",
        btnText: "Get the fact sheet",
        href:"/neurodiverse-workforce"

    },
]
export const advocacySuccessCardData: IImpactCard[] = [
    {
        id: 1,
        title: "Car detailing in a dealership",
        img: advCard1,
        link: "/resources/:category/:id"
    },
    {
        id: 2,
        title: "Code testing in tech companies",
        img: advCard2,
        link: "/resources/:category/:id"
    },
    {
        id: 3,
        title: "Food packing",
        img: advCard3,
        link: "/resources/:category/:id"
    },
    {
        id: 4,
        title: "Digital design",
        img: advCard4,
        link: "/resources/:category/:id"
    },

];
export const advocacyCardsData: ICareerCard[] = [
    {
        id: 1,
        img: advBusiness,
        title: "Business Hub",
        link: "/business-hub",
        description: "<p>The <b>Business Hub</b> is an enterprise incubator and accelerator for supported self employment business.<br/><br/> Mentoring, training, contractual work, a co working space and equipment can support business startups to thrive.</p>",
    },
    {
        id: 2,
        img: advActivity,
        title: "Activity Hub",
        link: "/activity-hub",
        description: "<p>The <b>Activity Hub</b> provides participants with access to equipment, devices and activities for a rich and rewarding lifestyle.</p>",
    },
    {
        id: 3,
        img: advEmployment,
        title: "Employment Hub",
        link: "/employment-hub",
        description: "<p>The <b>Employment Hub</b> offers supported employment recruitment services for participants. The work opportunities include self employment, full time employment and on the job training.</p>"
    }
]


