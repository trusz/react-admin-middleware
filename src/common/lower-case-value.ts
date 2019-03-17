import { get } from "lodash";

export const lowerCaseValue = (obj: object, path: string) => {
    return get(obj, path, "").toString().toLowerCase();
};
