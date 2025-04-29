// components/FeaturesAnimatedBackground.tsx
import React from 'react';

const FeaturesAnimatedBackground = () => {
  return (
    <div className="absolute inset-0 z-0">
      <div className="w-full h-full bg-gradient-to-r from-purple-500/30 via-blue-500/30 to-indigo-500/30 animate-pulse blur-md opacity-50" />
      <div className="w-full h-full bg-[url('/grain.png')] bg-repeat opacity-[0.05] mix-blend-overlay" />
    </div>
  );
};

export default FeaturesAnimatedBackground;
