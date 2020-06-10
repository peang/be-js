export interface UserSqlStructure {
    id: string;
    email: string;
    phone: string;
    password: string;
    role: number;
    role_id: string;
    refresh_token: string;
    refresh_token_expirity: Date;
    created_at: Date;
    updated_at: Date;
}
