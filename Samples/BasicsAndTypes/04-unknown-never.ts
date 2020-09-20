//#region unknown
let userInput: unknown; // not "any"thing but something
let userName: string;

userInput = 5;
userInput = 'hello';

if (typeof userInput === 'string') {
    userName = userInput;
}

//#endregion

//#region never

function generateError(message: string, code: number): never { // this function never produces a value
    throw { errorMessage: message, errorCode: code };
}

generateError('An error occurred!', 500);

//#endregion
