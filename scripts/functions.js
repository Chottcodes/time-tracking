let datajson;
async function getData() {
  const promise = await fetch("../data/data.json");
  const data = await promise.json();
  datajson = data;
}
getData();
export { datajson };
