function group() {
  console.log("Export nomeado não-inline (agrupado)");
}

function exportDefault() {
  console.log("Export default não-inline");
}

//export non-inline
export { group, exportDefault };

//export default non-inline
export default exportDefault;
