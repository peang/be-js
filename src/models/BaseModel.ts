export class BaseModel {
    public serialize(): object {
        return JSON.parse(JSON.stringify(this));
    }
}