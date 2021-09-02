import { test } from '@jest/globals';
import LogLevel from '../src/LogLevel';
import NullLogger from '../src/NullLogger';

test('log', () => {
    const logger = new NullLogger();

    logger.log(LogLevel.DEBUG, 'message', { key: 'value' });
});
