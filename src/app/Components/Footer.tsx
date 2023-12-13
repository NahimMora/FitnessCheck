import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white p-8">
      <div className="container mx-auto flex flex-col items-center">
        <h1 className="text-3xl font-extrabold mb-4">¡Gracias por visitarnos!</h1>
        <p className="text-lg mb-4">Explora nuestras páginas y descubre más.</p>
        <div className="flex space-x-4">
          <Link href={'/'} className="hover:text-gray-300">Inicio</Link>
          <Link href={'/imccalculator'} className="hover:text-gray-300">Calcular IMC</Link>
          <Link href={'/cdcalculator'} className="hover:text-gray-300">Calcular calorias diarias</Link>
        </div>
        <div className="mt-4">
          <p className="text-sm">@ Todos los derechos reservados</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
