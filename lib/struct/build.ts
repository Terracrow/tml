/**
 * Manage and create data files
 *
 */

import BuildOptions from './options/BuildOptions';
import { existsSync, lstatSync, mkdirSync } from 'fs';
import { handleError } from './handling';

function build(options: BuildOptions): void {

    if (existsSync(options.dir))
        return;

    try {
        const file = mkdirSync(options.dir);

        return file;

    } catch (e) {

        throw handleError(e);
    }
}

export default build;
