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
	t.is(fn(err('EHOSTUNREACH')), true);
	t.is(fn(err('EAI_AGAIN')), true);
});

test('blacklist', t => {
	t.is(fn(err('ENOTFOUND')), false);
	t.is(fn(err('ENETUNREACH')), false);
	t.is(fn(err('UNABLE_TO_GET_ISSUER_CERT')), false);
	t.is(fn(err('UNABLE_TO_GET_CRL')), false);
	t.is(fn(err('UNABLE_TO_DECRYPT_CERT_SIGNATURE')), false);
	t.is(fn(err('UNABLE_TO_DECRYPT_CRL_SIGNATURE')), false);
	t.is(fn(err('UNABLE_TO_DECODE_ISSUER_PUBLIC_KEY')), false);
	t.is(fn(err('CERT_SIGNATURE_FAILURE')), false);
	t.is(fn(err('CRL_SIGNATURE_FAILURE')), false);
	t.is(fn(err('CERT_NOT_YET_VALID')), false);
	t.is(fn(err('CERT_HAS_EXPIRED')), false);
	t.is(fn(err('CRL_NOT_YET_VALID')), false);
	t.is(fn(err('CRL_HAS_EXPIRED')), false);
	t.is(fn(err('ERROR_IN_CERT_NOT_BEFORE_FIELD')), false);
	t.is(fn(err('ERROR_IN_CERT_NOT_AFTER_FIELD')), false);
	t.is(fn(err('ERROR_IN_CRL_LAST_UPDATE_FIELD')), false);
	t.is(fn(err('ERROR_IN_CRL_NEXT_UPDATE_FIELD')), false);
	t.is(fn(err('OUT_OF_MEM')), false);
	t.is(fn(err('DEPTH_ZERO_SELF_SIGNED_CERT')), false);
	t.is(fn(err('SELF_SIGNED_CERT_IN_CHAIN')), false);
	t.is(fn(err('UNABLE_TO_GET_ISSUER_CERT_LOCALLY')), false);
	t.is(fn(err('UNABLE_TO_VERIFY_LEAF_SIGNATURE')), false);
	t.is(fn(err('CERT_CHAIN_TOO_LONG')), false);
	t.is(fn(err('CERT_REVOKED')), false);
	t.is(fn(err('INVALID_CA')), false);
	t.is(fn(err('PATH_LENGTH_EXCEEDED')), false);
	t.is(fn(err('INVALID_PURPOSE')), false);
	t.is(fn(err('CERT_UNTRUSTED')), false);
	t.is(fn(err('CERT_REJECTED')), false);
});
