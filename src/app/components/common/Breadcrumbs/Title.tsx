import { Link, useLocation, useParams } from "react-router-dom";
import { capitalizeFirstLetter } from "../../../helpers/helperFunction";

export interface props {
  title: any;
}

const Title: React.FC<props> = ({ title }) => {
  const location = useLocation();
  const params = useParams();


  const crumbs = location.pathname.split("/").filter((crumb: any) => crumb !== "");


  return (
    <div>
      <div id="kt_app_toolbar" className="app-toolbar pb-3 pb-lg-6">
        <div id="kt_app_toolbar_container" className="d-flex flex-stack">
          <div
            id="kt_page_title"
            data-kt-swapper="true"
            data-kt-swapper-mode="prepend"
            data-kt-swapper-parent="{default: '#kt_content_container', 'lg': '#kt_toolbar_container'}"
            className="page-title d-flex flex-wrap me-3 flex-column justify-content-center"
          >
            <h1 className="page-heading d-flex text-dark fw-bold fs-3 my-0 flex-column justify-content-center text-capitalize">
              {capitalizeFirstLetter(title).replace(/-/g, " ")}
            </h1>
            <ul className="breadcrumb breadcrumb-separatorless fw-semibold fs-7 my-0">
              {crumbs &&
                crumbs.map((crumb: any, i: any) => {
                  if (i === crumbs.length - 1) {
                    return null;
                  }
                  return (
                    <li className="breadcrumb-item text-muted">
                      <Link className="text-muted text-hover-primary text-capitalize" to={""}>
                        {capitalizeFirstLetter(crumb).replace(/-/g, " ")}
                      </Link>
                    </li>
                  );
                })}
              <li className="breadcrumb-item">
                <span className="bullet bg-gray-400 w-5px h-2px"></span>
              </li>
              <li className="breadcrumb-item text-dark text-capitalize">{crumbs && capitalizeFirstLetter(crumbs[crumbs.length - 1]).replace(/-/g, " ")}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Title;
