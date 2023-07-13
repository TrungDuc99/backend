import mongoose from 'mongoose'
require('dotenv').config()

const connectDatabase = () => {
  mongoose.Promise = require('bluebird')

  mongoose
    .connect(
      `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.xwaiv0u.mongodb.net/${process.env.DB_NAME}`
    )
    .then(() => {
      console.log('Database connection created')
    })
    .catch((err) => {
      console.log('Error:/n', err)
    })
}

export default connectDatabase
