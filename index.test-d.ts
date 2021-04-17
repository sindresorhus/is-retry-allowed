import {expectType} from 'tsd';
import isRetryAllowed from './index.js';

expectType<boolean>(isRetryAllowed({code: 'ETIMEDOUT'}));
expectType<boolean>(isRetryAllowed({}));
expectType<boolean>(isRetryAllowed());
