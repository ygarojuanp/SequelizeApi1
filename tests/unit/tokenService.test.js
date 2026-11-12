//describe ('', () => {
   // beforeAll(() => {
       // process.env.JWT_SECRET = 'secret';
       // process.env.ACCESS_TOKEN_EXPIRATION = '1h';
       //tokenService = require('../../utils/tokenService')
   // })
   // it('deve gerar token e validar dados do usuario', () => {
        //const usuario = {
          //  id: 7,
          //  email: 'teste@email.com',
           // role: 'aluno'
       // }
       // const token = tokenService.generateToken(usuario);
       // const payload = tokenService.verifyToken(token);

       // expect(payload).toEqual(expect.objectContaining(usuario));
    //});

   // it ('deve rejeitar um token invalido', () => {
        //expect(() => tokenService.verifyToken('token-errado'))
        //.toThrow('Token invalido ou expirado!')
    //});
//});

describe('TokenService', () => {
    let tokenService;

    beforeAll(() => {
        process.env.JWT_SECRET = 'secret';
        process.env.ACCESS_TOKEN_EXPIRATION = '1h'; // Confira se no código original está com dois 'C's
        tokenService = require('../../utils/tokenService');
    });

    it('deve gerar token e validar dados do usuario', () => {
        const usuario = {
            id: 7,
            email: 'teste@email.com',
            role: 'aluno'
        };

        const token = tokenService.generateToken(usuario);
        const payload = tokenService.verifyToken(token);

        expect(payload).toEqual(expect.objectContaining(usuario));
    });

    it('deve rejeitar um token invalido', () => {
        expect(() => tokenService.verifyToken('token-errado'))
            .toThrow('Token invalido ou expirado!');
    });
});

