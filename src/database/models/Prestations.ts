import { DataTypes } from 'sequelize';
import sequelize from '../instance';

const Prestations = sequelize.define('Prestations', {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    unique:true,
  },
  designation: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  TVA: {
    type: DataTypes.DECIMAL,
    allowNull: false,
  },
  PU_HT: {
    type: DataTypes.DECIMAL,
    allowNull: false,
  },
  quantite: {
    type: DataTypes.INTEGER,
    allowNull: false,
  }
});

export default Prestations;
