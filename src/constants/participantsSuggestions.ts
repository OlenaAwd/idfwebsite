import { IServicesProps } from "../types/cardType";

export const participantData: IServicesProps[] = [
    {
        id: 1,
        span: "Employment",
        hoverArr: [
            {
                hover: "E-Sports >",
                hoverLink: "/e-sports",
                id:""
            },
            {
                hover: "Wellness Product Production >",
                hoverLink: "/",
                id:"group"
            },
             {
                hover: "Garden Centre >",
                hoverLink: "/",
                id:"group"
            },
            {
                hover: "Packing >",
                hoverLink: "/support",
                id:"yourChoice"
            },
             {
                hover: "Social Media Marketing >",
                hoverLink: "/",
                id:"group"
            },
              {
                hover: "Digital Marketing >",
                hoverLink: "/",
                id:"group"
            },
        ]
        // hover: "E-Sports<br/>Wellness Product Production<br/>Garden Centre<br/>Packing<br/>Social Media Marketing<br/>Digital Marketing",
        // link: '/employment-hub'
        
    },
     {
        id: 2,
        span: "Gaming",
        hoverText: "Dungeons and Dragons<br />Board Games<br/>Video Games",
        src: '/activity-hub'
    },
    {
        id: 3,
        span: "School Leavers",
        src: '/activity-hub'
    },
     {
        id: 4,
        span: "Support Coordination",
        src: '/employment-hub'
    },
    {
        id: 5,
        span: "Activity Hub",
        hoverText:"Day Trips<br/>Movie nights<br/>Sports nights<br/>Ladies only",
        src: '/activity-hub'
    },
    // {
    //     id: 6,
    //     title: "Learning",
    //     hover:"Cooking<br/>Life Skills",
    //     link: '/activity-hub'
    // },
]