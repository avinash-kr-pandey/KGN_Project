import Link from "next/link";
import React from "react";

const Social = () => {
  return (
    <>
      <ul>
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
      </ul>
    </>
  );
};

export default Social;
