     const citations = [
    { texte: "La vie est un mystère qu’il faut vivre, et non un problème à résoudre.", auteur: "Gandhi" },
    { texte: "Le seul vrai échec est de ne pas essayer.", auteur: "Georges Clémenceau" },
    { texte: "Tout ce que l’esprit de l’homme peut concevoir et croire, il peut l’accomplir.", auteur: "Napoleon Hill" },
    { texte: "Le bonheur n’est pas quelque chose de prêt à l’emploi. Il vient de vos propres actions.", auteur: "Dalaï Lama" },
    { texte: "N’attendez pas. Le moment ne sera jamais 'parfait'.", auteur: "Napoleon Hill" }
]
   
console.log(citations);
for (let citation of citations) {
    console.log(citation);
}

function genererCitation() {
    const index = Math.floor(Math.random() * citations.length);
    const citation = citations[index];
  
    document.getElementById("citation").textContent = `"${citation.texte}"`;
    document.getElementById("auteur").textContent = `— ${citation.auteur}`;
  }