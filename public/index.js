init();

async function init() {
  console.log(`Inside init function call, aysnc`)
  if (location.search.split("=")[1] === undefined) {
    const workout = await API.getLastWorkout();
    if (workout) {
      console.log(`Just a simple log in index init ${workout}`)
      location.search = "?id=" + workout._id;
    } else {
      console.log(`Else call within init(), workout undefined or something`)
      document.querySelector("#continue-btn").classList.add("d-none")
    }
  }
}

