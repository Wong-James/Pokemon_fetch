// use my_first_db
// switched to db my_first_db
// show dbs
// db.createCollection("students")
// { "ok" : 1 }
// show collections
// students
// db.students.insert({name: "Vivian", home_state: "California", lucky_number: 1, birthday: {month: 1, day: 1, year: 1993}})
// db.students.insert({name: "Christian", home_state: "California", lucky_number: 7, birthday: {month: 7, day:12 , year: 1992}})
// db.students.insert({name: "Justin", home_state: "California", lucky_number: 8, birthday: {month: 3, day: 1, year: 1995}})
// db.students.insert({name: "Brayan", home_state: "California", lucky_number: 11, birthday: {month: 8, day: 7, year: 1991}})
// db.students.insert({name: "Jane", home_state: "New York", lucky_number: 13, birthday: {month: 12, day: 12, year: 1912}})
// db.students.find({})
// db.students.find({home_state: "California"})
// db.students.find({lucky_number: {$gt: 3}})
// db.students.find({lucky_number: {$lte: 10}})
// db.students.find({lucky_number: {$in: [1,2,3,4,5,6,7,8,9]}})
// db.students.updateMany({}, {$set: {"interests": ["coding", "brunch", "MongoDB"]}})
// db.students.update({name: "christian"}, {$push: {"interests": ["Video Games"]}})
// db.students.update({name: "Justin"}, {$push: {"interests": "raves"}})
// db.students.update({name: "Brayan"}, {$push: {"interests": "brawlhalla"}})
// db.students.update({name: "Vivian"}, {$push: {"interests": "candles"}})
// db.students.update({name: "Jane"}, {$push: {"interests": "beaches"}})
// db.students.update({name: "Jane"}, {$push: {"interests": "taxes"}})
// db.students.update({}, {$pull: {"interests": "taxes"}})
// db.students.remove({home_state: "California"})
// db.students.remove({name: "jane"})
// db.students.deleteOne({lucky_number: {$gt: 5}})
// db.students.updateMany({}, {$set: {"number_of_belts": 0}})
// db.students.updateMany({home_state: "California"}, {$set: {"number_of_belts": 1}})
// db.students.updateMany({}, { $rename: {"number_of_belts": "belts_earned" }})
// db.students.remove({lucky_number})
// db.students.updateMany({}, {$unset: {lucky_number: ""}})
// db.students.updateMany({}, {$set: {updated_on: new Date()}})