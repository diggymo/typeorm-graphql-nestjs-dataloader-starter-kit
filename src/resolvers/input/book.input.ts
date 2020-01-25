import { Field, InputType } from 'type-graphql';
import AuthorInput from './author.input';
import { MaxLength, Length } from "class-validator";

@InputType()
class BookAuthorConnectInput {
  @Field()
  readonly id: number;
}

@InputType()
class BookAuthorInput {
  @Field({nullable: true})
  readonly connect: BookAuthorConnectInput;

  @Field({nullable: true})
  readonly create: AuthorInput;
}

@InputType()
class BookInput {
  @Field()
  @MaxLength(30)
  title: string;

  @Field()
  readonly author: BookAuthorInput;
}

export default BookInput;
