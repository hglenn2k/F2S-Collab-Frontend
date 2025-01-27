import React from 'react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const LINKS = {
  enrollment: "https://docs.google.com/forms/d/e/1FAIpQLSfFPNv-5-HKQc_BGQvBcJVodQKQ_VaBw7umYC4kAxgpwp9Beg/viewform?usp=dialog",
  email: "http://eepurl.com/i6wuL2",
  guide: "https://docs.google.com/document/d/e/2PACX-1vTz-cnCokOYkRa5vEt_3sPjHvs-7mvjR53PUU1Zva8AU_t5q7eLYyumv5gVdwumXkfCC4ZGs8Fo5TOk/pub",
  webinar: "https://www.youtube.com/watch?v=AnCFtKQ3CZI",
  home: "/"
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
  const className = `${baseStyles} ${variantStyles[variant]} ${disabled ? disabledStyles : ''}`;

  const content = (
    <>
      <span className="pointer-events-none">{children}</span>
      <ArrowRight className="w-5 h-5 pointer-events-none" />
    </>
  );

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
      {href === LINKS.home ? (
        <Link href={href} className={className}>
          {content}
        </Link>
      ) : (
        <a
          href={disabled ? undefined : href}
          target="_blank"
          rel="noopener noreferrer"
          className={className}
        >
          {content}
        </a>
      )}
    </>
  );
};

export const CoachButtonGroup = () => (
  <div className="flex flex-col items-center justify-center gap-4 max-w-lg mx-auto">
    <Button href={LINKS.enrollment} variant="primary">
        Coach Application Form
    </Button>
    <Button href={LINKS.guide} variant="primary">
      Coach Information Guide
    </Button>
    <Button href={LINKS.email} variant="orange">
      Get Email Updates
    </Button>
    <Button
      href={LINKS.webinar}
      variant="orange"
    >
      Watch Information Webinar
    </Button>
    <Button href={LINKS.home} variant="secondary">
      Not a coach? Back to Main Page
    </Button>
  </div>
);

export default CoachButtonGroup;