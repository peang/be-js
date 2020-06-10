import { BaseModel } from './BaseModel';

export class UnitOwnerBuildingModel extends BaseModel {
    private id: string;
    private unitOwnerId: string;
    private buildingId: string;
    private createdAt: string;
    private updatedAt: string;

    constructor(
        id: string,
        unitOwnerId: string,
        buildingId: string,
        createdAt: string,
        updatedAt: string,
    ) {
        super();

        this.id = id;
        this.unitOwnerId = unitOwnerId;
        this.buildingId = buildingId;
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

    public getBuildingId(): string {
        return this.buildingId;
    }

    public setBuildingId(buildingId: string): void {
        this.buildingId = buildingId;
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
