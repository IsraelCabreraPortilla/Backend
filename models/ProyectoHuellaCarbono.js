const {  DataTypes } = require('sequelize');
const sequelize = require('../database');

// Define el modelo CompraBonosDeCarbono
const CompraBonosDeCarbono = sequelize.define('CompraBonosDeCarbono', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    alcance: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    certificado: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    entidadCertificadora: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    linkPdfCertificado: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    costoxbonoCreditoM3: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    numeroMaxBonosAComprar: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    IndicadorImpacto: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    resultadosImpacto: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    linkPresentacion: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    idItem: {
      type: DataTypes.BIGINT,
      allowNull: true
    }
  });

module.exports = CompraBonosDeCarbono;