var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":49,"id":2,"methods":[{"el":34,"sc":5,"sl":29},{"el":41,"sc":5,"sl":36},{"el":48,"sc":5,"sl":43}],"name":"PetService","sl":27}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_0":{"methods":[{"sl":36}],"name":"testGetPet","pass":true,"statements":[{"sl":39},{"sl":40}]},"test_1":{"methods":[{"sl":29}],"name":"testGetPets","pass":true,"statements":[{"sl":32},{"sl":33}]},"test_2":{"methods":[{"sl":36},{"sl":43}],"name":"testGetPetAndStatus","pass":true,"statements":[{"sl":39},{"sl":40},{"sl":46},{"sl":47}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [1], [], [], [1], [1], [], [], [0, 2], [], [], [0, 2], [0, 2], [], [], [2], [], [], [2], [2], [], []]
