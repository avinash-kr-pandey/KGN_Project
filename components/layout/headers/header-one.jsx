"use client";
import { MdOutlineArrowDropDown } from "react-icons/md";
import Link from "next/link";
import MainMenu from "./header-menu";
import Search from "./search";
import { useState } from "react";
import SideBar from "./offcanvas";
import logo1 from "../../../public/assets/img/LogoKGE.png";
import logo2 from "../../../public/assets/img/LogoKGE.png";
import MobileMenuPopup from "./mobile-menu/menu-area";
import i18n from "i18next";
import { useTranslation } from "react-i18next";

const HeaderOne = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [menuSidebar, setMenuSidebar] = useState(false);
  const [search, setSearch] = useState(false);
  const { t, i18n } = useTranslation();

  const handleLanguageChange = (event) => {
    const selectedLang = event.target.value;
    i18n.changeLanguage(selectedLang); // Update the language dynamically
  };

  return (
    <>
      <div className="topBar__one">
        <div className="custom__container">
          <div className="row al-center">
            <div className="col-lg-8">
              <div className="topBar__one-left lg-t-center">
                <ul>
                  <li>
                    <Link href="mailto:need.help@gmail.com">
                      <i className="flaticon-envelope"></i>{" "}
                      {t("needHelp")}: need.help@gmail.com
                    </Link>
                  </li>
                  <li>
                    <Link href="https://google.com/maps">
                      <i className="flaticon-placeholder"></i>{" "}
                      {t("address")}: 2464 Royal Ln., Mesa, NJ 45463
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="topBar__one-right t-right lg-t-center">
                <div className="topBar__one-right-social">
                  <label
                    htmlFor="language-select"
                    className="px-2"
                    style={{ color: "gray" }}
                  >
                    {t("chooseLanguage")}
                  </label>
                  <select
                    id="language-select"
                    onChange={handleLanguageChange}
                    className="select"
                    style={{
                      backgroundColor: "transparent",
                      border: "none",
                      color: "gray",
                    }}
                  >
                    <option value="en">{t("english")}</option>
                    <option value="th">{t("thai")}</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="header__area">
        <div className="custom__container">
          <div className="header__area-menubar">
            <div className="">
              <div className="header__area-menubar-left-logo">
                <Link href="/">
                  <img src={logo1.src} alt="logo" />
                </Link>
              </div>
            </div>
            <div className="header__area-menubar-center">
              <div className="header__area-menubar-center-menu">
                <MainMenu />
              </div>
            </div>
            <div className="header__area-menubar-right">
              <div className="header__area-menubar-right-search">
                <div className="search">
                  <span
                    className="header__area-menubar-right-search-icon open"
                    onClick={() => setSearch(true)}
                  >
                    <i className="fal fa-search"></i>
                  </span>
                </div>
              </div>
              <div className="header__area-menubar-right-sidebar">
                <div
                  className="header__area-menubar-right-sidebar-popup-icon"
                  onClick={() => setSidebarOpen(true)}
                >
                  <i className="flaticon-menu-2"></i>
                </div>
              </div>
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
      <SideBar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
      <MobileMenuPopup
        isOpen={menuSidebar}
        setIsOpen={setMenuSidebar}
        popupLogo={logo2}
        addClass=""
      />
      <Search isOpen={search} setIsOpen={setSearch} />
    </>
  );
};

export default HeaderOne;
