'use client';

import React from 'react';
import Lottie from 'lottie-react';

interface LottieWrapperProps {
  animationData: object;
  className?: string;
  loop?: boolean;
}

export default function LottieWrapper({ animationData, className, loop = true }: LottieWrapperProps) {
  return <Lottie animationData={animationData} loop={loop} className={className} />;
}
