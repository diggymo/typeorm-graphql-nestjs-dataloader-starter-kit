import { Field, InputType } from 'type-graphql';
import AuthorInput from './author.input';
import { MaxLength, ValidateNested, Length } from "class-validator";
import {Type} from "class-transformer"

@InputType()
class BookAuthorConnectInput {
  @Field()
  id: number;
}

@InputType()
class BookAuthorInput {
  @Field({nullable: true})
  @ValidateNested()
  connect: BookAuthorConnectInput;

  @Field({nullable: true})
  @ValidateNested()
  @Type(() => AuthorInput)
  create: AuthorInput;
}

@InputType()
class BookInput {
  @Field()
  @MaxLength(30)
  @Length(1,2)
  title: string;

  @Field()
  @ValidateNested()
  @Type(() => BookAuthorInput)
  author: BookAuthorInput;
}

export default BookInput;
