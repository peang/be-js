import { BaseModel } from './BaseModel';

export class PrincipalBuildingModel extends BaseModel {
    private id: string;
    private principalId: string;
    private buildingId: string;
    private createdAt: Date;
    private updatedAt: Date;

    constructor(
        id: string,
        principalId: string,
        buildingId: string,
        createdAt: Date,
        updatedAt: Date,
    ) {
        super();

        this.id = id;
        this.principalId = principalId;
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

    public getPrincipalId(): string {
        return this.principalId;
    }

    public setPrincipalId(principalId: string): void {
        this.principalId = principalId;
    }

    public getBuildingId(): string {
        return this.buildingId;
    }

    public setBuildingId(buildingId: string): void {
        this.buildingId = buildingId;
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
