import { DataTypes } from 'sequelize';
import sequelize from '../instance';
import Client from './Client';
import Emetteur from './Emetteur';
import Prestations from './Prestations';

const Facture = sequelize.define('Facture', {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    unique:true,
  },
  ref: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  date_facturation: {
    type: DataTypes.DATE,
    allowNUll: false,
  },
  date_echeance: {
    type: DataTypes.DATE,
    allowNUll: false,
  }
});

Facture.hasOne(Emetteur);
Facture.hasOne(Client);
Facture.hasMany(Prestations);

export default Facture;
