import { BaseModel } from './BaseModel';

export class BuildingPrincipal extends BaseModel {
    private id: string;
    private userId: string;
    private createdAt: string;
    private updatedAt: string;

    constructor(
        id: string,
        userId: string,
        createdAt: string,
        updatedAt: string,
    ) {
        super();

        this.id = id;
        this.userId = userId;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }

    public getId(): string {
        return this.id;
    }

    public setId(id: string): void {
        this.id = id;
    }

    public getUserId(): string {
        return this.userId;
    }

    public setUserId(userId: string): void {
        this.userId = userId;
    }

    public getCreatedAt(): string {
        return this.createdAt;
    }

    public setCreatedAt(createdAt: string): void {
        this.createdAt = createdAt;
    }

    public getUpdatedAt(): string {
        return this.updatedAt;
    }

    public setUpdatedAt(updatedAt: string): void {
        this.updatedAt = updatedAt;
    }
}
