export interface UserModelDTO {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
    website: string;
}

export class UserModel {

    public id!: number;
    public name!: string;
    public username!: string;
    public email!: string;
    public phone!: string;
    public website!: string;

    constructor(post: Partial<UserModel>) {
        Object.assign(this, post);
    }

    public static fromDto(dto: UserModelDTO): UserModel {
        return new UserModel({
            id: dto.id,
            name: dto.name,
            username: dto.username,
            email: dto.email,
            phone: dto.phone,
            website: dto.website
        });
    }
}