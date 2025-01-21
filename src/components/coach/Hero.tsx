import React from 'react';
import Image from 'next/image';

export default function Hero() {
  return (
    <header className="py-16 bg-orange-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <picture className="relative block mb-12">
            <source srcSet="/images/logo_backpack.webp" type="image/webp" />
            <Image
              src="/images/logo_backpack.jpg"
              alt="Arizona Farm to School Collaborative"
              width={600}
              height={600}
              className="mx-auto w-full sm:w-3/4 md:w-auto max-w-lg"
            />
          </picture>
          {/* Main Title */}
          <h1 className="text-3xl md:text-4xl font-bold text-orange-700 mb-12">
            Become a Farm to School Coach with the Arizona&nbsp;Farm to School Collaborative!
          </h1>
          {/* Spanish Translation Notice */}
          <div className="text-xl text-gray-900">
            <p className="italic">
              Si necesita servicios de traducción para participar, envíe un correo electrónico a{' '}
              <a
                href="mailto:f2scollaborative@mollenfoundation.org"
                className="text-orange-700 hover:text-orange-800 underline"
              >
                f2scollaborative@mollenfoundation.org
              </a>
              {' '}-- se habla español.
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}