module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 5432),
  admin: {
    auth: {
      secret: env("ADMIN_JWT_SECRET", "b710f23d782dedaa733bd3e1731b6f92"),
    },
  },
});
