var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":123,"id":2066,"methods":[{"el":50,"sc":2,"sl":47},{"el":57,"sc":2,"sl":56},{"el":64,"sc":2,"sl":62},{"el":72,"sc":2,"sl":70},{"el":78,"sc":2,"sl":74},{"el":85,"sc":2,"sl":80},{"el":94,"sc":2,"sl":87},{"el":113,"sc":2,"sl":96},{"el":119,"sc":2,"sl":115}],"name":"ItsAidPriority","sl":36}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_136":{"methods":[{"sl":74}],"name":"Verify serialization","pass":true,"statements":[{"sl":76},{"sl":77}]},"test_167":{"methods":[{"sl":62},{"sl":70}],"name":"Verify the constructors and getters","pass":true,"statements":[{"sl":63},{"sl":71}]},"test_225":{"methods":[{"sl":74}],"name":"Verify serialization","pass":true,"statements":[{"sl":76},{"sl":77}]},"test_307":{"methods":[{"sl":56},{"sl":80}],"name":"Verify deserialization","pass":true,"statements":[{"sl":82},{"sl":83},{"sl":84}]},"test_37":{"methods":[{"sl":115}],"name":"Verify toString","pass":true,"statements":[{"sl":117}]},"test_45":{"methods":[{"sl":87}],"name":"Verify hashCode and equals","pass":true,"statements":[{"sl":89},{"sl":90},{"sl":91},{"sl":92},{"sl":93}]},"test_49":{"methods":[{"sl":115}],"name":"Verify toString","pass":true,"statements":[{"sl":117}]},"test_51":{"methods":[{"sl":56},{"sl":62},{"sl":70},{"sl":80}],"name":"Verify deserialization","pass":true,"statements":[{"sl":63},{"sl":71},{"sl":82},{"sl":83},{"sl":84}]},"test_95":{"methods":[{"sl":47},{"sl":87},{"sl":96}],"name":"Verify hashCode and equals","pass":true,"statements":[{"sl":48},{"sl":49},{"sl":89},{"sl":90},{"sl":91},{"sl":92},{"sl":93},{"sl":98},{"sl":100},{"sl":102},{"sl":104},{"sl":105},{"sl":108},{"sl":109},{"sl":110},{"sl":111},{"sl":112}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [95], [95], [95], [], [], [], [], [], [], [51, 307], [], [], [], [], [], [51, 167], [51, 167], [], [], [], [], [], [], [51, 167], [51, 167], [], [], [136, 225], [], [136, 225], [136, 225], [], [], [51, 307], [], [51, 307], [51, 307], [51, 307], [], [], [45, 95], [], [45, 95], [45, 95], [45, 95], [45, 95], [45, 95], [], [], [95], [], [95], [], [95], [], [95], [], [95], [95], [], [], [95], [95], [95], [95], [95], [], [], [37, 49], [], [37, 49], [], [], [], [], [], []]
