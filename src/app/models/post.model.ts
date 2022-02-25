export interface PostModelDTO {
    userId: number;
    id: number;
    title: string;
    body: string;
}

export class PostModel {

    public userId!: number;
    public id!: number;
    public title!: string;
    public body!: string;
    public date?: string;

    constructor(post: Partial<PostModel>) {
        Object.assign(this, post);
    }

    public static fromDto(dto: PostModelDTO): PostModel {
        return new PostModel({
            id: dto.id,
            userId: dto.userId,
            title: dto.title,
            body: dto.body
        });
    }

    public addCurrentDate(): PostModel {
        console.log('ok')
        this.date = new Date().toString();
        return this;
    }
}