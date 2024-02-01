import site from "../assets/footerIcons/siteIcon.svg";
import email from "../assets/footerIcons/emailIcon.svg";
import phone from "../assets/footerIcons/phoneIcon.svg";


export interface IContacts {
    id: number;
    src: string;
    text: string;
    href: string;
}

export const footerContactsData: IContacts[] = [
    {
        id: 2,
        src: site,
        href: `http://idfstgeorge.org.au`,
        text: "www.idfstgeorge.org.au",
    },
    {
        id: 3,
        src: email,
        href: `mailto:admin@idfstgeorge.org.au`,
        text: "admin@idfstgeorge.org.au"
    },
    {
        id: 4,
        src: phone,
        href: `tel: 02 8566 2800`,
        text: "02 8566 2800"
    },
]