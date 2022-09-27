"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          firstName: "Talha",
          lastName: "khan",
          email: "talha@gmail.com",
          password: "1234",
          phoneNumber: "92owewe",
          isAdmin: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Zeeshan",
          lastName: "khan",
          email: "zeeshan@gmail.com",
          password: "1234",
          phoneNumber: "92owewe",
          isAdmin: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Afaq",
          lastName: "khan",
          email: "afaq@gmail.com",
          password: "1234",
          phoneNumber: "92owewe",
          isAdmin: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
