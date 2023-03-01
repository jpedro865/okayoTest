import { DataTypes } from 'sequelize';
import sequelize from '../instance';
import Facture from './Facture';

const Client = sequelize.define('client', {
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
});

Client.hasMany(Facture);

export default Client;
