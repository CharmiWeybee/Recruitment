import { getRole } from "./AuthHelpers";

export const actionsRole = {
  VIEW_FILE: "VIEW_FILE",
  ONLY_ADMIN: "ONLY_ADMIN",
};

const mappings = new Map();

mappings.set(actionsRole.VIEW_FILE, ["Admin"]);
mappings.set(actionsRole.ONLY_ADMIN, ["Employee"]);

function hasPermission(action: any) {
  const role = getRole();

  if (!role) {
    return false;
  }

  if (mappings.has(action) && role) {
    return mappings.get(action).includes(role);
  }

  return false;
}

export default hasPermission;
