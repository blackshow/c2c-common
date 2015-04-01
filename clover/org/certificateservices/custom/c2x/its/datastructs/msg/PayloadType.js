var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":62,"id":3031,"methods":[{"el":44,"sc":2,"sl":42},{"el":48,"sc":2,"sl":46},{"el":60,"sc":2,"sl":53}],"name":"PayloadType","sl":33}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_103":{"methods":[{"sl":46},{"sl":53}],"name":"Verify that signAndEncryptSecureMessage and verifyAndDecryptSecuredMessage both encrypts and signs properly","pass":true,"statements":[{"sl":47},{"sl":54},{"sl":55},{"sl":56}]},"test_122":{"methods":[{"sl":46}],"name":"Verify serialization","pass":true,"statements":[{"sl":47}]},"test_127":{"methods":[{"sl":46}],"name":"Generate Signed DENM Message and verify that all required fields are set and signature verifies.","pass":true,"statements":[{"sl":47}]},"test_129":{"methods":[{"sl":46}],"name":"Verify that signed_and_encrypted has bytevalue 4","pass":true,"statements":[{"sl":47}]},"test_132":{"methods":[{"sl":46},{"sl":53}],"name":"verify that encryptSecureMessage and decryptSecureMessage encrypts and decrypts correctly","pass":true,"statements":[{"sl":47},{"sl":54},{"sl":55},{"sl":56}]},"test_143":{"methods":[{"sl":46}],"name":"Verify that unsecured has bytevalue 0","pass":true,"statements":[{"sl":47}]},"test_172":{"methods":[{"sl":53}],"name":"Verify deserialization","pass":true,"statements":[{"sl":54},{"sl":55},{"sl":56}]},"test_178":{"methods":[{"sl":46}],"name":"Generate Signed CAM Message with and verify that all required fields are set and signature verifies.","pass":true,"statements":[{"sl":47}]},"test_179":{"methods":[{"sl":53}],"name":"Verify deserialization","pass":true,"statements":[{"sl":54},{"sl":55},{"sl":56}]},"test_183":{"methods":[{"sl":46},{"sl":53}],"name":"Verify signature of reference secure messages from interoperabiltity site at https://werkzeug.dcaiti.tu-berlin.de/etsi/ts103097/","pass":true,"statements":[{"sl":47},{"sl":54},{"sl":55},{"sl":56}]},"test_210":{"methods":[{"sl":53}],"name":"Verify that TrailerFieldType.getByValue returns signed_and_encrypted for 4","pass":true,"statements":[{"sl":54},{"sl":55},{"sl":56}]},"test_215":{"methods":[{"sl":53}],"name":"Verify that TrailerFieldType.getByValue returns unsecured for 0","pass":true,"statements":[{"sl":54},{"sl":55},{"sl":56}]},"test_245":{"methods":[{"sl":46}],"name":"Verify that signed_external has bytevalue 3","pass":true,"statements":[{"sl":47}]},"test_247":{"methods":[{"sl":46}],"name":"Verify serializeTotalPayload calculates signature payload fields correctly","pass":true,"statements":[{"sl":47}]},"test_277":{"methods":[{"sl":53}],"name":"Verify that TrailerFieldType.getByValue returns signed_external for 3","pass":true,"statements":[{"sl":54},{"sl":55},{"sl":56}]},"test_292":{"methods":[{"sl":46}],"name":"Verify getEncoded","pass":true,"statements":[{"sl":47}]},"test_335":{"methods":[{"sl":46}],"name":"Verify that signed has bytevalue 1","pass":true,"statements":[{"sl":47}]},"test_358":{"methods":[{"sl":46}],"name":"Verify that serializeDataToBeSignedInSecuredMessage serializes according to signature verification it ETSI specifification","pass":true,"statements":[{"sl":47}]},"test_36":{"methods":[{"sl":46},{"sl":53}],"name":"Verify SignSecuredMessage using signer info type: certificate generates a valid signature and that verifySecuredMessage can verify it.","pass":true,"statements":[{"sl":47},{"sl":54},{"sl":55},{"sl":56}]},"test_371":{"methods":[{"sl":46}],"name":"Verify serialization","pass":true,"statements":[{"sl":47}]},"test_392":{"methods":[{"sl":46}],"name":"Generate Authorization Ticket and Signed Secured Message v1 for interoperability testing","pass":true,"statements":[{"sl":47}]},"test_395":{"methods":[{"sl":46}],"name":"Verify that encrypted has bytevalue 2","pass":true,"statements":[{"sl":47}]},"test_398":{"methods":[{"sl":53}],"name":"Verify that it is possible to parse a SecureMessage generate by interoperability site at https://werkzeug.dcaiti.tu-berlin.de/etsi/ts103097/","pass":true,"statements":[{"sl":54},{"sl":55},{"sl":56}]},"test_53":{"methods":[{"sl":53}],"name":"Verify that TrailerFieldType.getByValue returns encrypted for 2","pass":true,"statements":[{"sl":54},{"sl":55},{"sl":56}]},"test_74":{"methods":[{"sl":53}],"name":"Verify that TrailerFieldType.getByValue returns signed for 1","pass":true,"statements":[{"sl":54},{"sl":55},{"sl":56}]},"test_92":{"methods":[{"sl":46},{"sl":53}],"name":"Verify SignSecuredMessage using signer info type: certificate_digest_with_ecdsap256 generates a valid signature and that verifySecuredMessage can verify it.","pass":true,"statements":[{"sl":47},{"sl":54},{"sl":55},{"sl":56}]},"test_94":{"methods":[{"sl":46}],"name":"Generate Signed CAM Unrecognized Certificates Message and verify that all required fields are set and signature verifies.","pass":true,"statements":[{"sl":47}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [245, 36, 335, 127, 392, 103, 358, 129, 92, 122, 247, 395, 183, 178, 94, 132, 292, 143, 371], [245, 36, 335, 127, 392, 103, 358, 129, 92, 122, 247, 395, 183, 178, 94, 132, 292, 143, 371], [], [], [], [], [], [53, 36, 215, 179, 74, 103, 92, 172, 398, 210, 183, 277, 132], [53, 36, 215, 179, 74, 103, 92, 172, 398, 210, 183, 277, 132], [53, 36, 215, 179, 74, 103, 92, 172, 398, 210, 183, 277, 132], [53, 36, 215, 179, 74, 103, 92, 172, 398, 210, 183, 277, 132], [], [], [], [], [], []]
