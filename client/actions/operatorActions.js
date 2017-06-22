

export function buttonPress(e) {
  return {
    type: e.target.id,
  }
}
export function handleUserInput(e) {
  return {
    type: 'TEXT',
    payload: e.target.value
  }
}
export function handleClick(e) {
  return {
    type: 'CLICK',
    payload: e.target.id
  }
}
