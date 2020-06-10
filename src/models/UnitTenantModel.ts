import { BaseModel } from './BaseModel';

export class UnitTenantModel extends BaseModel {
    private id: string;
    private unitOwnerId: string;
    private name: string;
    private phone: string;
    private createdAt: Date;
    private updatedAt: Date;

    constructor(
        id: string,
        unitOwnerId: string,
        name: string,
        phone: string,
        createdAt: Date,
        updatedAt: Date,
    ) {
        super();

        this.id = id;
        this.unitOwnerId = unitOwnerId;
        this.name = name;
        this.phone = phone;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }

    public getId(): string {
        return this.id;
    }

    public setId(id: string): void {
        this.id = id;
    }

    public getUnitOwnerId(): string {
        return this.unitOwnerId;
    }

    public setUnitOwnerId(unitOwnerId: string): void {
        this.unitOwnerId = unitOwnerId;
    }

    public getName(): string {
        return this.name;
    }

    public setName(name: string): void {
        this.name = name;
    }

    public getPhone(): string {
        return this.phone;
    }

    public setPhone(phone: string): void {
        this.phone = phone;
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
