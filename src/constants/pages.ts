interface IPageNav {
    page: string;
    url: string;
}

export const pages: IPageNav[] = [
    { page: "Home", url: "/" },

];

export const pagesForHome: IPageNav[] = [

    { page: "About", url: "/about" },
    { page: "Resources", url: "/resources" },
];

export const pagesForFooter: IPageNav[] = [
    { page: "NDIS Privacy", url: "/ndis-privacy" },
    { page: "Website Disclaimer", url: "/website-disclaimer" },
    { page: "Privacy Policy", url: "/privacy-policy" },
    { page: "Refund Policy", url: "/refund-policy" },
    { page: "Tax Receipts", url: "/tax-receipts" },
];

export const subPages: IPageNav[] = [
    { page: "Get Support", url: "/support" },
    { page: "Businesses", url: "/business-services" },
    { page: "Social Enterprise", url: "/social-enterprise" },
];

export const volunteerSelect: Array<string> = [
    'Business Mentor',
    'Sports Coach',
    'Skills training',
    'Administration',
    'Lifestyle coach',
];

export const serviceSelect: Array<string> = [
    'Google Restaurant services',
    'Google Real Estate services',
    'Social Media Posts',
    "Specially Made Well-Being Products",
    'IDF Corporate Hampers',
    'Manufacturing Fulfillment Services',
    'Packaging and Point of Sale Display Services'
];
export const employmentHubSelect: Array<string> = [
    'Contact Me about mentoring',
];
export const employmentHubSelectCheck: Array<string> = [
    'Keep me updated on recent jobs',
];
export const businessHubSelect: Array<string> = [
    'Connect me to a business mentor.',
];
export const activityHubSelect: Array<string> = [
    'Keep me updated with upcoming activities',
    'Register me as a Activity Hub member',
    'Send me a Calendar of events'
];

export const gamingHubSelect: Array<string> = [
    'Join the Gaming and Growth Hub',
    ' Enquire about the Gaming Hub events',
    'Get a program of upcoming activities',
    'Get a Gaming Coach'
];

export const productSelect: Array<string> = [
    'Bayside Nursery',
    'Specially Made Well-Being Products',
    'Gourmet Hampers',
];

export const diversityHubSelect: Array<string> = [
    'Activity Hub',
    'Employment Hub',
    'Business Hub',
    'Gaming Hub',
];

export const chooseSupportSelect: Array<string> = [
    'Support Coordinator',
    'Supported Employment',
    'Business Start Up support',
    'Business Mentor',
    'Lifestyle activities',
    'E-Sports careers',
    'Gaming'
];

export const interestSelect: Array<string> = [
    'Is ND right for our organisation?',
    'Building a ND workforce',
    'Partnering with a ND social enterprise',

];


export const subPagesChild: IPageNav[] = [
    { page: "Business", url: "/business-services" },
    { page: "Restaurant Google Services", url: "/restaurant-services" },
    { page: "Real Estate Google Services", url: "/real-estate-services" },
    // { page: "Social Media Services", url: "/social-media" },
     { page: "Expansive Network", url: "/expansive-network" },
    // { page: "Hamper", url: "/hamper" },
    { page: "Specially Made", url: "/specially-made" },
    { page: "Packing", url: "/packing" },
];


export const supportPagesChild: IPageNav[] = [
    { page: "Support Services", url: "/support" },
    { page: "Employment Hub", url: "/employment-hub" },
    { page: "Business Hub", url: "/business-hub" },
    { page: "Activities Hub", url: "/activity-hub" },
    { page: "Gaming Hub >", url: "/gaming-hub" },
];
export const gamingHubChildren: IPageNav[] = [
    { page: "E-Sports", url: "/e-sports" },
];



export const SocialEnterprisePagesChild: IPageNav[] = [
    { page: "Social Enterprise", url: "/social-enterprise" },
    { page: "Advocacy", url: "/advocacy" },
];


