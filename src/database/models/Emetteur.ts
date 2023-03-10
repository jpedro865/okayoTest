import { DataTypes } from 'sequelize';
import sequelize from '../instance';
import Facture from './Facture';

const Emetteur = sequelize.define('Emetteur', {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    unique:true,
  },
  nom: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  adresse: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  tel: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  site_web: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

Emetteur.hasMany(Facture);

export default Emetteur;
