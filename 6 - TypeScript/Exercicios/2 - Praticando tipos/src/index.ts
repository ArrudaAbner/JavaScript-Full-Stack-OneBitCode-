const planets = [];

function createPlanet(
  name: string,
  coord: [number, number, number, number],
  situation: "Habitado" | "Habitável" | "Inabitável" | "Inexplorado",
  satelites: string[]
) {
  const planet = {
    name,
    coord,
    situation,
    satelites,
  };

  const confirmation = confirm(
    `Deseja criar o planeta ${planet.name} com a situação de ${planet.situation}?`
  );

  if (confirmation) {
    planets.push(planet);
    alert(`Planeta ${planet.name} criado com sucesso!`);
  } else {
    alert("Criação abortada!");
  }

  return planet;
}

function findPlanet(name: string) {
  let planet: {
    name: string;
    coord: number[];
    situation: string;
    satelites: string[];
  };

  planet = planets.find((world) => world.name === name);

  return planet;
}

function updatePlanetSituation(
  planet: {
    name: string;
    situation: "Habitado" | "Habitável" | "Inabitável" | "Inexplorado";
  },
  name: string,
  situation: "Habitado" | "Habitável" | "Inabitável" | "Inexplorado"
) {
  const planetFind = findPlanet(name);

  if (planetFind.name === planet.name) {
    const confirmation = confirm(
      `Você deseja alterar a situação do planeta ${planetFind.name} para ${situation}?`
    );
    if (confirmation) {
      planet.situation = situation;
      alert("Situação do planeta alterada com sucesso!");
    } else {
      alert("Alteração abortada!");
    }
  } else {
    alert(`Planeta não encontrado, revise o nome e tente novamente`);
  }
}

function addSatelite(
  planet: {
    name: string;
    coord: number[];
    situation: string;
    satelites: string[];
  },
  name: string,
  satelite: string
) {
  const planetFind = findPlanet(name);

  if (planetFind.name === planet.name) {
    const confirmation = confirm(
      `Você deseja adicionar o satelite ${satelite} para o planeta ${planet.name}?\nLista de planetas atuais: ${planet.satelites}`
    );

    if (confirmation) {
      planet.satelites.push(satelite);
      alert(`Satelite ${satelite} adicionado ao planeta ${planet.name}`);
    } else {
      alert("Alteração abortada!");
    }
  } else {
    alert(`Planeta não encontrado, revise o nome e tente novamente`);
  }
}

function removeSatelite(
  planet: {
    name: string;
    coord: number[];
    situation: string;
    satelites: string[];
  },
  name: string,
  satelite: string
) {
  const planetFind = findPlanet(name);

  const indexOfSatelite = planet.satelites.indexOf(satelite);

  if (planetFind.name === planet.name) {
    const confirmation = confirm(
      `Você deseja remover o satelite ${satelite} do planeta ${planet.name}?\nLista de planetas atuais: ${planet.satelites}`
    );

    if (confirmation) {
      //TO-DO

      planet.satelites.splice(indexOfSatelite);

      alert(`Satelite ${satelite} removido do planeta ${planet.name}`);
    } else {
      alert("Alteração abortada!");
    }
  } else {
    alert(`Planeta não encontrado, revise o nome e tente novamente`);
  }
}

function showPlanets() {
  let list = "Planetas Registrados:\n";

  planets.forEach(
    (planet: {
      name: string;
      coord: number[];
      situation: string;
      satelites: string[];
    }) => {
      list += `
      Planeta: ${planet.name}
      Coordenadas: ${planet.coord},
      Situação: ${planet.situation},
      Satelites: ${planet.satelites}
    `;
    }
  );

  alert(list);
}

//Criar planeta
const terra = createPlanet("Terra", [12, 12, 12, 12], "Habitado", []);
//adicionar o satélite
addSatelite(terra, "Terra", "Lua");
//remover o satélite
removeSatelite(terra, "Terra", "Lua");
//mostrar os planetas no console
console.log(showPlanets());
