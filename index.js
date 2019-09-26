// contar palabras

db.frases.aggregate([
  { $project: { frase: { $split: ["$frase", " "] }, cantidad: {$add : 1} } },
  { $unwind: "$frase" },
  { $group: { _id: { palabras: "$frase" }, cantidad_total: { $sum: "$cantidad" } } },
  { $sort: { cantidad_total: -1 } }
]);
