import React from 'react';
import { ArrowRight } from 'lucide-react';

const LINKS = {
  enrollment: "http://eepurl.com/i6wuL2",
  guide: "https://docs.google.com/document/d/1lFUwltHkN_1iTulBAh7R6xNkGb4fVHUpwUDBU_pT5Mk/edit?usp=sharing"
} as const;

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
}

const Button = ({ href, children, variant = 'primary' }: ButtonProps) => {
  const baseStyles = "w-4/5 h-12 px-8 rounded-lg transition-colors inline-flex items-center justify-center gap-2 shadow-lg ring-1 ring-white/50";
  const variantStyles = {
    primary: "bg-green-600 text-white hover:bg-green-700/90",
    secondary: "bg-white/20 backdrop-blur-sm text-white hover:bg-white/30"
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseStyles} ${variantStyles[variant]}`}
    >
      <span className="pointer-events-none">{children}</span>
      <ArrowRight className="w-5 h-5 pointer-events-none" />
    </a>
  );
};

export const ButtonGroup = () => (
  <div className="flex flex-col items-center justify-center gap-4 max-w-lg mx-auto">
    <Button href={LINKS.enrollment} variant="primary">
      Sign up for Enrollment&nbsp;Updates
    </Button>
    <Button href={LINKS.guide} variant="secondary">
      Read Information Guide
    </Button>
  </div>
);