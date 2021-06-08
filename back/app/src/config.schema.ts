import * as Joi from '@hapi/joi'

export const configValidationSchema = Joi.object({
  STAGE: Joi.string().required(),
  PORT: Joi.number().default(5000).required(),
  MONGO_URI: Joi.string().required(),
})
