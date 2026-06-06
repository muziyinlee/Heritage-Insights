import React from 'react';

interface AdPlaceholderProps {
  className?: string;
  format?: 'horizontal' | 'vertical' | 'rectangle';
}

/**
 * A dedicated component for Google AdSense blocks.
 * Designed to hold space and prevent Layout Shift before ads load.
 */
export default function AdPlaceholder({ className = '', format = 'horizontal' }: AdPlaceholderProps) {
  // Determine standard ad sizes to prevent shift
  const formatClasses = {
    horizontal: "h-[90px] w-full max-w-[728px] mx-auto",
    rectangle: "h-[250px] w-[300px] mx-auto",
    vertical: "h-[600px] w-[160px] mx-auto"
  };

  return (
    <div className={`my-8 bg-slate-100 flex flex-col items-center justify-center border border-slate-200 text-slate-400 text-sm italic rounded-sm overflow-hidden ${formatClasses[format]} ${className}`}>
      <span className="mb-1">Advertisement</span>
      <span className="text-xs">
        {/*
          TODO: Insert your AdSense ins tag here like:
          <ins className="adsbygoogle"
              style={{display:'block'}}
              data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
              data-ad-slot="XXXXXXXXXX"
              data-ad-format="auto"
              data-full-width-responsive="true"></ins>
        */}
      </span>
    </div>
  );
}
