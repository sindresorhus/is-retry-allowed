const test = require('ava');
const isRetryAllowed = require('.');

const error = code => ({code});

test('defaults', t => {
	t.true(isRetryAllowed(undefined));
	t.true(isRetryAllowed({}));
	t.true(isRetryAllowed({code: 'unicorns'}));
});

test('allowList', t => {
	t.true(isRetryAllowed(error('ETIMEDOUT')));
	t.true(isRetryAllowed(error('ECONNRESET')));
	t.true(isRetryAllowed(error('EADDRINUSE')));
	t.true(isRetryAllowed(error('ESOCKETTIMEDOUT')));
	t.true(isRetryAllowed(error('ECONNREFUSED')));
	t.true(isRetryAllowed(error('EPIPE')));
	t.true(isRetryAllowed(error('EHOSTUNREACH')));
	t.true(isRetryAllowed(error('EAI_AGAIN')));
});

test('denyList', t => {
	t.false(isRetryAllowed(error('ENOTFOUND')));
	t.false(isRetryAllowed(error('ENETUNREACH')));
	t.false(isRetryAllowed(error('UNABLE_TO_GET_ISSUER_CERT')));
	t.false(isRetryAllowed(error('UNABLE_TO_GET_CRL')));
	t.false(isRetryAllowed(error('UNABLE_TO_DECRYPT_CERT_SIGNATURE')));
	t.false(isRetryAllowed(error('UNABLE_TO_DECRYPT_CRL_SIGNATURE')));
	t.false(isRetryAllowed(error('UNABLE_TO_DECODE_ISSUER_PUBLIC_KEY')));
	t.false(isRetryAllowed(error('CERT_SIGNATURE_FAILURE')));
	t.false(isRetryAllowed(error('CRL_SIGNATURE_FAILURE')));
	t.false(isRetryAllowed(error('CERT_NOT_YET_VALID')));
	t.false(isRetryAllowed(error('CERT_HAS_EXPIRED')));
	t.false(isRetryAllowed(error('CRL_NOT_YET_VALID')));
	t.false(isRetryAllowed(error('CRL_HAS_EXPIRED')));
	t.false(isRetryAllowed(error('ERROR_IN_CERT_NOT_BEFORE_FIELD')));
	t.false(isRetryAllowed(error('ERROR_IN_CERT_NOT_AFTER_FIELD')));
	t.false(isRetryAllowed(error('ERROR_IN_CRL_LAST_UPDATE_FIELD')));
	t.false(isRetryAllowed(error('ERROR_IN_CRL_NEXT_UPDATE_FIELD')));
	t.false(isRetryAllowed(error('OUT_OF_MEM')));
	t.false(isRetryAllowed(error('DEPTH_ZERO_SELF_SIGNED_CERT')));
	t.false(isRetryAllowed(error('SELF_SIGNED_CERT_IN_CHAIN')));
	t.false(isRetryAllowed(error('UNABLE_TO_GET_ISSUER_CERT_LOCALLY')));
	t.false(isRetryAllowed(error('UNABLE_TO_VERIFY_LEAF_SIGNATURE')));
	t.false(isRetryAllowed(error('CERT_CHAIN_TOO_LONG')));
	t.false(isRetryAllowed(error('CERT_REVOKED')));
	t.false(isRetryAllowed(error('INVALID_CA')));
	t.false(isRetryAllowed(error('PATH_LENGTH_EXCEEDED')));
	t.false(isRetryAllowed(error('INVALID_PURPOSE')));
	t.false(isRetryAllowed(error('CERT_UNTRUSTED')));
	t.false(isRetryAllowed(error('CERT_REJECTED')));
});
