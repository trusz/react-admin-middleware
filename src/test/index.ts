import { describe } from "mocha";
import Filter from "./suits/filter";
import Paging from "./suits/paging";
import Sorting from "./suits/sorting";

const ReactAdminMiddleware = () => {
    describe("Middleware: React-Admin", () => {

        // TODO: test concerns
        // All middleware parts have to cope with two kinds of parameters
        //  1. The attribute is a direct attribute e.g.: "id", "corpDirId"
        //  2. The attribute is a path to an attribute e.g.: "name.first", "e4.coprDirId"

        // Furthere concerns:
        //  - undefined values
        //  - empty values: ""
        //  - falsy values that are correct values e.g.: empty e4/e3

        Filter();
        Paging();
        Sorting();
    });
};

export default ReactAdminMiddleware;
