// const { Admin } = require('../../models/admin');
// const jwt = require('jsonwebtoken');
// const fs = require('fs');
// const publicKEY = fs.readFileSync('./public.pub', 'utf8');

// describe('admin.generateAuthToken', () => {
//   it('should return a valid JWT token', () => {
//     const payload = { name: 'test' };

//     const token = new Admin(payload).generateAuthToken();
//     const decoded = jwt.verify(token, publicKEY);

//     expect(decoded).toMatchObject(payload);
//   });
// });