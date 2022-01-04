import BaseServices from "../services/BaseServices";

class CommentApis extends BaseServices {
    fetchComment = (id) => {
        return this.get(`comments/find/${id}`)
    }
}

export const commentApi = new CommentApis();