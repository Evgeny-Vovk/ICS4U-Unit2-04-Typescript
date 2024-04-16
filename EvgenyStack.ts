/**
 * The EvgenyStack Class.
 *
 * author  Evgeny Vovk
 * version 1.0
 * since   2024-03-25
 */

export class EvgenyStack {

  /*
  * The constructor for the EvgenyStack string stack class.
  */
  constructor() {
    this.stackAsList = []
  }

  /*
  * This method returns the stack as a string.
  */
  public get showStack() {
    let values = ""
    for (let counter = 0; counter < this.stackAsList.length; counter++) {
      values = values + this.stackAsList[counter] + ", "
    }
    values = values.substring(0, values.length-2)
    return values
  }

  /*
  * This method pushes a string onto the stack.
  */
  public push(input) {
    this.stackAsList.push(input)
  }

  /*
  * This method pops a string from the stack.
  */
  public popItem() {
    let poppedItem = ""
    if (this.stackAsList[0]) {
      poppedItem = this.stackAsList[this.stackAsList.length - 1]
    } else {
      poppedItem = "nothing to remove"
    }
    this.stackAsList.splice(-1)
    return poppedItem
  }
  /*
  * This method checks if the stack is empty or not.
  */
  public get isEmpty() {
    let emptyString = ""
    if (this.stackAsList.length > 0){
      emptyString = "This stack is not empty"
    }
    else if (this.stackAsList.length == 0) {
      emptyString = "This stack is empty"
    }
  return emptyString
  }

  /*
  * This method returns the size of the stack.
  */
  public get size() {
    return this.stackAsList.length;
  }
}

  /*
  * This method returns the top value of the stack without removing it.
  */
  public peekItem(): string {
    if (this.stackAsList.length > 0) {
      return this.stackAsList[this.stackAsList.length - 1];
    } else {
      return "Stack is empty";
    }
  }

  /*
  * This method clears the stack.
  */
  public clearStack() {
    this.stackAsList = [];
  }
}
