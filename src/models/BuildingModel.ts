import { BaseModel } from './BaseModel';

export class BuildingModel extends BaseModel {
    private id: string;
    private name: string;
    private slug: string;
    private address: string;
    private email: string;
    private phone: string;
    private createdAt: Date;
    private updatedAt: Date;

    constructor(
        id: string,
        name: string,
        slug: string,
        address: string,
        email: string,
        phone: string,
        createdAt: Date,
        updatedAt: Date,
    ) {
        super();

        this.id = id;
        this.name = name;
        this.slug = slug;
        this.address = address;
        this.email = email;
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

    public getName(): string {
        return this.name;
    }

    public setName(name: string): void {
        this.name = name;
    }

    public getSlug(): string {
        return this.slug;
    }

    public setSlug(slug: string): void {
        this.slug = slug;
    }

    public getAddress(): string {
        return this.address;
    }

    public setAddress(address: string): void {
        this.address = address;
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
