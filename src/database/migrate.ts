import sequelize from "./instance";
import Client from "./models/Client";
import Emetteur from "./models/Emetteur";
import Facture from "./models/Facture";
import Prestations from "./models/Prestations";

async function authDatabase() {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

async function migrate() {
  await Prestations.sync();
  await Facture.sync();
  await Client.sync();
  await Emetteur.sync();
}

async function migrateForce() {
  await Prestations.sync({ force: true });
  await Facture.sync({ force: true });
  await Client.sync({ force: true });
  await Emetteur.sync({ force: true });
}

if (process.argv[2] === 'dbcheck') {
  authDatabase();
} else if (process.argv[2] === '-f'){
  authDatabase();
  migrateForce();
} else {
  authDatabase();
  migrate();
}
