module.exports = (sequelize: any, DataTypes: any) => {
  const tablea = sequelize.define("tablea", {
    serial: DataTypes.STRING,
    date: DataTypes.DATE,
    a: DataTypes.STRING,
    b: DataTypes.STRING,
    c: DataTypes.STRING,
    d: DataTypes.DATE,
    e: DataTypes.STRING,
    f: DataTypes.DOUBLE,
    g: DataTypes.STRING,
    h: DataTypes.DOUBLE,
    i: DataTypes.STRING,
    j: DataTypes.STRING,
    k: DataTypes.STRING,
    l: DataTypes.STRING,
    n: DataTypes.BOOLEAN,
    recallserial: DataTypes.STRING,
  },
    {}
  );
  tablea.associate = function (models: any) {
    // associations can be defined here
    // tablea.hasMany(models["Itemo"]);
    // tablea.belongsTo(models["Itemj"]);
    // tablea.hasMany(models.itemc_tablea);
  };
  return tablea;
};
