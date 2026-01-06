class Activity {
    constructor(id, title, description, imgUrl) {
        this.id = id
        this.title = title
        this.description = description
        this.imgUrl = imgUrl
    }
}
class Repository {
    constructor() {
        this.activities = []
        this.id = 1
    }
    getallActivities() {
        return this.activities

    }
    createActivities(title, description, imgUrl) {
        const actividad = new Activity(this.id++, title, description, imgUrl)
        this.activities.push(actividad)

    }
    deleteActivity(id) {
        this.activities = this.activities.filter((Activity) => {
            if (Activity.id !== id) {

            } return Activity
        })
    }
}

module.exports={
    Activity,
    Repository
};
