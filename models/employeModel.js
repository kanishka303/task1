module.exports = (sequelize, DataTypes) => {

    const Employe = sequelize.define("employe", {
        employeName: {
            type: DataTypes.STRING,
            allowNull: false
        },

    
    })

    return Employe

}