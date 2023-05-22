import mongoose from 'mongoose'
require('dotenv').config()

const connectDatabase = () => {
  mongoose.Promise = require('bluebird')

  mongoose
    .connect(
      `mongodb+srv://trungduc:iguU1kAILF6PodFc@cluster0.udvwwuc.mongodb.net/test`
    )
    .then(() => {
      console.log('Database connection created')
    })
    .catch((err) => {
      console.log('Error:/n', err)
    })
}

export default connectDatabase
