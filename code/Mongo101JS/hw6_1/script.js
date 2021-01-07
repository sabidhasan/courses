db.hw3_3.aggregate([
  {$match: {"relationships.person.permalink": "eric-di-benedetto" }},
  {$project: {person: "$relationships.person.permalink" , name: 1}},
  {$unwind: "$person"},
  {$group: {_id: "$person", companies: {$addToSet: "$name"}}},
  {$project: {person: "$_id", _id: 0, length: {$size: "$companies"}}},
  {$sort: {person: -1}}
]).pretty()
