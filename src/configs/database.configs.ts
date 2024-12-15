import mongoose from 'mongoose'

const DATABASE_URL = process.env.DATABASE_URL as string

async function connectDatabase() {
  try {
    mongoose.connection.on('connected', () => {
      console.info('✅ Successfully connected to database')
    })
    mongoose.connection.on('error', (err) => {
      throw err
    })
    mongoose.connection.on('disconnected', (err) => {
      console.warn('❗ Mongoose default connection disconnected:', err)
      console.info('🔁 Trying to reconnect to Mongo...')
      setTimeout(
        async () =>
          await mongoose.connect(DATABASE_URL, {
            maxPoolSize: 10,
            connectTimeoutMS: 3000,
          }),
        3000
      )
    })

    await mongoose.connect(DATABASE_URL, {
      maxPoolSize: 10,
      socketTimeoutMS: 45000,
    })
  } catch (error) {
    console.error('❌ Error connecting to database:', error)
    await mongoose.connection.close()
    process.exit(1)
  }
}

export default connectDatabase
