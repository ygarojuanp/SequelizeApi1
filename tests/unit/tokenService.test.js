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

describe('Verifica o serviço de token', () => {
    beforeAll(() => {
        process.env.JWT_SECRET = 'secret';
        process.env.ACCESS_TOKEN_EXPIRATION = '1h';
        tokenService = require('../../utils/tokenService');
    });

    it('deve gerar token e validar dados do usuário', () => {
        // Arrange
        const usuario = {
            id: 7,
            email: 'teste@email.com',
            role: 'aluno'
        }
        const token = tokenService.generateToken(usuario);
        console.log(token);
        const payload = tokenService.verifyToken(token);

        // Assert
        expect(payload).toEqual(expect.objectContaining(usuario));
    });

    it('deve rejeitar um token inválido', () => {
        // Assert
        expect(() => tokenService.verifyToken('token-errado'))
            .toThrow('Token inválido ou expirado!')
    });
});