import joi from "joi";

export const pokemonSchema = joi.object({
    name: joi.string().required(),
    nickname: joi.string().required(),
    ownerId: joi.number(),
    typeId: joi.number().required(),
    pokeballId: joi.number(),
    level: joi.number().required()
})



