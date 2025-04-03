import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-primary w-full p-6 md:flex md:text-sm">
      <div className="md:w-48 mb-12">
        <p className="text-white text-left ">
          Travaillez plus intelligemment, collaborez plus efficacement. Essayez
          WorkSphere maintenant !
        </p>
        <button className="bg-white text-primary rounded-md p-1 px-2 mt-4 hover:border-2 hover:border-white hover:bg-primary hover:text-white active:bg-btn-actif">
          Démarrer
        </button>
      </div>
      <div className="ml-auto">
        <h4 className="uppercase text-teal-400 text-sm mt-8 lg:mt-0">pages</h4>
        <nav className="text-white flex list-none gap-4 md:flex-col md:gap-1">
          <Link href="/">Home</Link>
          <Link href="/tarifs">About us</Link>
          <Link href="/tarifs">Services</Link>
          <Link href="/tarifs">Community</Link>
        </nav>
      </div>

      <div className="mt-4 md:-mt-8 lg:ml-4">
        <h4 className="uppercase text-teal-400 text-sm mt-8">contacts</h4>
        <address className="text-white">
          <a href="mailto:webmaster@example.com">Hello@logoipsum.com</a>
          <br />
          190 Lorem Ipsum, Lyon 69000
        </address>
      </div>
      <div className="md:self-end">
        <p className="text-white mt-8">© 2023 — Copyright</p>
      </div>
    </div>
  );
};

export default Footer;
