import { BadRequestException } from '@nestjs/common';
import { NumberValueObject } from './number.value-object';

export abstract class DecimalValueObject extends NumberValueObject
{
    set value(value: number)
    {
        //if (value !== undefined && value !== null && Number.isNaN(value)) throw new BadRequestException(`Value for ${this.validationRules.name} has to be a number value`);

        super.value = value;
    }

    get value(): number
    {
        return super.value;
    }

    toString(): string
    {
        return this.value.toString();
    }
}