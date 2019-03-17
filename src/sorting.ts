import { Request, Response } from "express";
import { get } from "lodash";
import { lowerCaseValue } from "src/common/lower-case-value";

export const Sort = (body: any, req: Request, res: Response) => {
    if (!Array.isArray(body)) {
        return body;
    }

    const [attribute, direction] = extractAttributeAndDirection(req);

    body.sort(sort.bind(undefined, attribute, direction));

    return body;
};

enum Direction {
    DESC = "DESC",
    ASC = "ASC",
}

function extractAttributeAndDirection(req: Request): [string, Direction] {
    return [req.query._sort, req.query._order];
}

function sort(
    attribute: string /* bound */,
    direction: Direction /* bound */,
    a: any,
    b: any,
) {
    const weight = direction === Direction.ASC ? 1 : -1;
    const valueA = lowerCaseValue(a, attribute);
    const valueB = lowerCaseValue(b, attribute);

    if (valueA < valueB) {
        return 1 * weight;
    }
    if (valueA > valueB) {
        return -1 * weight;
    }
    return 0;
}
