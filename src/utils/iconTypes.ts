import React from 'react';

// Type for icon components that can be used as JSX elements
export type IconComponent = React.ComponentType<React.SVGProps<SVGSVGElement>>;

// Helper function to ensure icons are properly typed
export const createIconComponent = (icon: React.ComponentType<React.SVGProps<SVGSVGElement>>): IconComponent => icon; 