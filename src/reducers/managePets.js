export let state;


export function managePets(state = {pets: []}, action){
  switch (action.type){
    case 'ADD_PET':
      return {pets: [...state.pets, action.pet]}
    case 'REMOVE_PET':
      return {pets: state.pets.filter((pet)=> pet.id !== action.id)};
    default:
      return sate;
  }
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
