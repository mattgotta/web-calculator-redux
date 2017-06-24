
const initialState = {
      userInput: "0",
      firstInput: "",
      secondInput: "",
      addition: false,
      subtraction: false,
      division: false,
      multiplication: false,
      operatorDisplay: "",
      equalsChain: false,
    }

    function setFalse() {
      return {
        addition: false,
        subtraction: false,
        division: false,
        multiplication: false,
        equalsChain: false,
      }
    }
    function clearAllInput() {
      return {userInput: '0', firstInput: '', secondInput: '', operatorDisplay: ""}
    }
    function switchInputs(state) {
      return { firstInput: state.userInput, userInput: '0', secondInput: ""}
    }

    export default function reducer (state=initialState, action) {
      switch (action.type) {
        case 'SQRT': {
          let first = parseFloat(state.userInput)
          let stater = setFalse()
          let switchedInputs = switchInputs(state);
          return {...stater, ...switchedInputs, userInput: Math.sqrt(first)}
      }
      case 'CLEAR': {
          let falseOperator = setFalse()
          let clearInput = clearAllInput()
          return {...state, ...falseOperator, ...clearInput}
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
      case 'EQUALS': {
        if (!state.equalsChain) {
          if (state.addition == true){
            let first = parseFloat(state.firstInput);
            let second = parseFloat(state.userInput);
            var secretOutput = first + second;
            return {...state, equalsChain: true, secondInput: second, userInput: String(secretOutput)}
          }
          else if (state.subtraction == true) {
            let first = parseFloat(state.firstInput);
            let second = parseFloat(state.userInput);
            var secretOutput = first - second;
            return {...state, equalsChain: true, secondInput: second,  userInput: String(secretOutput)};
          }
          else if (state.division == true) {
            let first = parseFloat(state.firstInput);
            let second = parseFloat(state.userInput);
            var secretOutput = first / second;
            return {...state, equalsChain: true, secondInput: second, userInput: String(secretOutput)};
          }
          else if (state.multiplication == true) {
            let first = parseFloat(state.firstInput);
            let second = parseFloat(state.userInput);
            var secretOutput = first * second;
            return {...state, equalsChain: true, secondInput: second,  userInput: String(secretOutput)};
          }
        }
        if (state.equalsChain) {
          if (state.addition == true){
            let first = parseFloat(state.userInput);
            let second = parseFloat(state.secondInput);
            var secretOutput = first + second;
            return {...state, equalsChain: true, firstInput: first, secondInput: second, userInput: String(secretOutput)}
          }
          else if (state.subtraction == true) {
            let first = parseFloat(state.userInput);
            let second = parseFloat(state.secondInput);
            var secretOutput = first - second;
            return {...state, equalsChain: true, firstInput: first, secondInput: second,  userInput: String(secretOutput)};
          }
          else if (state.division == true) {
            let first = parseFloat(state.userInput);
            let second = parseFloat(state.secondInput);
            var secretOutput = first / second;
            return {...state, equalsChain: true, firstInput: first, secondInput: second, userInput: String(secretOutput)};
          }
          else if (state.multiplication == true) {
            let first = parseFloat(state.userInput);
            let second = parseFloat(state.secondInput);
            var secretOutput = first * second;
            return {...state, equalsChain: true, firstInput: first, secondInput: second,  userInput: String(secretOutput)};
          }
        }
        else {return {...state}}
      }
      case 'NEGATE': {
        var number = parseFloat(state.userInput)
        number = -number;
        return {...state, userInput: number.toString()}
      }
      case 'BACK': {
        if (state.userInput.length == 1){ //String(Math.abs(parseFloat(this.state.userInput))).length==1 how it was
          return {...state, userInput: '0'}
        }
        else {return {...state, userInput: state.userInput.toString().slice(0,-1)}}
      }
      case 'CE': {
        return {...state, userInput: '0'}
      }
      case 'INVERT': {
        let first = parseFloat(state.userInput);
        let falseOperator = setFalse();
        let switchedInputs = switchInputs(state);
        return {...state, ...falseOperator, ...switchedInputs, userInput: 1/first}
      }
      case 'ADDCHAIN': {
        return {...state, firstInput: action.payload, userInput: '0', addition: true}
      }
      case 'ADD': {
        let switchedInputs = switchInputs(state)
        let falseOperator = setFalse()
        return {...state, ...switchedInputs, ...falseOperator, addition: true}
      }
      case 'ADDCHAIN': {
        let falseOperator = setFalse()
        return {...state, ...falseOperator,  firstInput: action.payload, userInput: '0', addition: true}
      }
      case 'MINUS': {
        let switchedInputs = switchInputs(state)
        let falseOperator = setFalse()
        return {...state, ...switchedInputs, ...falseOperator, subtraction: true}
      }
      case 'MINUSCHAIN': {
        let falseOperator = setFalse()
        return {...state,  ...falseOperator, firstInput: action.payload, userInput: '0', subtraction: true}
      }
      case 'MULTIPLY': {
        let switchedInputs = switchInputs(state)
        let falseOperator = setFalse()
        return {...state, ...switchedInputs, ...falseOperator, multiplication: true}
      }
      case 'MULTIPLYCHAIN': {
        let falseOperator = setFalse()
        return {...state, ...falseOperator,  firstInput: action.payload, userInput: '0', multiplication: true}
      }
      case 'DIVIDE': {
        let switchedInputs = switchInputs(state)
        let falseOperator = setFalse()
        return {...state, ...switchedInputs, ...falseOperator, division: true}
      }
      case 'DIVIDECHAIN': {
        let falseOperator = setFalse()
        return {...state,  ...falseOperator, firstInput: action.payload, userInput: '0', division: true}
      }
      case 'OPERATOR_DISPLAY': {
        if (action.payload == 'ADD') {
          return {...state, operatorDisplay: "+"}
        }
        if (action.payload == 'MINUS') {
          return {...state, operatorDisplay: "-"}
        }
        if (action.payload == 'DIVIDE') {
          return {...state, operatorDisplay: "/"}
        }
        if (action.payload == 'MULTIPLY') {
          return {...state, operatorDisplay: "x"}
        }
      }
    }
    return state;
  }







  //end
