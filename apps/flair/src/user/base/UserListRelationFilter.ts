/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { UserWhereInput } from "./UserWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class UserListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => UserWhereInput,
  })
  @ValidateNested()
  @Type(() => UserWhereInput)
  @IsOptional()
  @Field(() => UserWhereInput, {
    nullable: true,
  })
  every?: UserWhereInput;

  @ApiProperty({
    required: false,
    type: () => UserWhereInput,
  })
  @ValidateNested()
  @Type(() => UserWhereInput)
  @IsOptional()
  @Field(() => UserWhereInput, {
    nullable: true,
  })
  some?: UserWhereInput;

  @ApiProperty({
    required: false,
    type: () => UserWhereInput,
  })
  @ValidateNested()
  @Type(() => UserWhereInput)
  @IsOptional()
  @Field(() => UserWhereInput, {
    nullable: true,
  })
  none?: UserWhereInput;
}
export { UserListRelationFilter as UserListRelationFilter };
