//nomeado pois precisa utilizar o nome exato da função
export function inline() {
  console.log("Export nomeado inline");
}

//não necessita ser chamado pelo mesmo nome da função
//não necessita de nome pois é a padrão
export default function defaultInline() {
  console.log("Export default inline");
}
