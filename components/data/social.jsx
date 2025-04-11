import Link from "next/link";
import React from "react";

const Social = () => {
  return (
    <div className="flex flex-wrap justify-start gap-4">
      <ul className="flex gap-4">
        <li>
          <Link href="https://www.facebook.com" target="_blank">
            <i className="fab fa-facebook-f"></i>
          </Link>
        </li>
        <li>
          <Link href="https://www.linkedin.com" target="_blank">
            <i className="fab fa-linkedin-in"></i>
          </Link>
        </li>
        <li>
          <Link href="https://www.youtube.com" target="_blank">
            <i className="fab fa-youtube"></i>
          </Link>
        </li>
        <li>
          <Link href="https://line.me" target="_blank">
            <i className="fab fa-line"></i>
          </Link>
        </li>
        <li>
          <Link href="https://www.tiktok.com" target="_blank">
            <i className="fab fa-tiktok"></i>
          </Link>
        </li>
        <li>
          <Link href="https://www.instagram.com" target="_blank">
            <i className="fab fa-instagram"></i>
          </Link>
        </li>
        <li>
          <Link href="https://www.whatsapp.com" target="_blank">
            <i className="fab fa-whatsapp"></i>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Social;
