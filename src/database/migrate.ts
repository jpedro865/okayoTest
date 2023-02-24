import sequelize from "./instance";

async function authDatabase() {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

if (process.argv[2] === 'dbcheck') {
  authDatabase();
} else if (process.argv[2] === '-f'){
  authDatabase();
} else {
  authDatabase();
}
