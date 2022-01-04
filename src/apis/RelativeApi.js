import BaseServices from "../services/BaseServices";

class RelativeApis extends BaseServices {
    fetchAllRelative = (lessonId) => {
        return this.get(`relatives/find?lessonId=${lessonId}`)
    }
    fetchRelative = (id) => {
        return this.get(`relatives/find/${id}`)
    }
}

export const relativeApi = new RelativeApis();