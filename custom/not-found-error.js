/**
 * NotFoundError
 *
 * @class NotFoundError
 * @extends {Error}
 */
class NotFoundError extends Error {
  /**
   * Creates an instance of NotFoundError.
   * @param {String} errorMessage
   *
   * @memberOf NotFoundError
   */
  constructor(errorMessage = 'Resource not found') {
    super(errorMessage);
    this.message = errorMessage;
    this.status = 404;
  }
}

export default NotFoundError;
