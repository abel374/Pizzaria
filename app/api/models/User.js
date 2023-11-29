import bcrypt from "bcrypt";
import {model, models, Schema} from "mongoose";


const UserSchema = Schema({
    email: { type: String, required: true, unique: true },
    password: {
        type: String,
        required: true,
        validate: pass => {
            if (!pass?.lenght || pass.lenght < 5) {
                new Error('A senha deve ter pelo menos 5 caracteres');
            }
        },
    },
}, {timestamps:true});

UserSchema.post('validate', function (user){
    
  const notHashedPassword = user.password;
  const salt = bcrypt.genSaltSync(10);
  user.password = bcrypt.hashSync(notHashedPassword, salt);
    
})

export const User = models?.User || model('User', UserSchema);




// import {model, models, Schema} from "mongoose";

// const UserSchema = new Schema({
//   name: {type: String},
//   email: {type: String, required: true, unique: true},
//   password: {type: String},
//   image: {type: String},
// }, {timestamps: true});

// export const User = models?.User || model('User', UserSchema);