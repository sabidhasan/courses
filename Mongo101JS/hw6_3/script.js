db.hw3_3.aggregate([
  {$match: {"funding_rounds.4": {$exists: true}, "founded_year": 2004}},
  {$project: {
    "year": "$founded_year",
    "av_fund": {$avg: "$funding_rounds.raised_amount"},
    // "fund_count": {$size: "$funding_rounds.raised_amount"},
    // "funding_rounds": "$funding_rounds.raised_amount",
    "name": 1,
    _id: 0,
  }},
  {$sort: {av_fund: 1}}
]).pretty()
