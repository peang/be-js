import { Injectable } from '@nestjs/common';
import { UserModel } from '../models/UserModel';
import { UserSqlStructure } from '../types/SQLType';
import { BaseSQLRepository } from './base/BaseSQLRepository';

@Injectable()
export class UserRepository extends BaseSQLRepository {
    constructor() {
        super('user');
    }

    public async getUserList(page: number, perPage: number, query: object, sort?: object): Promise<{ data: UserModel[], total: number }> {
        throw new Error('Method not implemented.');
    }

    public async getUserDetail(condition: object): Promise<UserModel | null> {
        const user: UserSqlStructure | null = await this.findOne(condition);

        if (user) {
            return new UserModel(
                user.id,
                user.email,
                user.phone,
                user.password,
                user.role,
                user.role_id,
                user.refresh_token,
                user.refresh_token_expirity,
                user.created_at,
                user.updated_at,
            );
        }

        return null;
    }

    public async updateRetailerUser(payload: object, condition: object): Promise<void> {
        return this.update(condition, payload);
    }
}
