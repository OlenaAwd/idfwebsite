export interface IParticipantCardProps {
    id: number,
    src: string,
    title: string,
    description: string,
    // link: string

}

export interface IGrowCard {
    id: number,
    title: string,
    header: string,
    description: string,
    classes?: string,
    header2?: string,
    description2?: string,

}
export interface IImpactCard {
    id: number,
    title: string,
    img: string,
    link: string,
    modalTitles?: string[],
    descr?: string
}

export interface IEsportCard {
    id: number,
    span: string,
    img: string,
}


export interface IDonateCard {
    id: number,
    title: string,
    img: string,
    text: string,
    label: string,

}
export interface IEmploymentHubModal {
    id: number,
    img?: string,
    label: string,
    text?: string
    title?: string,
    header?:string
}

export interface IEnterpriseCard {
    id: number,
    title: string,
    img: string,
    label: string,
    category: string
}
export interface ISupportedEmploymentCard {
    id: number,
    title: string,
    img: string,
    link?: string

}

export interface IKeyObjectives {
    id: number,
    title: string,
    img: string,
    description: string,
    point: string,
    point2: string,
     point3?: string,


}
export interface IdataSliderMultiple {
    src?: string,
    srcSm?: string,
    hoverText?: string,
    span?: string,
    id?:number
}
export interface IOpportunitiesCard {
    src: string,
    title: string,
    text: string,
    text2?: string
    id: number
    link: string
}
export interface ICeoCard {
    img: string,
    name: string,
    position: string,
    id: number
}
export interface IManagementCard {
    img: string,
    name: string,
    position: string,
    subPosition: string,
    description: string,
    social: string,
    id: number
}
export interface IPurposeCard {
    id: number,
    title: string,
    img: string,
    description: string,
    classes?: string,
    customBody?:string
}
export interface IHoverCards {
    // id: number,
    img: string,
    hoverText: string,
    text?: string,
    title:string
    // imgSmall: string


}

export interface ISliderLastSection {
    id: number,
    src: string
    title: string,
    description: string,
    url?: string,
    subTitle?:string
}
export interface ICareerCard {
    id: number,
    img: string,
    title: string,
    description: string
    link?: string

}
export interface IStepsCard {
    id: number,
    header: string,
    title: string,
    btnText: string,
    href?: string
}

export interface IHubPersonCard {
    id: number,
    src: string,
    title: string,
    section: string,
    text: string,

}

export interface IVideoCardsProps {
    url?: string;
    light?: string;
    title?: string;
    id: number;
    src?: string
}
export interface IHistoryCard {
    id: number,
    year: number,
    description: string,
    src: string
}

export interface IhoverArr{
    hover: string,
    hoverLink:string,
    id?:string,
}

export interface IServicesProps{
    id: number,
    span: string,
    hoverText?: string,
    src?:string,
    pageRef?:string,
    hoverArr?:IhoverArr[]
    
}