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

    public limit: number;
    public customPath: string;

    private strictPath: 'tml';

    /**
    * Create a new TML Driver for interact with the database
     * @param options
     */

    constructor(options?: TMLDriverOptions) {

        this.limit = options.limit;
        this.customPath = options.customPath;

        build({
            dir: this.customPath
        });
    }

    get = (options: TMLGetOptions) => {

        return TMLGetKey(options.key, {
            path: this.customPath ? this.customPath : this.strictPath
        })
    }

    set = (options: TMLSetOptions) => {

        return TMLSet(options.key, options.value, {
            path: this.customPath ? this.customPath : this.strictPath
        });
    }

    delete = (options: TMLDeleteOptions) => {

        return TMLRm(options.key, {
            path: this.customPath ? this.customPath : this.strictPath
        });
    }
}
