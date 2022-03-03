// basic express error class
// adds message and status to error output
class expressError extends Error {
    constructor(message, status) {
        super();
        this.message = message;
        this.status = status;
    }
}

module.exports = expressError;
