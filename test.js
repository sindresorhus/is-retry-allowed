import test from 'ava';
import fn from './';

function err(code) {
	return {code};
}

test('defaults', t => {
	t.is(fn(undefined), true);
	t.is(fn({}), true);
	t.is(fn({code: 'unicorns'}), true);
});

test('whitelist', t => {
	t.is(fn(err('ETIMEDOUT')), true);
	t.is(fn(err('ECONNRESET')), true);
	t.is(fn(err('EADDRINUSE')), true);
	t.is(fn(err('ESOCKETTIMEDOUT')), true);
	t.is(fn(err('ECONNREFUSED')), true);
	t.is(fn(err('EPIPE')), true);
});

test('blacklist', t => {
	t.is(fn(err('ENOTFOUND')), false);
	t.is(fn(err('ENETUNREACH')), false);
});
