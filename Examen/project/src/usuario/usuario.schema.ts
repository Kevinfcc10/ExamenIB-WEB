import * as Joi from 'joi';
export const USUARIO_SCHEMA = Joi
    .object()
    .keys({
        nombre_usuario: Joi.string().regex(/^[a-zA-Z.,' ' ]{4,30}$/).required(),
        password_usuario: Joi.string().regex(/^[a-zA-Z.,' ' ]{4,30}$/).required(),
        //pacienteId: Joi.number(),
    });