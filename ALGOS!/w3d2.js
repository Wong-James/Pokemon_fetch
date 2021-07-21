const items = [
    { firstName: "Bob", lastName: "Bobbert", age: 31 },
    { firstName: "John", lastName: "Smith", age: 25 },
    { firstName: "Bob", lastName: "Smith", age: 27 },
    { firstName: "Bob", lastName: "White", age: 31 },
  ];
  
  const searchCriteria1 = {
    firstName: "Bob",
    age: 31,
  };
  const expected1 = [
    { firstName: "Bob", lastName: "Bobbert", age: 31 },
    { firstName: "Bob", lastName: "White", age: 31 },
  ];
  
  const searchCriteria2 = {
    lastName: "Smith",
  };
  const expected2 = [
    { firstName: "John", lastName: "Smith", age: 25 },
    { firstName: "Bob", lastName: "Smith", age: 27 },
  ];

  function findObjects(criteria, collection) {
    let results=[];
    for(let i = 0; i < collection.length; i++){
        let obj = collection[i]
        let mismatch = false;
        for(let key in criteria){
            if(obj[key] !== criteria[key]){
                mismatch=true;
                br
            }
        }
        if(!mismatch){
          //we found a match!
            results.push(obj);
        }
    }return results
  }

console.log(findObjects(searchCriteria1, items))
console.log(findObjects(searchCriteria2, items))


//uwuwuwuwuwuwuwuwuwuwuwuwuwu
//ungabungaungabungaungabungaungabunga


const students = [
    {
      id: 1,
      name: "student1",
      isLateToday: false,
      lateCount: 15,
      redBeltStatus: false,
    },
    {
      id: 2,
      name: "student2",
      isLateToday: false,
      lateCount: 1,
      redBeltStatus: false,
    },
    {
      id: 3,
      name: "student3",
      isLateToday: false,
      lateCount: 0,
      redBeltStatus: false,
    },
  ];
  
  const id1 = 3;
  const updateData1 = { redBeltStatus: true, isLateToday: true };
  const expected1 = {
    id: 3,
    name: "student3",
    isLateToday: true,
    lateCount: 0,
    redBeltStatus: true,
  };
  
  const id2 = 1;
  const updateData2 = {
    isLateToday: true,
    lateCount: 16,
    randomKey: "randomValue",
  };
  const expected2 = {
    id: 1,
    name: "student1",
    isLateToday: true,
    lateCount: 16,
    redBeltStatus: false,
  };

  const id3 = 5;
  const updateData3 = {};
  const expected3 = null;
  
  function findByIdAndUpdate(id, updatedVals, collection) {

    for (let i=0; i<collection.length; i++) {
      let obj = collection[i]
      if (obj["id"] === id) {
        for (let key in updatedVals) {
          if (key in obj) {
            obj[key] = updatedVals[key];
          }
        }
        return obj
      }
    }
  return null;
  }

  console.log(findByIdAndUpdate(id1, updateData1, students))
  console.log(findByIdAndUpdate(id2, updateData2, students))
  console.log(findByIdAndUpdate(id3, updateData3, students))