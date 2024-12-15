import mongoose from 'mongoose'

async function gracefulShutdown() {
  try {
    await mongoose.connection.close()
    process.exit(0)
  } catch (error) {
    console.error(error)
    process.exit(1)
  }
}

export { gracefulShutdown }
