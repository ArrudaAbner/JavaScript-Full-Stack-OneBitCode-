const planets = [];

function createPlanet(
  name: string,
  coord: [number, number, number, number],
  situation: string,
  satelites: string[]
) {
  const planet = {
    name,
    coord,
    situation,
    satelites,
  };

  planets.push(planet);

  alert(`Planeta ${name} com a situação de: ${situation}!`);
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
      Planeta: ${planet.name}\n
      Coordenadas: ${planet.coord}\n,
      Situação: ${planet.situation}\n,
      Satelites: ${planet.satelites}\n
    `;
    }
  );

  alert(list);
}

function createMenu() {
  let option: number;

  option = Number(
    prompt(`
  Menu: \n
  1 - Criar planeta
  2 - Atualizar situação do planeta
  3 - Adicionar satelite
  4 - Remover satelite
  5 - Listar os planetas
  `)
  );

  switch (option) {
    case 1:
      let name: string = prompt("Qual o nome do Planeta?");
      let coord1: number = Number(prompt("Informe a 1º coordenadas: "));
      let coord2: number = Number(prompt("Informe a 2º coordenadas: "));
      let coord3: number = Number(prompt("Informe a 3º coordenadas: "));
      let coord4: number = Number(prompt("Informe a 4º coordenadas: "));
      let coord: [number, number, number, number];
      coord.push(coord1, coord2, coord3, coord4);

      type situations = "Habitado" | "Habitável" | "Inabitável" | "Inexplorado";

      let situation = prompt(
        "Qual a situação do planeta? \nHabitado | Habitável | Inabitável | Inexplorado"
      );

      if (
        situation === "Habitado" ||
        situation === "Habitável" ||
        situation === "Inabitável" ||
        situation === "Inexplorado"
      ) {
        createPlanet(name, coord, situation, []);
      } else {
        alert("Situação inválida, verifique novamente!");
      }
  }
}

createMenu()