

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
export function handleOperator(type, payload) {
  return {
    type: type,
    payload: payload
  }
}
export function setOperatorDisplay(payload) {
  return {
    type: 'OPERATOR_DISPLAY',
    payload: payload
  }
}
