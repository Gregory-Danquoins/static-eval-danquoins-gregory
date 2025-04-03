import React from "react";
import Link from "next/link";

const MobilMenu = () => {
  return (
    <div className="fixed w-full top-12 z-30 flex justify-center items-center bg-black p-6 uppercase">
      <nav>
        <ul className="text-white flex flex-col gap-4">
          <Link href="/">Home</Link>
          <Link href="/tarifs">About us</Link>
          <Link href="/tarifs">Services</Link>
          <Link href="/tarifs">Community</Link>
        </ul>
      </nav>
    </div>
  );
};

export default MobilMenu;
