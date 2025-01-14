import React from 'react';
import { ArrowRight } from 'lucide-react';

const LINKS = {
  enrollment: "http://eepurl.com/i6wuL2",
  guide: "https://docs.google.com/document/d/1lFUwltHkN_1iTulBAh7R6xNkGb4fVHUpwUDBU_pT5Mk/edit?usp=sharing",
  teamSignup: "https://docs.google.com/forms/d/e/1FAIpQLScbXlyvULZH6sab1uCoRo6q179LNlPUDCX4OF_SAuUgC0QS9g/viewform?usp=dialog",
  coachSignup: ""
} as const;

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
}

const Button = ({ href, children, variant = 'primary', disabled = false }: ButtonProps) => {
  const baseStyles = "w-4/5 h-12 px-8 rounded-lg transition-colors inline-flex items-center justify-center gap-2 shadow-lg ring-1 ring-white/50";
  const variantStyles = {
    primary: "bg-green-600 text-white hover:bg-green-700/90",
    secondary: "bg-white/20 backdrop-blur-sm text-white hover:bg-white/30"
  };
  const disabledStyles = "opacity-50 cursor-not-allowed pointer-events-none";
  
  const button = (
    <a
      href={disabled ? undefined : href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseStyles} ${variantStyles[variant]} ${disabled ? disabledStyles : ''}`}
    >
      <span className="pointer-events-none">{children}</span>
      <ArrowRight className="w-5 h-5 pointer-events-none" />
    </a>
  );

  return button;
};

export const ButtonGroup = () => (
  <div className="flex flex-col items-center justify-center gap-4 max-w-lg mx-auto">
    <Button href={LINKS.guide} variant="primary">
      Read Information Guide
    </Button>
    <Button href={LINKS.enrollment} variant="secondary">
      Sign up for Enrollment Updates
    </Button>
    <Button href={LINKS.teamSignup} variant="secondary">
      Team Enrollment Form
    </Button>
    <Button href={LINKS.coachSignup} variant="secondary" disabled={true}>
      Coach Enrollment Form (coming soon)
    </Button>
  </div>
);