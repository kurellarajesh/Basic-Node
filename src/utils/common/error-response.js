class ErrorResponse {
    constructor(message, error){
        this.success = false;
        this.message = message;
        this.data = {};
        this.error = error;
    }
}

module.exports = ErrorResponse;