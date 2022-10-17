import styled from '@emotion/styled';
import React, { useCallback, useEffect, useState } from 'react';

type Props = {
  end: number;
  start?: number;
  duration?: number;
  fontSize?: number;
  fontWeight?: number;
  color?: string;
};

const CountUp = ({
  end,
  start = 0,
  duration = 2000,
  fontSize = 1,
  fontWeight = 400,
  color = 'black',
}: Props) => {
  const [count, setCount] = useState(start);
  const frameRate = 1000 / 60;
  const totalFrame = Math.round(duration / frameRate);

  const easeOutExpo = useCallback((target: number): number => {
    return target === 1 ? 1 : 1 - Math.pow(2, -10 * target);
  }, []);

  useEffect(() => {
    let currentNumber = start;
    const counter = setInterval(() => {
      const progress = easeOutExpo(++currentNumber / totalFrame);
      setCount(Math.round(end * progress));

      if (progress === 1) {
        clearInterval(counter);
      }
    }, frameRate);
  }, [end, frameRate, start, totalFrame, easeOutExpo]);

  return (
    <Wrapper fontSize={fontSize} fontWeight={fontWeight} color={color}>
      {count}
    </Wrapper>
  );
};

const Wrapper = styled.span<{
  fontSize: number;
  fontWeight: number;
  color: string;
}>`
  font-size: ${(props) => props.fontSize}rem;
  font-weight: ${(props) => props.fontWeight};
  color: ${(props) => props.color};
`;

export default CountUp;
