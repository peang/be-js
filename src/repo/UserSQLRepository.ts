import { BaseSQLRepository } from './base/BaseSQLRepository';
import { UserModel } from '../models/UserModel';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserSQLRepository extends BaseSQLRepository {
    constructor() {
        super('users')
    }

    public async getUserList(page: number, perPage: number, query: object, sort?: object): Promise<{ data: UserModel[], total: number }> {
        throw new Error("Method not implemented.");
    }

    public async getUserDetail(condition: object): Promise<UserModel> {
        const user = await this.findOne(condition);
        
        if (user) {
            return new UserModel(
                user.id,
                user.first_name,
                user.last_name,
                user.email,
                user.created_at,
                user.updated_at
            );
        }

        return user
    }

    public async updateRetailerUser(payload: object, condition: object): Promise<void> {
        return this.update(condition, payload);
    }
}