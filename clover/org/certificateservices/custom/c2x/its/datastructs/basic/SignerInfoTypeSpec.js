var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":60,"id":3819,"methods":[{"el":43,"sc":2,"sl":31},{"el":58,"sc":2,"sl":45}],"name":"SignerInfoTypeSpec","sl":29}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_207":{"methods":[{"sl":45}],"name":"Verify that SignerInfoType.getByValue returns certificate_digest_with_ecdsap256 for 1","pass":true,"statements":[{"sl":48}]},"test_208":{"methods":[{"sl":45}],"name":"Verify that SignerInfoType.getByValue returns certificate for 2","pass":true,"statements":[{"sl":48}]},"test_245":{"methods":[{"sl":31}],"name":"Verify that certificate_digest_with_ecdsap256 has bytevalue 1","pass":true,"statements":[{"sl":34},{"sl":35}]},"test_271":{"methods":[{"sl":31}],"name":"Verify that certificate has bytevalue 2","pass":true,"statements":[{"sl":34},{"sl":35}]},"test_278":{"methods":[{"sl":31}],"name":"Verify that certificate_chain has bytevalue 3","pass":true,"statements":[{"sl":34},{"sl":35}]},"test_303":{"methods":[{"sl":45}],"name":"Verify that SignerInfoType.getByValue returns certificate_digest_with_other_algorithm for 4","pass":true,"statements":[{"sl":48}]},"test_304":{"methods":[{"sl":31}],"name":"Verify that self has bytevalue 0","pass":true,"statements":[{"sl":34},{"sl":35}]},"test_328":{"methods":[{"sl":45}],"name":"Verify that SignerInfoType.getByValue returns self for 0","pass":true,"statements":[{"sl":48}]},"test_331":{"methods":[{"sl":45}],"name":"Verify that SignerInfoType.getByValue returns certificate_chain for 3","pass":true,"statements":[{"sl":48}]},"test_381":{"methods":[{"sl":31}],"name":"Verify that certificate_digest_with_other_algorithm has bytevalue 4","pass":true,"statements":[{"sl":34},{"sl":35}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [381, 304, 278, 271, 245], [], [], [381, 304, 278, 271, 245], [381, 304, 278, 271, 245], [], [], [], [], [], [], [], [], [], [303, 207, 208, 331, 328], [], [], [303, 207, 208, 331, 328], [], [], [], [], [], [], [], [], [], [], [], []]