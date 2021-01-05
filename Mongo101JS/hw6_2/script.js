db.grades.aggregate([
  {$project: { student_id: 1, class_id: 1, scores: {
      $filter: {input: "$scores", as: "scores", cond: {$ne: ["$$scores.type", "quiz"]} }
  }}},
  {$project: {student_id: 1, class_id: 1, scores: {$avg: "$scores.score"}}},
  {$group: {_id: {class_id: "$class_id"}, scores: {$push: "$scores"}}},
  {$project: {_id: 0, class_id: "$_id.class_id", average: {$avg: "$scores"}}},
  {$sort: {"average": -1}}
]).pretty()
