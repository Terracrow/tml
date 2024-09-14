/**
 * Main class
 *
 */

import build from "./build";
import { TMLGetKey, TMLRm, TMLSet } from "./management";
import TMLDeleteOptions from "./options/TMLDeleteOptions";
import TMLDriverOptions from "./options/TMLDriverOptions";
import TMLGetOptions from "./options/TMLGetOptions";
import TMLSetOptions from "./options/TMLSetOptions";

export default class TMLDriver implements TMLDriverOptions {

    public limit?: number;
    public path: string;

    /**
    * Create a new TML Driver for interact with the database
     * @param options
     */

    constructor(options?: TMLDriverOptions) {

        this.limit = options?.limit;
        this.path = 'tml';

        build({ dir: this.path });
    }

    get = (options: TMLGetOptions) => {

        return TMLGetKey(options.key, {
            path: this.path
        })
    }

    set = (options: TMLSetOptions) => {

        return TMLSet(options.key, options.value, {
            path: this.path
        });
    }

    delete = (options: TMLDeleteOptions) => {

        return TMLRm(options.key, {
            path: this.path
        });
    }
}
