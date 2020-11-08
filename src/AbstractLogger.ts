import LoggerInterface from './LoggerInterface';
import LogLevel from './LogLevel';

abstract class AbstractLogger implements LoggerInterface {
    public emergency(message: string, context: Record<string, any>): void {
        this.log(LogLevel.EMERGENCY, message, context);
    }

    public alert(message: string, context: Record<string, any>): void {
        this.log(LogLevel.ALERT, message, context);
    }

    public critical(message: string, context: Record<string, any>): void {
        this.log(LogLevel.CRITICAL, message, context);
    }

    public error(message: string, context: Record<string, any>): void {
        this.log(LogLevel.ERROR, message, context);
    }

    public warning(message: string, context: Record<string, any>): void {
        this.log(LogLevel.WARNING, message, context);
    }

    public notice(message: string, context: Record<string, any>): void {
        this.log(LogLevel.NOTICE, message, context);
    }

    public info(message: string, context: Record<string, any>): void {
        this.log(LogLevel.INFO, message, context);
    }

    public debug(message: string, context: Record<string, any>): void {
        this.log(LogLevel.DEBUG, message, context);
    }

    public log(level: LogLevel, message: string, context: Record<string, any>): void {
        throw new Error('Method not implemented.');
    }
}

export default AbstractLogger;
