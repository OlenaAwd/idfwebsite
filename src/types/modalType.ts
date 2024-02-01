import { ReactNode } from "react";

export interface IModalProps {
    children?: JSX.Element | string,
    classes?: string;

}
export interface IModalNeurodiversityProps {
    children: ReactNode;
    classes?: string;
    btn: string;
    stylesText?:string
}

export interface IModalParticipantCardProps {
    title: string,
    btnTitle:string,
    children?: JSX.Element,
    isAboutPage?: boolean,
    descr?: string,
    img?: string,
}