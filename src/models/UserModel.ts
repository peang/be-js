export class UserModel implements ModelInterface {
    private id: string;
    private first_name: string;
    private last_name: string;
    private email: string;
    private created_at: string;
    private updated_at: string;

    constructor(
        id: string,
        first_name: string,
        last_name: string,
        email: string,
        created_at: string,
        updated_at: string
    ) {
        this.id = id;
        this.first_name = first_name;
        this.last_name = last_name;
        this.email = email;
        this.created_at = created_at;
        this.updated_at = updated_at;
    }

    public serialize(): object {
        return JSON.parse(JSON.stringify(this));
    }

    public getId(): string {
        return this.id;
    }

    public setId(id: string): void {
        this.id = id;
    }

    public getFirst_name(): string {
        return this.first_name;
    }

    public setFirst_name(first_name: string): void {
        this.first_name = first_name;
    }

    public getLast_name(): string {
        return this.last_name;
    }

    public setLast_name(last_name: string): void {
        this.last_name = last_name;
    }

    public getEmail(): string {
        return this.email;
    }

    public setEmail(email: string): void {
        this.email = email;
    }

    public getCreated_at(): string {
        return this.created_at;
    }

    public setCreated_at(created_at: string): void {
        this.created_at = created_at;
    }

    public getUpdated_at(): string {
        return this.updated_at;
    }

    public setUpdated_at(updated_at: string): void {
        this.updated_at = updated_at;
    }
}