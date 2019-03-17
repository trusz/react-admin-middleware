import { Request, Response } from "express";
import { lowerCaseValue } from "src/common/lower-case-value";

export const Filter = (body: any, req: Request) => {
    const filter = extractFilter(req);
    if (Array.isArray(body)) {
        body = body.filter((item) => filterElement(item, filter));
    }
    return body;
};

function filterElement(item: any, queryFilter: Filter) {
    return Object.keys(queryFilter).every((key) =>
        subString(lowerCaseValue(item, key), queryFilter[key]),
    );
}

function subString(value: any, filterValue: any) {
    return value.indexOf(filterValue.toString().toLowerCase()) >= 0;
}

function extractFilter(req: Request): Filter {
    const filteredQuery = Object.keys(req.query)
        .filter((key) => key[0] !== "_")
        .reduce((query: Filter, key) => {
            query[key] = req.query[key];
            return query;
        }, {});

    return filteredQuery;
}

interface Filter {
    [key: string]: string | boolean | number;
}
