import Link from "next/link";

const BreadCrumb = ({ title, innerTitle, backgroundImage }) => {
  return (
    <div
      className="breadcrumb__area"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="breadcrumb__area-content">
              <h1>{title}</h1>
              <ul>
                <li>
                  <Link href="/">Home</Link>
                  <i className="fa-regular fa-angle-right"></i>
                </li>
                <li>{innerTitle}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreadCrumb;
