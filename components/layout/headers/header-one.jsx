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
import "./header.css"

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
                includedLanguages: 'en,hi,th,fr',
                layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
              },
              'google_translate_element'
            );
          }
        `}
      </Script>
      {/* <div className="header-wrapper flex flex-row"> */}
      {/* Top Bar */}
      <div className="topBar__one">
        <div className="custom__container">
          <div className="row al-center">
            <div className="col-lg-8">
              <div className="topBar__one-left lg-t-center">
                <ul>
                  <li>
                    <Link href="tel:+1234567890">
                      <i className="fa fa-phone"></i> Telephone: +6627116723
                    </Link>
                  </li>
                  <li>
                    <Link href="tel:+1234567890">
                      <i className="fa fa-phone"></i> Fax: +6627116724
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="topBar__one-right t-right lg-t-center">
                <div id="google_translate_element" className="check-text"></div>
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
