import AbstractLogger from '../src/AbstractLogger';
import LogLevel from '../src/LogLevel';

type Log = {
    level: string;
    message: string;
    context: Record<string, any>;
};

for (const logLevelKey in LogLevel) {
    // @ts-ignore there is no type error...
    const logLevel: string = LogLevel[logLevelKey];

    test(logLevel, () => {
        const logger = new (class extends AbstractLogger {
            private logs: Array<Log> = new Array<Log>();
            public log(level: LogLevel, message: string, context: Record<string, any>): void {
                this.logs.push({ level, message, context });
            }

            public getLogs(): Array<Log> {
                return this.logs;
            }
        })();

        const context = { key: 'value' };

        // @ts-ignore there is no type error...
        logger[logLevel]('message', { key: 'value' });

        const logs = logger.getLogs();

        expect(logs[0].level).toBe(logLevel);
        expect(logs[0].message).toBe('message');
        expect(logs[0].context).toStrictEqual(context);
    });
}

test('log', () => {
    const logger = new (class extends AbstractLogger {})();

    expect(() => {
        logger.log(LogLevel.DEBUG, 'message', { key: 'value' });
    }).toThrow('Method not implemented.');
});
