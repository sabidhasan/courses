import { IsString, MaxLength, MinLength, Validate } from "class-validator";
import { PasswordValidation, PasswordValidationRequirement } from 'class-validator-password-check'

const passwordRequirement: PasswordValidationRequirement = {
  mustContainLowerLetter: true,
  mustContainNumber: true,
  mustContainSpecialCharacter: true,
  mustContainUpperLetter: true
}

export class UserCredentialsDto {
  @IsString()
  @MinLength(6)
  @MaxLength(24)
  username: string;
  
  @IsString()
  @MinLength(8)
  @MaxLength(24)
  @Validate(PasswordValidation, [passwordRequirement])
  password: string;
}
