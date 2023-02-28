import { DataTypes } from 'sequelize';
import sequelize from '../instance';

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

export default Facture;
