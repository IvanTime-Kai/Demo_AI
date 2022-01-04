import BaseServices from "../services/BaseServices";

class ContentApis extends BaseServices {
    fetchAll = () => {
        return this.get('lessons')
    }
    fetchChapter = (chapter) => {
        return this.get(`lessons/chapter/${chapter}`)
    }
    fetchLesson = (lesson) => {
        return this.get(`lessons/find?id=${lesson}`)
    }
}

export const contentApi = new ContentApis();