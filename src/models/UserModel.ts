import { BaseModel } from './BaseModel';

export class UserModel extends BaseModel {
    private id: string;
    private email: string;
    private phone: string;
    private password: string;
    private role: number;
    private roleId: string;
    private refreshToken: string;
    private refreshTokenExpirity: Date;
    private createdAt: Date;
    private updatedAt: Date;

    constructor(
        id: string,
        email: string,
        phone: string,
        password: string,
        role: number,
        roleId: string,
        refreshToken: string,
        refreshTokenExpirity: Date,
        createdAt: Date,
        updatedAt: Date,
    ) {
        super();
        this.id = id;
        this.email = email;
        this.phone = phone;
        this.password = password;
        this.role = role;
        this.roleId = roleId;
        this.refreshToken = refreshToken;
        this.refreshTokenExpirity = refreshTokenExpirity;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }

    public static ROLE = {
        0: 'administrator',
        1: 'building-principal',
        2: 'building-managers',
        3: 'building-admin',
        4: 'building-security',
        5: 'building-repairman',
        10: 'owner',
        11: 'tenant',
    };

    public getId(): string {
        return this.id;
    }

    public setId(id: string): void {
        this.id = id;
    }

    public getEmail(): string {
        return this.email;
    }

    public setEmail(email: string): void {
        this.email = email;
    }

    public getPhone(): string {
        return this.phone;
    }

    public setPhone(phone: string): void {
        this.phone = phone;
    }

    public getPassword(): string {
        return this.password;
    }

    public setPassword(password: string): void {
        this.password = password;
    }

    public getRole(): number {
        return this.role;
    }

    public setRole(role: number): void {
        this.role = role;
    }

    public getRoleId(): string {
        return this.roleId;
    }

    public setRoleId(roleId: string): void {
        this.roleId = roleId;
    }

    public getRefreshToken(): string {
        return this.refreshToken;
    }

    public setRefreshToken(refreshToken: string): void {
        this.refreshToken = refreshToken;
    }

    public getRefreshTokenExpirity(): Date {
        return this.refreshTokenExpirity;
    }

    public setRefreshTokenExpirity(refreshTokenExpirity: Date): void {
        this.refreshTokenExpirity = refreshTokenExpirity;
    }

    public getCreatedAt(): Date {
        return this.createdAt;
    }

    public setCreatedAt(createdAt: Date): void {
        this.createdAt = createdAt;
    }

    public getUpdatedAt(): Date {
        return this.updatedAt;
    }

    public setUpdatedAt(updatedAt: Date): void {
        this.updatedAt = updatedAt;
    }
}
