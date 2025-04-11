"use client";
import Link from "next/link";
import MainMenu from "./header-menu";
import Search from "./search";
import { useState, useEffect } from "react";
import SideBar from "./offcanvas";
import logo1 from "../../../public/assets/img/LogoKGE.png";
import logo2 from "../../../public/assets/img/LogoKGE.png";
import MobileMenuPopup from "./mobile-menu/menu-area";
import { useTranslation } from "react-i18next";
import Script from "next/script";
import "./header.css";
import { FaWhatsapp } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { IoLogoTiktok } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { FaLine } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io5";

const HeaderOne = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [menuSidebar, setMenuSidebar] = useState(false);
  const [search, setSearch] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const observer = new MutationObserver(() => {
      const selected = document.querySelector(".goog-te-combo")?.value;
      if (selected) {
        const languageMap = {
          en: "English",
          th: "Thai",
        };
        setSelectedLanguage(languageMap[selected] || "English");
      }
    });

    const translateElement = document.getElementById(
      "google_translate_element"
    );
    if (translateElement) {
      observer.observe(translateElement, { childList: true, subtree: true });
    }

    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    document.body.style.overflow =
      menuSidebar || sidebarOpen ? "hidden" : "auto";
  }, [menuSidebar, sidebarOpen]);

  return (
    <>
      {/* Google Translate Scripts */}
      <Script
        id="google-translate"
        strategy="lazyOnload"
        src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
      />
      <Script id="google-translate-init" strategy="lazyOnload">
        {`
    function googleTranslateElementInit() {
      new google.translate.TranslateElement(
        {
          pageLanguage: 'en',
          includedLanguages: 'en,th', // Only English and Thai
          layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
        },
        'google_translate_element'
      );
    }
  `}
      </Script>

      {/* <div className="header-wrapper flex flex-row"> */}
      {/* Top Bar */}
      <div className="topBar__one border">
        <div className="custom__container">
          <div className="row al-center">
            <div className="col-lg-8">
              <div className="topBar__one-left lg-t-center">
                <ul className="flex items-center">
                  <li>
                    <Link href="tel:+1234567890">
                      <i className="fa fa-phone"></i> +66 27116723
                    </Link>
                  </li>
                  <li className="ml-4">
                    <Link href="tel:+1234567890">
                      <i className="fa fa-phone"></i> +66 27116724
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="d-flex justify-content-between align-items-center">
                <ul className="d-flex list-unstyled mb-0 gap-4">
                  <li className="mr-3">
                    <a
                      href="https://wa.me/your-whatsapp-number"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaWhatsapp
                        color="white"
                        size={25}
                        className="hover:scale-105 cursor-pointer transition-transform duration-300"
                      />
                    </a>
                  </li>
                  <li className="mr-3">
                    <a
                      href="https://www.instagram.com/your-instagram-profile"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <IoLogoInstagram
                        color="white"
                        size={25}
                        className="hover:scale-105 cursor-pointer transition-transform duration-300"
                      />
                    </a>
                  </li>
                  <li className="mr-3">
                    <a
                      href="https://www.tiktok.com/@your-tiktok-profile"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaLine
                        color="white"
                        size={25}
                        className="hover:scale-105 cursor-pointer transition-transform duration-300"
                      />
                    </a>
                  </li>
                  <li className="mr-3">
                    <a
                      href="https://wa.me/your-whatsapp-number"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <IoLogoYoutube
                        color="white"
                        size={25}
                        className="hover:scale-105 cursor-pointer transition-transform duration-300"
                      />
                    </a>
                  </li>
                  <li className="mr-3">
                    <a
                      href="https://wa.me/your-whatsapp-number"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaFacebook
                        color="white"
                        size={25}
                        className="hover:scale-105 cursor-pointer transition-transform duration-300"
                      />
                    </a>
                  </li>
                  <li className="mr-3">
                    <a
                      href="https://wa.me/your-whatsapp-number"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <IoLogoTiktok
                        color="white"
                        size={25}
                        className="hover:scale-105 cursor-pointer transition-transform duration-300"
                      />
                    </a>
                  </li>
                </ul>

                <div
                  id="google_translate_element"
                  className="check-text ml-4"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Header */}
      <div className="header__area">
        <div className="custom__container">
          <div className="header__area-menubar">
            <div className="header__area-menubar-left-logo">
              <Link href="/">
                <img src={logo1.src} alt="logo" />
              </Link>
            </div>
            <div className="header__area-menubar-center">
              <div className="header__area-menubar-center-menu">
                <MainMenu />
              </div>
            </div>
            <div className="header__area-menubar-right">
              <div className="header__area-menubar-right-btn">
                <Link className="btn-one" href="/request-quote">
                  {t("talkWithUs")}
                </Link>
              </div>
              <div className="header__area-menubar-right-responsive-menu menu__bar">
                <i
                  className="flaticon-menu-2"
                  onClick={() => setMenuSidebar(true)}
                ></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}

      <SideBar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
      <MobileMenuPopup
        isOpen={menuSidebar}
        setIsOpen={setMenuSidebar}
        popupLogo={logo2}
      />
      <Search isOpen={search} setIsOpen={setSearch} />
    </>
  );
};

export default HeaderOne;
