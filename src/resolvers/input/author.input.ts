import { Field, InputType } from 'type-graphql';
import { MaxLength, ValidateNested } from "class-validator";

@InputType()
class AuthorInput {
  @Field()
  @MaxLength(30)
  @ValidateNested()
  name: string;
}

export default AuthorInput;
