
const initialState = {
      userInput: "0",
      firstInput: "",
      addition: false,
      subtraction: false,
      division: false,
      multiplication: false
    }

    function setFalse() {
      return {
        addition: false,
        subtraction: false,
        division: false,
        multiplication: false,
      }
    }
    function clearAllInput() {
      return {userInput: '0', firstInput: ''}
    }
    function switchInputs(state) {
      return { firstInput: state.userInput, userInput: '0',}
    }

    export default function reducer (state=initialState, action) {
      switch (action.type) {
        case 'SQRT': {
          let first = parseFloat(state.userInput)
          let stater = setFalse()
          return {...stater, firstInput: "",
            userInput: Math.sqrt(first)
        }
      }
      case 'CLEAR': {
          let falseOperator = setFalse()
          let clearInput = clearAllInput()
          return {...falseOperator, ...clearInput}
      }
      case 'CLICK': { //receives payload of numb value
        if (action.payload != "." && state.userInput == "0") {
          return {...state, userInput: action.payload}
        }
        if (action.payload == '.') {
          if (state.userInput.indexOf('.')>-1) {return state}
          else {return {...state, userInput: state.userInput + action.payload}}
        }
        else {
          return {...state, userInput: state.userInput + action.payload};
        }
      }
      case 'TEXT': { //receives payload of text input
        let input = action.payload;
        if (!isNaN(input)) {
          let numInput = String(parseFloat(input));
          return {...state, userInput: numInput}
        }
        if (input == ".") {
          if (state.userInput.indexOf('.')>-1) {return state}
          else {return {...state, userInput: state.userInput + action.payload}}
        }
      }
      case 'SQUARE': {
        let first = parseFloat(state.userInput);
        let falseOperator = setFalse()
        let switchedInputs = switchInputs(state);
        return {...state, ...falseOperator,...switchedInputs,
          userInput: Math.pow(first,2)
        };
      }
    }
    return state;
  }







  //end
