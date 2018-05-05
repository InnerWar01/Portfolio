const Model = function () {
    let projectsMedia = {"data": [
        {"id":1, "url":"../media/interactive-tree.jpg", "title": "Interactive Tree", "width": "40%"},
        {"id":2, "url":"../media/lumobok.jpg", "title": "Lumobok", "width": "30%"},
        {"id":3, "url":"../media/synchroma.png", "title": "Synchroma", "width": "30%"},
    ]};

    this.getProjectsMedia = () => {
        return projectsMedia;
    }
};

export const modelInstance = new Model();
