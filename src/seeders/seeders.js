'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      email: 'pd.khanh.s2@example.com',
      password: '123456',
      firstName: 'Khanh',
      lastName: 'Pham',
      address: 'Tuyen Hoa - Quang Binh',
      phoneNumber: '0898197333',
      gender: 1,
      roleId: 'R1',
      positionId: 'doctor',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
