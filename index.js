const drivers = ["Bobby", "Sammy", "Sally", "Annette", "Sarah", "bobby"];

function findMatching(drivers, name) {
  const lowercase = name.toLowerCase();
  const matching = drivers.filter((name) => name.toLowerCase() === lowercase);
  console.log(matching);
  return matching;
}

findMatching(drivers, Bobby);

drivers.length = 0;
drivers.push("Bobby", "Sammy", "Sally", "Annette", "Sarah", "bobby");

function fuzzyMatch(drivers, name) {
  const letters = name.slice(0, 2);
  const match = drivers.filter((name) => name.slice(0, 2) === letters);

  return match;
}
drivers.length = 0;
drivers.push(
  {
    name: "Bobby",
    hometown: "Pittsburgh",
  },
  {
    name: "Sammy",
    hometown: "New York",
  },
  {
    name: "Sally",
    hometown: "Cleveland",
  },
  {
    name: "Annette",
    hometown: "Los Angeles",
  },
  {
    name: "Bobby",
    hometown: "Tampa Bay",
  }
);
function matchName(drivers, name) {
  const match = drivers.filter((drivers) => drivers.name === name);
  return match;
}
