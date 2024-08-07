import mongoose from 'mongoose';

const uri = "mongodb://localhost:27017/test";
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const UserSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: true,
            unique: true, 
            readonly: true
        },
        password: {
            type: String,
            required: true,
            minLength: [4, "El password debe tener al menos 4 caracteres"],
            maxLength: [8, "El password debe tener como máximo 8 caracteres"]
        }
    },
    {
        virtual: {
            domain: {
                get: function () {
                    return this.email.split('@')[1];
                }
            }
        },
    
        methods: {
            saveUser: async function () {
                if (this._id) {
                    return this.save();
                } else {
                    const result = await this.save();
                    this._id = result._id;
                }
            }
        },

        statics: {
            findUser: async function (email) {
                const result = await this.findOne({ email: email });
                if (!result) {
                    return null;
                }
                return result;
            }
        }
    }
);


const User = mongoose.model('User', UserSchema);

export default User;