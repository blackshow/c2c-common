var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":136,"id":1794,"methods":[{"el":56,"sc":2,"sl":51},{"el":65,"sc":2,"sl":63},{"el":74,"sc":2,"sl":71},{"el":85,"sc":2,"sl":82},{"el":93,"sc":2,"sl":91},{"el":99,"sc":2,"sl":96},{"el":106,"sc":2,"sl":101},{"el":111,"sc":2,"sl":108},{"el":119,"sc":2,"sl":113},{"el":133,"sc":2,"sl":121}],"name":"Time32","sl":38}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_1":{"methods":[{"sl":71},{"sl":96},{"sl":101}],"name":"Test to verifyCertificate","pass":true,"statements":[{"sl":98},{"sl":103},{"sl":104},{"sl":105}]},"test_103":{"methods":[{"sl":71},{"sl":96},{"sl":101}],"name":"Verify that signAndEncryptSecureMessage and verifyAndDecryptSecuredMessage both encrypts and signs properly","pass":true,"statements":[{"sl":98},{"sl":103},{"sl":104},{"sl":105}]},"test_108":{"methods":[{"sl":96}],"name":"Verify serialization","pass":true,"statements":[{"sl":98}]},"test_11":{"methods":[{"sl":51}],"name":"Verify that findHeader finds the correct header in a SecureMessage","pass":true,"statements":[{"sl":52},{"sl":53},{"sl":54}]},"test_110":{"methods":[{"sl":82},{"sl":108}],"name":"Verify toString","pass":true,"statements":[{"sl":83},{"sl":84},{"sl":110}]},"test_119":{"methods":[{"sl":71},{"sl":82},{"sl":101}],"name":"Verify deserialization","pass":true,"statements":[{"sl":83},{"sl":84},{"sl":103},{"sl":104},{"sl":105}]},"test_127":{"methods":[{"sl":96}],"name":"Generate Signed DENM Message and verify that all required fields are set and signature verifies.","pass":true,"statements":[{"sl":98}]},"test_132":{"methods":[{"sl":96}],"name":"verify that encryptSecureMessage and decryptSecureMessage encrypts and decrypts correctly","pass":true,"statements":[{"sl":98}]},"test_154":{"methods":[{"sl":82},{"sl":108}],"name":"Verify toString","pass":true,"statements":[{"sl":83},{"sl":84},{"sl":110}]},"test_16":{"methods":[{"sl":51},{"sl":91}],"name":"Verify the constructors and asElapsedTime","pass":true,"statements":[{"sl":52},{"sl":53},{"sl":54},{"sl":92}]},"test_174":{"methods":[{"sl":51},{"sl":82},{"sl":96}],"name":"Generate Enrollment Authority and verify that it is signed by the Root CA","pass":true,"statements":[{"sl":52},{"sl":53},{"sl":54},{"sl":83},{"sl":84},{"sl":98}]},"test_178":{"methods":[{"sl":96}],"name":"Generate Signed CAM Message with and verify that all required fields are set and signature verifies.","pass":true,"statements":[{"sl":98}]},"test_181":{"methods":[{"sl":96}],"name":"Verify getEncoded","pass":true,"statements":[{"sl":98}]},"test_182":{"methods":[{"sl":51},{"sl":82},{"sl":96}],"name":"Generate Authorization Credential with a certificate chain as signer info","pass":true,"statements":[{"sl":52},{"sl":53},{"sl":54},{"sl":83},{"sl":84},{"sl":98}]},"test_183":{"methods":[{"sl":71},{"sl":96},{"sl":101}],"name":"Verify signature of reference secure messages from interoperabiltity site at https://werkzeug.dcaiti.tu-berlin.de/etsi/ts103097/","pass":true,"statements":[{"sl":98},{"sl":103},{"sl":104},{"sl":105}]},"test_184":{"methods":[{"sl":96}],"name":"Verify serialization","pass":true,"statements":[{"sl":98}]},"test_194":{"methods":[{"sl":51},{"sl":113},{"sl":121}],"name":"Verify hashCode and equals","pass":true,"statements":[{"sl":52},{"sl":53},{"sl":54},{"sl":115},{"sl":116},{"sl":117},{"sl":118},{"sl":123},{"sl":125},{"sl":126},{"sl":127},{"sl":129},{"sl":130},{"sl":132}]},"test_20":{"methods":[{"sl":71},{"sl":96},{"sl":101}],"name":"Verify that findRecipientInfo find correct RecipientInfo","pass":true,"statements":[{"sl":98},{"sl":103},{"sl":104},{"sl":105}]},"test_22":{"methods":[{"sl":71},{"sl":82},{"sl":101}],"name":"Verify deserialization","pass":true,"statements":[{"sl":83},{"sl":84},{"sl":103},{"sl":104},{"sl":105}]},"test_24":{"methods":[{"sl":71},{"sl":101}],"name":"Verify getVerificationKey","pass":true,"statements":[{"sl":103},{"sl":104},{"sl":105}]},"test_256":{"methods":[{"sl":71},{"sl":101}],"name":"Verify getEncryptionKey","pass":true,"statements":[{"sl":103},{"sl":104},{"sl":105}]},"test_26":{"methods":[{"sl":71},{"sl":96},{"sl":101}],"name":"Verify deserialization and serialization of reference ETSI Certificates works","pass":true,"statements":[{"sl":98},{"sl":103},{"sl":104},{"sl":105}]},"test_260":{"methods":[{"sl":63},{"sl":82}],"name":"Make sure asDate converts the date correctly","pass":true,"statements":[{"sl":64},{"sl":83},{"sl":84}]},"test_274":{"methods":[{"sl":51},{"sl":82},{"sl":108}],"name":"Verify toString","pass":true,"statements":[{"sl":52},{"sl":53},{"sl":54},{"sl":83},{"sl":84},{"sl":110}]},"test_288":{"methods":[{"sl":82},{"sl":108}],"name":"Verify toString","pass":true,"statements":[{"sl":83},{"sl":84},{"sl":110}]},"test_294":{"methods":[{"sl":82}],"name":"Verify the constructors and getters","pass":true,"statements":[{"sl":83},{"sl":84}]},"test_313":{"methods":[{"sl":51},{"sl":82},{"sl":96}],"name":"Generate Enrollment Credential with a certificate chain as signer info","pass":true,"statements":[{"sl":52},{"sl":53},{"sl":54},{"sl":83},{"sl":84},{"sl":98}]},"test_320":{"methods":[{"sl":71},{"sl":101}],"name":"Verify deserialization","pass":true,"statements":[{"sl":103},{"sl":104},{"sl":105}]},"test_342":{"methods":[{"sl":51},{"sl":96}],"name":"Generate Enrollment Credential v1 for interoperability testing","pass":true,"statements":[{"sl":52},{"sl":53},{"sl":54},{"sl":98}]},"test_358":{"methods":[{"sl":63},{"sl":96}],"name":"Verify that serializeDataToBeSignedInSecuredMessage serializes according to signature verification it ETSI specifification","pass":true,"statements":[{"sl":64},{"sl":98}]},"test_359":{"methods":[{"sl":51},{"sl":113},{"sl":121}],"name":"Verify hashCode and equals","pass":true,"statements":[{"sl":52},{"sl":53},{"sl":54},{"sl":115},{"sl":116},{"sl":117},{"sl":118},{"sl":123},{"sl":125},{"sl":127},{"sl":129},{"sl":130},{"sl":131},{"sl":132}]},"test_36":{"methods":[{"sl":71},{"sl":96},{"sl":101}],"name":"Verify SignSecuredMessage using signer info type: certificate generates a valid signature and that verifySecuredMessage can verify it.","pass":true,"statements":[{"sl":98},{"sl":103},{"sl":104},{"sl":105}]},"test_365":{"methods":[{"sl":51},{"sl":82},{"sl":96}],"name":"Generate Authorization Ticket with a certificate as signer info","pass":true,"statements":[{"sl":52},{"sl":53},{"sl":54},{"sl":83},{"sl":84},{"sl":98}]},"test_377":{"methods":[{"sl":96}],"name":"Verify serialization","pass":true,"statements":[{"sl":98}]},"test_38":{"methods":[{"sl":51},{"sl":82},{"sl":96}],"name":"Generate Enrollment Credential with a digest as signer info","pass":true,"statements":[{"sl":52},{"sl":53},{"sl":54},{"sl":83},{"sl":84},{"sl":98}]},"test_392":{"methods":[{"sl":51},{"sl":96}],"name":"Generate Authorization Ticket and Signed Secured Message v1 for interoperability testing","pass":true,"statements":[{"sl":52},{"sl":53},{"sl":54},{"sl":98}]},"test_398":{"methods":[{"sl":71},{"sl":101}],"name":"Verify that it is possible to parse a SecureMessage generate by interoperability site at https://werkzeug.dcaiti.tu-berlin.de/etsi/ts103097/","pass":true,"statements":[{"sl":103},{"sl":104},{"sl":105}]},"test_406":{"methods":[{"sl":51},{"sl":82},{"sl":96}],"name":"Generate Authorization Authority and verify that it is signed by the Root CA","pass":true,"statements":[{"sl":52},{"sl":53},{"sl":54},{"sl":83},{"sl":84},{"sl":98}]},"test_44":{"methods":[{"sl":51}],"name":"Verify that addHeader adds the header value in correct order","pass":true,"statements":[{"sl":52},{"sl":53},{"sl":54}]},"test_55":{"methods":[{"sl":71},{"sl":101}],"name":"Verify deserialization","pass":true,"statements":[{"sl":103},{"sl":104},{"sl":105}]},"test_66":{"methods":[{"sl":96}],"name":"Verify serialization","pass":true,"statements":[{"sl":98}]},"test_73":{"methods":[{"sl":63},{"sl":96}],"name":"Verify serialization","pass":true,"statements":[{"sl":64},{"sl":98}]},"test_79":{"methods":[{"sl":51},{"sl":82},{"sl":96}],"name":"Generate Enrollment Credential with a certificate as signer info","pass":true,"statements":[{"sl":52},{"sl":53},{"sl":54},{"sl":83},{"sl":84},{"sl":98}]},"test_8":{"methods":[{"sl":71},{"sl":101}],"name":"Verify deserialization","pass":true,"statements":[{"sl":103},{"sl":104},{"sl":105}]},"test_82":{"methods":[{"sl":51},{"sl":96}],"name":"Generate Authorization CA v1 for interoperability testing","pass":true,"statements":[{"sl":52},{"sl":53},{"sl":54},{"sl":98}]},"test_90":{"methods":[{"sl":51},{"sl":82},{"sl":96}],"name":"Generate Authorization Ticket with a digest as signer info","pass":true,"statements":[{"sl":52},{"sl":53},{"sl":54},{"sl":83},{"sl":84},{"sl":98}]},"test_92":{"methods":[{"sl":71},{"sl":96},{"sl":101}],"name":"Verify SignSecuredMessage using signer info type: certificate_digest_with_ecdsap256 generates a valid signature and that verifySecuredMessage can verify it.","pass":true,"statements":[{"sl":98},{"sl":103},{"sl":104},{"sl":105}]},"test_93":{"methods":[{"sl":51},{"sl":82},{"sl":96}],"name":"Generate RootCA with Encryption Key and Geographic region and verify that all attributes are set.","pass":true,"statements":[{"sl":52},{"sl":53},{"sl":54},{"sl":83},{"sl":84},{"sl":98}]},"test_94":{"methods":[{"sl":96}],"name":"Generate Signed CAM Unrecognized Certificates Message and verify that all required fields are set and signature verifies.","pass":true,"statements":[{"sl":98}]},"test_97":{"methods":[{"sl":71},{"sl":96},{"sl":101}],"name":"Verify that serializeCertWithoutSignature encodes the certificate without the signature correcly","pass":true,"statements":[{"sl":98},{"sl":103},{"sl":104},{"sl":105}]},"test_99":{"methods":[{"sl":51},{"sl":82},{"sl":96}],"name":"Generate RootCA without Encryption Key and Geographic region and verify that all other attributes are set.","pass":true,"statements":[{"sl":52},{"sl":53},{"sl":54},{"sl":83},{"sl":84},{"sl":98}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [174, 194, 365, 16, 79, 11, 342, 274, 44, 182, 359, 392, 406, 93, 38, 99, 313, 90, 82], [174, 194, 365, 16, 79, 11, 342, 274, 44, 182, 359, 392, 406, 93, 38, 99, 313, 90, 82], [174, 194, 365, 16, 79, 11, 342, 274, 44, 182, 359, 392, 406, 93, 38, 99, 313, 90, 82], [174, 194, 365, 16, 79, 11, 342, 274, 44, 182, 359, 392, 406, 93, 38, 99, 313, 90, 82], [], [], [], [], [], [], [], [], [358, 260, 73], [358, 260, 73], [], [], [], [], [], [], [26, 8, 55, 103, 92, 256, 398, 183, 36, 1, 320, 97, 24, 20, 22, 119], [], [], [], [], [], [], [], [], [], [], [174, 365, 110, 79, 260, 154, 274, 182, 294, 406, 93, 38, 22, 288, 99, 313, 119, 90], [174, 365, 110, 79, 260, 154, 274, 182, 294, 406, 93, 38, 22, 288, 99, 313, 119, 90], [174, 365, 110, 79, 260, 154, 274, 182, 294, 406, 93, 38, 22, 288, 99, 313, 119, 90], [], [], [], [], [], [], [16], [16], [], [], [], [127, 26, 174, 108, 103, 358, 92, 365, 183, 79, 66, 342, 182, 36, 1, 377, 97, 392, 184, 20, 406, 181, 93, 73, 38, 99, 313, 178, 90, 94, 132, 82], [], [127, 26, 174, 108, 103, 358, 92, 365, 183, 79, 66, 342, 182, 36, 1, 377, 97, 392, 184, 20, 406, 181, 93, 73, 38, 99, 313, 178, 90, 94, 132, 82], [], [], [26, 8, 55, 103, 92, 256, 398, 183, 36, 1, 320, 97, 24, 20, 22, 119], [], [26, 8, 55, 103, 92, 256, 398, 183, 36, 1, 320, 97, 24, 20, 22, 119], [26, 8, 55, 103, 92, 256, 398, 183, 36, 1, 320, 97, 24, 20, 22, 119], [26, 8, 55, 103, 92, 256, 398, 183, 36, 1, 320, 97, 24, 20, 22, 119], [], [], [110, 154, 274, 288], [], [110, 154, 274, 288], [], [], [194, 359], [], [194, 359], [194, 359], [194, 359], [194, 359], [], [], [194, 359], [], [194, 359], [], [194, 359], [194], [194, 359], [], [194, 359], [194, 359], [359], [194, 359], [], [], [], []]
