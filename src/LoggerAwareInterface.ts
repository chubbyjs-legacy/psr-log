import LoggerInterface from './LoggerInterface';

interface LoggerAwareInterface {
    setLogger(logger: LoggerInterface): void;
}

export default LoggerAwareInterface;
