export interface PostCommentModelDTO {
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;
}

export class PostCommentModel {

    public postId!: number;
    public id!: number;
    public name!: string;
    public email!: string;
    public body!: string;

    constructor(post: Partial<PostCommentModel>) {
        Object.assign(this, post);
    }

    public static fromDto(dto: PostCommentModelDTO): PostCommentModel {
        return new PostCommentModel({
            id: dto.id,
            postId: dto.postId,
            name: dto.name,
            email: dto.email,
            body: dto.body
        });
    }
}