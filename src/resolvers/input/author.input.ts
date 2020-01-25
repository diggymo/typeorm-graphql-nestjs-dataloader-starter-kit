import { Field, InputType } from 'type-graphql';
import { MaxLength, Length } from "class-validator";


@InputType()
class AuthorInput {
  @Field()
  @MaxLength(30)
  readonly name: string;
}

export default AuthorInput;
