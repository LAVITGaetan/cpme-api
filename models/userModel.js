module.exports = (sequelize, DataTypes) => {

    const User = sequelize.define("user", {
        last_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        first_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.TEXT
        },
        password: {
            type: DataTypes.STRING
        },
        isActive: {
            type: DataTypes.STRING
        }
    })

    return User

}