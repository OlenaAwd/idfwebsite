import React, { FC, useEffect, useRef, useState } from 'react';

interface LazyImageProps {
  src: string | undefined;
  alt: string | undefined;
  width?: number | string;
  height?: number | string;
  style?: React.CSSProperties;
}

const LazyImgComponent: FC<LazyImageProps> = ({ src, alt, width, height, style }) => {
  const imageRef = useRef<HTMLImageElement | null>(null);
  const [isIntersecting, setIsIntersecting] = useState<boolean>(false);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          observer.unobserve(entry.target);
        }
      });
    });

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => {
      if (imageRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(imageRef.current);
      }
    };
  }, []);
  return (
    <img
      ref={imageRef}
      src={isIntersecting ? src : ''}
      alt={alt}
      //   width={width}
      //   height={height}
      loading="lazy"
    />
  );
};

export default LazyImgComponent;
