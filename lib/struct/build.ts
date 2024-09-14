/**
 * Manage and create data files
 *
 */

import BuildOptions from './options/BuildOptions';
import { existsSync, mkdirSync } from 'fs';
import { handleError } from './handling';

function build(options: BuildOptions): void {

    if (existsSync('tml'))
        return;

    try {
        const file = mkdirSync('tml');

        return file;

    } catch (e) {

        throw handleError(e);
    }
}

export default build;
