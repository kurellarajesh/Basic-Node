class SuccessResponse {
    constructor(message, data){
        this.success = true;
        this.message = message;
        this.data = data;
    }
}

module.exports = SuccessResponse;