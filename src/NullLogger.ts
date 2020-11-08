import AbstractLogger from './AbstractLogger';
import LogLevel from './LogLevel';

class NullLogger extends AbstractLogger {
    public log(level: LogLevel, message: string, context: Record<string, any>): void {}
}

export default NullLogger;
