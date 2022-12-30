const API_URL = "http://localhost:8000";

async function httpGetPlanets() {
  let res = await fetch(`${API_URL}/planets`);
  return await res.json();
}

async function httpGetLaunches() {
  let res = await fetch(`${API_URL}/launches`);
  let fetchedLaunches = await res.json();
  return fetchedLaunches.sort((a, b) => {
    return a.flightNumber - b.flightNumber;
  });
}

async function httpSubmitLaunch(launch) {
  // TODO: Once API is ready.
  // Submit given launch data to launch system.
}

async function httpAbortLaunch(id) {
  // TODO: Once API is ready.
  // Delete launch with given ID.
}

export { httpGetPlanets, httpGetLaunches, httpSubmitLaunch, httpAbortLaunch };
