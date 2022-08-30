const {User} = require("../models");
const {AuthenticationError} = require("apollo-server-express")
const {signToken} = require("../utils/auth")


const resolvers = {
        Query: {
            me: async(parent, args, context) => {
                if(context.user){
                    return User.findOne({
                        _id: context.user._id
                    });
                }
                throw new AuthenticationError("Error You are not logged in!")
            },
        },
            Mutation: {
                addUser: async(parent, {username, email, password}) => {
                    const token = signToken(user);
                    return{token, user};
                },
                login: async (parent, { email, password }) => {
                    const profile = await User.findOne({ email });
              
                    if (!user) {
                      throw new AuthenticationError('No profile with this email found!');
                    }
              
                    const correctPw = await user.isCorrectPassword(password);
              
                    if (!correctPw) {
                      throw new AuthenticationError('Incorrect password!');
                    }
                    const token = signToken(user);
                    return { token, user };
                  },
            }
}



module.exports = resolvers;