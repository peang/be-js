import { BaseModel } from './BaseModel';

export class UnitOwnerModel extends BaseModel {
    private id: string;
    private userId: string;
    private contractId: string;
    private name: string;
    private idNumber: string;
    private idType: string;
    private floor: string;
    private room: string;
    private createdAt: Date;
    private updatedAt: Date;

    constructor(
        id: string,
        userId: string,
        contractId: string,
        name: string,
        idNumber: string,
        idType: string,
        floor: string,
        room: string,
        createdAt: Date,
        updatedAt: Date,
    ) {
        super();

        this.id = id;
        this.userId = userId;
        this.contractId = contractId;
        this.name = name;
        this.idNumber = idNumber;
        this.idType = idType;
        this.floor = floor;
        this.room = room;
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

    public getContractId(): string {
        return this.contractId;
    }

    public setContractId(contractId: string): void {
        this.contractId = contractId;
    }

    public getName(): string {
        return this.name;
    }

    public setName(name: string): void {
        this.name = name;
    }

    public getIdNumber(): string {
        return this.idNumber;
    }

    public setIdNumber(idNumber: string): void {
        this.idNumber = idNumber;
    }

    public getIdType(): string {
        return this.idType;
    }

    public setIdType(idType: string): void {
        this.idType = idType;
    }

    public getFloor(): string {
        return this.floor;
    }

    public setFloor(floor: string): void {
        this.floor = floor;
    }

    public getRoom(): string {
        return this.room;
    }

    public setRoom(room: string): void {
        this.room = room;
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
