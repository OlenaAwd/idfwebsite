import React, {FC, DetailedHTMLProps, ImgHTMLAttributes } from 'react';


interface BaseImg extends DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> {
  fetchpriority?: string; 
  loading?:'eager' | 'lazy';
  decoding?: 'async' | 'auto' | 'sync';
  width?:string;
  height?:string
}
const PriorityImgComponent: FC<BaseImg> = ({ src, alt, fetchpriority,loading, decoding, ...props }) => {
    return <img {...props} src={src} alt={alt} decoding={decoding} loading={loading} />;
}

export default PriorityImgComponent