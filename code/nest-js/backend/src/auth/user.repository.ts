import { ConflictException } from "@nestjs/common";
import { EntityRepository, Repository } from "typeorm";
import * as bcrypt from 'bcrypt';
import { UserCredentialsDto } from "./dto/userCredentials.dto";
import { User } from "./user.entity";

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  public async signUp(userCredentials: UserCredentialsDto): Promise<void> {
    const { username, password } = userCredentials;
    if (await this.findOne({ username })) {
      throw new ConflictException('Username already exists');
    }

    const user = new User();
    user.username = username;
    user.salt = await bcrypt.genSalt(10);
    user.password = await this.hashPassword(password, user.salt);
    await user.save();
  }

  public async signIn(userCredentials: UserCredentialsDto): Promise<string | undefined> {
    const { username, password } = userCredentials;
    try {
      const user = await this.findOne({ username });
      const passwordHash = await this.hashPassword(password, user.salt);
      if (passwordHash !== user.password) return '';
      return user.username;
    } catch {
      return '';
    }
  }

  private async hashPassword(plaintextPassword: string, salt: string) {
    return await bcrypt.hash(plaintextPassword, salt);
  }
}
