import React, { useEffect, useState } from "react";
import clsx from "clsx";
import { connect } from "react-redux";

import HeaderUserMenu from "../../../partials/layout/header-menus/HeaderUserMenu";
import { useAuth } from "../../../../app/components/auth";

const itemClass = "ms-1 ms-lg-3";
const userAvatarClass = "symbol-35px symbol-md-40px";

interface UserDetails {
  name: string;
}

const Navbar = () => {
  const [userDetails, setUserDetails] = useState<UserDetails | null>(null);
  const { currentUser } = useAuth();

  useEffect(() => {
    if (currentUser) {
      const { name } = currentUser as unknown as UserDetails;
      setUserDetails({ name });
    }
  }, [currentUser]);

  return (
    <div className="app-navbar flex-shrink-0">
      <div className={clsx("app-navbar-item", itemClass)}>
        <div
          className={clsx("cursor-pointer symbol", userAvatarClass)}
          data-kt-menu-trigger="{default: 'click', lg: 'hover'}"
          data-kt-menu-attach="parent"
          data-kt-menu-placement="bottom-end"
        >
          <div className="symbol symbol-50px">
            <span className="symbol-label bg-light-primary text-primary fw-bold fs-4">
              {userDetails?.name?.charAt(0)}
            </span>
          </div>
        </div>
        <HeaderUserMenu />
      </div>
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {};
};

const mapDispatchToProps = (dispatch: any) => {
  return {};
};
const connectComponent = connect(mapStateToProps, mapDispatchToProps)(Navbar);
export default connectComponent;
