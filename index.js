// contar palabras


db.frases.aggregate([
  { $project: { frase: { $split: ["$frase", " "] }, cantidad: {$add : 1} } },
  { $unwind: "$frase" },
  { $group: { _id: { palabras: "$frase" }, cantidad_total: { $sum: "$cantidad" } } },
  { $sort: { cantidad_total: -1 } },
  {$out: "palabras-agg"}

]);



/* USANDO LA SIGUIENTE BDD

use running
db.sesiones.insert({nombre:"Bertoldo", mes:"Marzo", distKm:6, tiempoMin:42})
db.sesiones.insert({nombre:"Herminia", mes:"Marzo", distKm:10, tiempoMin:60})
db.sesiones.insert({nombre:"Bertoldo", mes:"Marzo", distKm:2, tiempoMin:12})
db.sesiones.insert({nombre:"Herminia", mes:"Marzo", distKm:10, tiempoMin:61})
db.sesiones.insert({nombre:"Bertoldo", mes:"Abril", distKm:5, tiempoMin:33})
db.sesiones.insert({nombre:"Herminia", mes:"Abril", distKm:42, tiempoMin:285})
db.sesiones.insert({nombre:"Aniceto", mes:"Abril", distKm:5, tiempoMin:33})





*/


