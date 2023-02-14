class UserError extends Error {
    constructor(massage) {
        super(message);
    }
}

module.exports = UserError;