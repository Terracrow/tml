import chalk from 'chalk';

/**
 * Log handler
 *
 */

function handleError(body: string): Promise<Error> {

    throw new Error(chalk.red(`[TML:ERROR] ${body}`));
}

function handleLog(body: string) {

    return console.log(chalk.green(body));
}

export { handleError, handleLog };
