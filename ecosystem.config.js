module.exports = {
  apps: [
    {
      name: 'earthwormai-backend',
      script: './build/server.js',
      exec_mode: 'fork',
      instances: 1,
      autorestart: true,
      wait_ready: true,
      listen_timeout: 12000,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'development',
      },
      env_production: {
        NODE_ENV: 'production',
      },
    },
  ],
}
