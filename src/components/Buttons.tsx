import React from 'react';
import { ArrowRight } from 'lucide-react';

const LINKS = {
  enrollment: "http://eepurl.com/i6wuL2",
  guide: "https://docs.google.com/document/d/e/2PACX-1vQaFuCZywjM-rhVIw1s0uAT871YzBsnaJM_kZQeAMSKy_ys2QiCa7lkAZzC0h6mM1KVioGj0TVuFsa1/pub",
  teamSignup: "https://docs.google.com/forms/d/e/1FAIpQLScbXlyvULZH6sab1uCoRo6q179LNlPUDCX4OF_SAuUgC0QS9g/viewform?usp=dialog",
  coach: "/coach",
  webinar: "https://www.youtube.com/watch?v=AnCFtKQ3CZI"
} as const;

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'orange';
  disabled?: boolean;
}

const Button = ({ href, children, variant = 'primary', disabled = false }: ButtonProps) => {
  const baseStyles = "w-4/5 h-12 px-8 rounded-lg transition-colors inline-flex items-center justify-center gap-2 shadow-lg ring-1 ring-white/50";
  
  const variantStyles = {
    primary: "bg-green-600 text-white hover:bg-green-700/90",
    secondary: "bg-cyan-700 backdrop-blur-sm text-white hover:bg-cyan-600",
    orange: "orange-button text-white"
  };

  const disabledStyles = "opacity-50 cursor-not-allowed pointer-events-none";

  return (
    <>
      <style>
        {`
          .orange-button {
            background-color: #CB4D14;
            transition: background-color 0.2s;
          }
          .orange-button:hover {
            background-color: #A23D0F;
          }
        `}
      </style>
      <a
        href={disabled ? undefined : href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${baseStyles} ${variantStyles[variant]} ${disabled ? disabledStyles : ''}`}
      >
        <span className="pointer-events-none">{children}</span>
        <ArrowRight className="w-5 h-5 pointer-events-none" />
      </a>
    </>
  );
};

export const ButtonGroup = () => (
  <div className="flex flex-col items-center justify-center gap-4 max-w-lg mx-auto">
    <Button href={LINKS.teamSignup} variant="primary">
      Team Application Form
    </Button>
    <Button href={LINKS.guide} variant="primary">
      Team Information Guide
    </Button>
    <Button href={LINKS.enrollment} variant="secondary">
      Get Email Updates
    </Button>
    {/*
    <Button href={LINKS.webinar} variant="secondary">
      Watch Information Webinar
    </Button>*/}
    <Button href={LINKS.coach} variant="orange">
      Become a coach
    </Button>
  </div>
);

export default ButtonGroup;