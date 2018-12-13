const getPar = require('./pizzas').getPar;
const getCompatibilidades = require('./pizzas').getCompatibilidades;

test('Retorna par da Pessoa', () => {
    expect(getPar( 'Luca' )).toBe('Renato');
});

test('Retorna compatibilidades', () => {
    expect(getCompatibilidades( 'Luca', 'Renato' )).toBe(5);
});
