import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useAuth } from "../../../../app/components/auth";

interface UserDetails {
  name: string;
}

const HeaderUserMenu = () => {
  const [userDetails, setUserDetails] = useState<UserDetails | null>(null);
  const { currentUser, logout } = useAuth();

  useEffect(() => {
    if (currentUser) {
      const { name } = currentUser as unknown as UserDetails;
      setUserDetails({ name });
    }
  }, [currentUser]);

  return (
    <div
      className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 
                  menu-state-bg menu-state-primary fw-bold py-4 fs-6 w-275px"
      data-kt-menu="true"
    >
      <div className="menu-item px-3">
        <div className="menu-content d-flex align-items-center px-3">
          <div className="symbol symbol-50px me-5">
            <span className="symbol-label bg-light-primary text-primary fw-bold fs-3">
              {userDetails?.name?.charAt(0)}
            </span>
          </div>

          <div className="d-flex flex-column">
            {userDetails?.name && (
              <div className="fw-bolder d-flex align-items-center fs-5">
                {userDetails.name}
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="separator my-2"></div>
      <div className="menu-item px-5" onClick={logout}>
        <span className="menu-link px-5">Sign Out</span>
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
const connectComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderUserMenu);
export default connectComponent;
