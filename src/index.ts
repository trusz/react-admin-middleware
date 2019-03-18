import { Request, RequestHandler, Response } from "express";
import mung from "express-mung";
import { Filter } from "./filtering";
import { Page } from "./paging";
import { Sort } from "./sorting";

export const ReactAdmin: RequestHandler = mung.json(
    (body: any, req: Request, res: Response) => {
        const filteredBody = Filter(body, req);
        const sortedBody = Sort(filteredBody, req, res);
        const pagedBody = Page(sortedBody, req, res);

        return pagedBody;
    },
);
