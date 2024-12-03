import Joi from 'joi';

export const createPlacesSchema = Joi.object({
  name: Joi.string().required().messages({
    'any.required': 'The name field is required.',
    'string.empty': 'The name field cannot be empty.',
  }),
  location: Joi.object({
    city: Joi.string().required().messages({
      'any.required': 'The city field is required.',
      'string.empty': 'The city field cannot be empty.',
    }),
    country: Joi.string().required().messages({
      'any.required': 'The country field is required.',
      'string.empty': 'The country field cannot be empty.',
    }),
  })
    .required()
    .messages({
      'any.required': 'The location field is required.',
    }),
  description: Joi.string().allow('').messages({
    'string.empty': 'Description can be empty or a valid string.',
  }),
  isFavourite: Joi.boolean().default(false).messages({
    'boolean.base': 'The isFavourite field must be a boolean value.',
  }),
});

export const updatePlacesSchema = Joi.object({
  name: Joi.string().messages({
    'string.empty': 'The name field cannot be empty.',
  }),
  location: Joi.object({
    city: Joi.string().messages({
      'string.empty': 'The city field cannot be empty.',
    }),
    country: Joi.string().messages({
      'string.empty': 'The country field cannot be empty.',
    }),
  }).optional(),
  description: Joi.string().allow('').messages({
    'string.empty': 'Description can be empty or a valid string.',
  }),
  isFavourite: Joi.boolean().messages({
    'boolean.base': 'The isFavourite field must be a boolean value.',
  }),
})
  .min(1)
  .messages({
    'object.min': 'At least one field must be provided for update.',
  });
