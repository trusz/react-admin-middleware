import { Request, Response } from "express";

export const Page = (body: any, req: Request, res: Response) => {
    if (!Array.isArray(body)) {
        return body;
    }

    res.setHeader("x-total-count", body.length);
    body = body.slice(req.query._start, req.query._end);

    return body;
};
