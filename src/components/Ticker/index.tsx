import React, { FC, useEffect, useRef } from 'react';
interface ITickerProps {
  content: JSX.Element;
}

const Ticker: FC<ITickerProps> = ({ content }) => {
  const tickerRef = useRef<HTMLDivElement>(null);
  const repeatCount = 10;

  useEffect(() => {
    if (tickerRef.current) {
      const tickerElement = tickerRef.current;

      const animateTicker = () => {
        const scrollAmount = 1;
        tickerElement.scrollLeft += scrollAmount;

        if (
          tickerElement.scrollLeft >=
          tickerElement.scrollWidth - tickerElement.clientWidth
        ) {
          tickerElement.scrollLeft = 0;
        }
      };

      let animationFrameId: number;

      const tick = () => {
        animateTicker();
        animationFrameId = requestAnimationFrame(tick);
      };

      tick();

      return () => {
        cancelAnimationFrame(animationFrameId);
      };
    }
  }, []);
  return (
    <div
      ref={tickerRef}
      style={{
        whiteSpace: 'nowrap',
        overflow: 'hidden',
      }}
    >
      {Array.from({ length: repeatCount }).map((_, index) => (
        <React.Fragment key={index}>{content}</React.Fragment>
      ))}
    </div>
  );
};

export default Ticker;
