import {expectType} from 'tsd';
import isRetryAllowed = require('.');

expectType<boolean>(isRetryAllowed({code: 'ETIMEDOUT'}));
expectType<boolean>(isRetryAllowed({}));
expectType<boolean>(isRetryAllowed());
