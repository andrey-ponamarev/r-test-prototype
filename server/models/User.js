import mongoose, { Schema } from 'mongoose';

class UserSchema extends mongoose.Schema {
    constructor() {
        super({
            userID: {
                type: String
            },
            activeTests: {
                type: Array,
                default: []
            }
        })
    }
}

export default mongoose.model('User', new UserSchema());
