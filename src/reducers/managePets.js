export let state;


export function managePets(){
}

export function dispatch(){
  state = managePets(state,action);
  render();
};

export function render(){

}
