/**
 * Manage data
 *
 */

import { readFileSync, unlinkSync, writeFileSync } from "fs";
import yaml from 'yaml';
import { handleError } from "./handling";


function TMLSet(key: string, value: any, options: { path: string }): void {

    try {
        const file = writeFileSync(`${options.path}/${key}.yml`, yaml.stringify({
            __tmlversion: 'beta-1.0',
            body: value
        }));
    } catch (e) {
        throw handleError(`Unable to set key [${key}] in ${options.path}`);
    }
}

function TMLGetKey(key: string, options: { path: string }) {

    try {
        const file = readFileSync(`${options.path}/${key}.yml`, { encoding: 'utf8' });
        const data = yaml.parseDocument(file);
        const JSONData = JSON.stringify(data);

        return JSON.parse(JSONData);
    } catch (e) {
        throw handleError(e);
    }
}

function TMLRm(key: string, options: { path: string }): void {

    try {

        const file = unlinkSync(`${options.path}/${key}.yml`);
    } catch(e) {
        throw handleError(e);
    }
}

export { TMLGetKey, TMLSet, TMLRm };
