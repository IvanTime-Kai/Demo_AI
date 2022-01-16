import BaseServices from "../services/BaseServices";

class CommentApis extends BaseServices {
    fetchComment = (id) => {
        return this.get(`comments/find/${id}`)
    }
    addComment = (data) => {
        return this.post('comments', data)
    }
}

export const commentApi = new CommentApis();