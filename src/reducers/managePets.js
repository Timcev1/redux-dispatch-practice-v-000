export let state;


export function managePets(){
}

export function dispatch(){
  state = managePets(state,action);
  render();
};

export function render(){
  let container = document.getElementById('container');
  let petsList = state.pets.map((pet) => {
    return `<li>${pet.name}</li>`;
  }).join(' ');
  container.innerHTML = `<ul>${petsList}</ul>`;
}
