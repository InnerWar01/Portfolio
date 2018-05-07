const Model = function () {
    let projectsMedia = {"data": [
        {"id":1, "title": "The Tree Of Knowledge", "width": "33.33%"},
        {"id":2, "title": "Lumobok", "width": "33.33%"},
        {"id":3, "title": "Synkroma", "width": "33.33%"},
    ]};

    this.getProjectsMedia = () => {
        return projectsMedia;
    }

    this.getProjectTitleById = (id) => {
        let projectTitle = null;

        projectsMedia.data.forEach(function (project, index) {
            if (project.id === id) {
              projectTitle =  project.title;
            }
        });

        return projectTitle;
    }
};

export const modelInstance = new Model();
