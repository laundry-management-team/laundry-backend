import {
  registerDecorator,
  ValidationArguments,
  ValidationOptions,
} from 'class-validator';
import { PhoneNumberValidator } from '../helper/phone-validator.helper';

export function IsLaoPhoneNumber(validationOptions?: ValidationOptions) {
  return function (object: object, propertyName: string) {
    registerDecorator({
      name: 'isLaoPhoneNumber',
      target: object.constructor,
      propertyName,
      options: validationOptions,
      validator: {
        validate(value: unknown) {
          return (
            typeof value === 'string' && PhoneNumberValidator.isValid(value)
          );
        },
        defaultMessage(args: ValidationArguments) {
          return `${args.property} must be a valid Lao mobile number`;
        },
      },
    });
  };
}
