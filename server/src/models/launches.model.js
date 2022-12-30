const launches = new Map();
let latestFlightNumber = 100;

const launch = {
  flightNumber: 100,
  mission: "Kepler Exploration X",
  rocket: "Explorer IS1",
  launchDate: new Date("December 27, 2030"),
  destination: "Kepler-442 b",
  customer: ["ZTM", "NASA"],
  upcoming: true,
  success: true,
};

launches.set(launch.flightNumber, launch);

function getAllLaunches() {
  return Array.from(launches.values());
}
function addNewLaunch(lauch) {
  latestFlightNumber++;
  launch.set(
    latestFlightNumber,
    Object.assign(launch, { flightNumber: latestFlightNumber })
  );
}

module.exports = {
  launches,
  getAllLaunches,
  addNewLaunch,
};
