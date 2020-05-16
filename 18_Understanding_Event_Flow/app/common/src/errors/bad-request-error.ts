import { CustomError } from './custom-error';

export class BadRequstError extends CustomError {
  statusCode = 400;

  constructor(public message: string) {
    super(message);

    Object.setPrototypeOf(this, BadRequstError.prototype);
  }

  serializeErrors() {
    return [{ message: this.message }];
  }
}
