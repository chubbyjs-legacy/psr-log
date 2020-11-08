import NullLogger from '../src/NullLogger';
import LogLevel from '../src/LogLevel';

test('log', () => {
    const logger = new NullLogger();

    logger.log(LogLevel.DEBUG, 'message', { key: 'value' });
});
