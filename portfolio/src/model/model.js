const Model = function () {
    let projectsMedia = {"data": [
        {"id":1, "url":"../media/interactive-tree.jpg", "title": "The Tree Of Knowledge", "width": "33.33%"},
        {"id":2, "url":"../media/lumobok.jpg", "title": "Lumobok", "width": "33.33%"},
        {"id":3, "url":"../media/synkromalogo.png", "title": "Synkroma", "width": "33.33%"},
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
