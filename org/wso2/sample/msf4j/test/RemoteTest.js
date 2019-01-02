var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":45,"id":11,"methods":[{"el":16,"sc":5,"sl":13},{"el":24,"sc":5,"sl":18},{"el":32,"sc":5,"sl":26},{"el":44,"sc":5,"sl":34}],"name":"RemoteTest","sl":8}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_0":{"methods":[{"sl":26}],"name":"testGetPet","pass":true,"statements":[{"sl":27},{"sl":28},{"sl":29},{"sl":30},{"sl":31}]},"test_1":{"methods":[{"sl":18}],"name":"testGetPets","pass":true,"statements":[{"sl":19},{"sl":20},{"sl":21},{"sl":22},{"sl":23}]},"test_2":{"methods":[{"sl":34}],"name":"testGetPetAndStatus","pass":true,"statements":[{"sl":35},{"sl":36},{"sl":37},{"sl":38},{"sl":39},{"sl":41},{"sl":42},{"sl":43}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [1], [1], [1], [1], [1], [1], [], [], [0], [0], [0], [0], [0], [0], [], [], [2], [2], [2], [2], [2], [2], [], [2], [2], [2], [], []]
