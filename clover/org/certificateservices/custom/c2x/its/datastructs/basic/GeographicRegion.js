var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":262,"id":908,"methods":[{"el":50,"sc":2,"sl":48},{"el":59,"sc":2,"sl":56},{"el":71,"sc":2,"sl":65},{"el":80,"sc":2,"sl":77},{"el":89,"sc":2,"sl":86},{"el":101,"sc":2,"sl":99},{"el":109,"sc":2,"sl":107},{"el":117,"sc":2,"sl":115},{"el":125,"sc":2,"sl":123},{"el":133,"sc":2,"sl":131},{"el":156,"sc":2,"sl":135},{"el":183,"sc":2,"sl":158},{"el":203,"sc":2,"sl":185},{"el":237,"sc":2,"sl":205},{"el":258,"sc":2,"sl":239}],"name":"GeographicRegion","sl":33}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_1":{"methods":[{"sl":48},{"sl":135},{"sl":158}],"name":"Test to verifyCertificate","pass":true,"statements":[{"sl":49},{"sl":137},{"sl":138},{"sl":147},{"sl":148},{"sl":149},{"sl":161},{"sl":162},{"sl":172},{"sl":173},{"sl":174},{"sl":175}]},"test_107":{"methods":[{"sl":48},{"sl":99},{"sl":107},{"sl":115},{"sl":123},{"sl":131},{"sl":158}],"name":"Verify deserialization","pass":true,"statements":[{"sl":49},{"sl":100},{"sl":108},{"sl":116},{"sl":124},{"sl":132},{"sl":161},{"sl":162},{"sl":163},{"sl":164},{"sl":165},{"sl":166},{"sl":167},{"sl":168},{"sl":169},{"sl":170},{"sl":171},{"sl":172},{"sl":173},{"sl":174},{"sl":175},{"sl":176},{"sl":177},{"sl":178},{"sl":179}]},"test_183":{"methods":[{"sl":48},{"sl":135},{"sl":158}],"name":"Verify signature of reference secure messages from interoperabiltity site at https://werkzeug.dcaiti.tu-berlin.de/etsi/ts103097/","pass":true,"statements":[{"sl":49},{"sl":137},{"sl":138},{"sl":150},{"sl":151},{"sl":152},{"sl":161},{"sl":162},{"sl":176},{"sl":177},{"sl":178},{"sl":179}]},"test_194":{"methods":[{"sl":185}],"name":"Verify hashCode and equals","pass":true,"statements":[{"sl":187},{"sl":188},{"sl":189},{"sl":191},{"sl":193},{"sl":194},{"sl":195},{"sl":196},{"sl":198},{"sl":200},{"sl":202}]},"test_20":{"methods":[{"sl":48},{"sl":135},{"sl":158}],"name":"Verify that findRecipientInfo find correct RecipientInfo","pass":true,"statements":[{"sl":49},{"sl":137},{"sl":138},{"sl":147},{"sl":148},{"sl":149},{"sl":161},{"sl":162},{"sl":172},{"sl":173},{"sl":174},{"sl":175}]},"test_22":{"methods":[{"sl":48},{"sl":99},{"sl":158}],"name":"Verify deserialization","pass":true,"statements":[{"sl":49},{"sl":100},{"sl":161},{"sl":162},{"sl":165},{"sl":166},{"sl":167},{"sl":168}]},"test_24":{"methods":[{"sl":48},{"sl":158}],"name":"Verify getVerificationKey","pass":true,"statements":[{"sl":49},{"sl":161},{"sl":162},{"sl":172},{"sl":173},{"sl":174},{"sl":175}]},"test_256":{"methods":[{"sl":48},{"sl":158}],"name":"Verify getEncryptionKey","pass":true,"statements":[{"sl":49},{"sl":161},{"sl":162},{"sl":172},{"sl":173},{"sl":174},{"sl":175}]},"test_26":{"methods":[{"sl":48},{"sl":135},{"sl":158}],"name":"Verify deserialization and serialization of reference ETSI Certificates works","pass":true,"statements":[{"sl":49},{"sl":137},{"sl":138},{"sl":147},{"sl":148},{"sl":149},{"sl":161},{"sl":162},{"sl":172},{"sl":173},{"sl":174},{"sl":175}]},"test_27":{"methods":[{"sl":239}],"name":"Verify toString","pass":true,"statements":[{"sl":241},{"sl":242},{"sl":243},{"sl":245},{"sl":246},{"sl":248},{"sl":249},{"sl":251},{"sl":252},{"sl":254},{"sl":255},{"sl":257}]},"test_288":{"methods":[{"sl":239}],"name":"Verify toString","pass":true,"statements":[{"sl":241},{"sl":242},{"sl":243}]},"test_294":{"methods":[{"sl":99}],"name":"Verify the constructors and getters","pass":true,"statements":[{"sl":100}]},"test_298":{"methods":[{"sl":56},{"sl":185},{"sl":205}],"name":"Verify hashCode and equals","pass":true,"statements":[{"sl":57},{"sl":58},{"sl":187},{"sl":188},{"sl":189},{"sl":190},{"sl":191},{"sl":193},{"sl":194},{"sl":195},{"sl":196},{"sl":198},{"sl":200},{"sl":202},{"sl":207},{"sl":209},{"sl":211},{"sl":213},{"sl":214},{"sl":217},{"sl":218}]},"test_333":{"methods":[{"sl":99},{"sl":107},{"sl":115},{"sl":123},{"sl":131}],"name":"Verify the constructors and getters","pass":true,"statements":[{"sl":100},{"sl":108},{"sl":116},{"sl":124},{"sl":132}]},"test_36":{"methods":[{"sl":48},{"sl":158}],"name":"Verify SignSecuredMessage using signer info type: certificate generates a valid signature and that verifySecuredMessage can verify it.","pass":true,"statements":[{"sl":49},{"sl":161},{"sl":162},{"sl":172},{"sl":173},{"sl":174},{"sl":175}]},"test_370":{"methods":[{"sl":135}],"name":"Verify serialization","pass":true,"statements":[{"sl":137},{"sl":138},{"sl":139},{"sl":140},{"sl":141},{"sl":142},{"sl":143},{"sl":144},{"sl":145},{"sl":146},{"sl":147},{"sl":148},{"sl":149},{"sl":150},{"sl":151},{"sl":152}]},"test_398":{"methods":[{"sl":48},{"sl":158}],"name":"Verify that it is possible to parse a SecureMessage generate by interoperability site at https://werkzeug.dcaiti.tu-berlin.de/etsi/ts103097/","pass":true,"statements":[{"sl":49},{"sl":161},{"sl":162},{"sl":176},{"sl":177},{"sl":178},{"sl":179}]},"test_66":{"methods":[{"sl":135}],"name":"Verify serialization","pass":true,"statements":[{"sl":137},{"sl":138},{"sl":141},{"sl":142},{"sl":143}]},"test_92":{"methods":[{"sl":48},{"sl":158}],"name":"Verify SignSecuredMessage using signer info type: certificate_digest_with_ecdsap256 generates a valid signature and that verifySecuredMessage can verify it.","pass":true,"statements":[{"sl":49},{"sl":161},{"sl":162},{"sl":172},{"sl":173},{"sl":174},{"sl":175}]},"test_93":{"methods":[{"sl":56},{"sl":99},{"sl":107},{"sl":135}],"name":"Generate RootCA with Encryption Key and Geographic region and verify that all attributes are set.","pass":true,"statements":[{"sl":57},{"sl":58},{"sl":100},{"sl":108},{"sl":137},{"sl":138},{"sl":141},{"sl":142},{"sl":143}]},"test_97":{"methods":[{"sl":48},{"sl":135},{"sl":158}],"name":"Verify that serializeCertWithoutSignature encodes the certificate without the signature correcly","pass":true,"statements":[{"sl":49},{"sl":137},{"sl":138},{"sl":147},{"sl":148},{"sl":149},{"sl":161},{"sl":162},{"sl":172},{"sl":173},{"sl":174},{"sl":175}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [26, 92, 256, 398, 183, 107, 36, 1, 97, 24, 20, 22], [26, 92, 256, 398, 183, 107, 36, 1, 97, 24, 20, 22], [], [], [], [], [], [], [93, 298], [93, 298], [93, 298], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [333, 107, 294, 93, 22], [333, 107, 294, 93, 22], [], [], [], [], [], [], [333, 107, 93], [333, 107, 93], [], [], [], [], [], [], [333, 107], [333, 107], [], [], [], [], [], [], [333, 107], [333, 107], [], [], [], [], [], [], [333, 107], [333, 107], [], [], [26, 183, 66, 1, 97, 20, 93, 370], [], [26, 183, 66, 1, 97, 20, 93, 370], [26, 183, 66, 1, 97, 20, 93, 370], [370], [370], [66, 93, 370], [66, 93, 370], [66, 93, 370], [370], [370], [370], [26, 1, 97, 20, 370], [26, 1, 97, 20, 370], [26, 1, 97, 20, 370], [183, 370], [183, 370], [183, 370], [], [], [], [], [], [26, 92, 256, 398, 183, 107, 36, 1, 97, 24, 20, 22], [], [], [26, 92, 256, 398, 183, 107, 36, 1, 97, 24, 20, 22], [26, 92, 256, 398, 183, 107, 36, 1, 97, 24, 20, 22], [107], [107], [107, 22], [107, 22], [107, 22], [107, 22], [107], [107], [107], [26, 92, 256, 107, 36, 1, 97, 24, 20], [26, 92, 256, 107, 36, 1, 97, 24, 20], [26, 92, 256, 107, 36, 1, 97, 24, 20], [26, 92, 256, 107, 36, 1, 97, 24, 20], [398, 183, 107], [398, 183, 107], [398, 183, 107], [398, 183, 107], [], [], [], [], [], [194, 298], [], [194, 298], [194, 298], [194, 298], [298], [194, 298], [], [194, 298], [194, 298], [194, 298], [194, 298], [], [194, 298], [], [194, 298], [], [194, 298], [], [], [298], [], [298], [], [298], [], [298], [], [298], [298], [], [], [298], [298], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [27, 288], [], [27, 288], [27, 288], [27, 288], [], [27], [27], [], [27], [27], [], [27], [27], [], [27], [27], [], [27], [], [], [], [], []]
