let AppDispatcher = require('../dispatcher/AppDispatcher');
let ManageConstants = require('../constants/ManageConstants');


let ManageActions = {
    /********* SEGMENTS *********/

    /** Render the list of projects
     * @param projects
     * @param organization
     * @param hideSpinner
     * */
    renderProjects: function (projects, organization, hideSpinner) {
        AppDispatcher.dispatch({
            actionType: ManageConstants.RENDER_PROJECTS,
            projects: projects,
            organization: organization,
            hideSpinner: hideSpinner,
        });
    },

    renderAllOrganizationsProjects: function (projects, organizations, hideSpinner) {
        AppDispatcher.dispatch({
            actionType: ManageConstants.RENDER_ALL_ORGANIZATION_PROJECTS,
            projects: projects,
            organizations: organizations,
            hideSpinner: hideSpinner,
        });
    },

    updateProjects: function (projects) {
        AppDispatcher.dispatch({
            actionType: ManageConstants.UPDATE_PROJECTS,
            projects: projects,
        });
    },

    /** Render the more projects
     * @param projects
     */
    renderMoreProjects: function (projects) {
        AppDispatcher.dispatch({
            actionType: ManageConstants.RENDER_MORE_PROJECTS,
            project: projects,
        });
    },
    /** Open the translate page with the options tab open
     * @param job
     * @param prName
     */
    openJobSettings: function (job, prName) {
        AppDispatcher.dispatch({
            actionType: ManageConstants.OPEN_JOB_SETTINGS,
            job: job,
            prName: prName
        });
    },

    /** Open the translate page with the TM tab open
     * @param job
     * @param prName
     */
    openJobTMPanel: function (job, prName) {
        AppDispatcher.dispatch({
            actionType: ManageConstants.OPEN_JOB_TM_PANEL,
            job: job,
            prName: prName
        });
    },

    removeProject: function (project) {
        AppDispatcher.dispatch({
            actionType: ManageConstants.REMOVE_PROJECT,
            project: project
        });
    },

    removeJob: function (project, job) {
        AppDispatcher.dispatch({
            actionType: ManageConstants.REMOVE_JOB,
            project: project,
            job: job
        });
    },

    changeJobPassword: function (project, job, password, oldPassword) {
        AppDispatcher.dispatch({
            actionType: ManageConstants.CHANGE_JOB_PASS,
            project: project,
            job: job,
            password: password,
            oldPassword: oldPassword
        });
    },

    noMoreProjects: function () {
        AppDispatcher.dispatch({
            actionType: ManageConstants.NO_MORE_PROJECTS,
        });
    },

    showReloadSpinner: function () {
        AppDispatcher.dispatch({
            actionType: ManageConstants.SHOW_RELOAD_SPINNER,
        });
    },

    changeProjectWorkspace: function (oldWorkspace, newWorkspace, projectId) {
        AppDispatcher.dispatch({
            actionType: ManageConstants.CHANGE_PROJECT_WORKSPACE,
            oldOrganization: oldWorkspace,
            workspace: newWorkspace,
            projectId: projectId
        });
    },

    openCreateOrganizationModal: function () {
        AppDispatcher.dispatch({
            actionType: ManageConstants.OPEN_CREATE_ORGANIZATION_MODAL,
        });
    },

    openModifyOrganizationModal: function (organization) {
        AppDispatcher.dispatch({
            actionType: ManageConstants.OPEN_MODIFY_ORGANIZATION_MODAL,
            organization: organization
        });
    },

    openChangeProjectWorkspace: function (organization, projectId) {
        AppDispatcher.dispatch({
            actionType: ManageConstants.OPEN_CHANGE_ORGANIZATION_MODAL,
            organization: organization,
            projectId: projectId
        });
    },

    openAssignToTranslator: function (project, job) {
        AppDispatcher.dispatch({
            actionType: ManageConstants.OPEN_ASSIGN_TO_TRANSLATOR_MODAL,
            project: project,
            job: job
        });
    },

    renderOrganizations: function (organizations, defaultOrganization) {
        AppDispatcher.dispatch({
            actionType: ManageConstants.RENDER_ORGANIZATIONS,
            organizations: organizations,
            defaultOrganization: defaultOrganization
        });
    },

    addOrganization: function (organization) {
        AppDispatcher.dispatch({
            actionType: ManageConstants.ADD_ORGANIZATION,
            organization: organization
        });
    },

    createOrganization: function (organizationName) {
        AppDispatcher.dispatch({
            actionType: ManageConstants.CREATE_ORGANIZATION,
            organizationName: organizationName
        });
    },

    changeOrganization: function (organizationName) {
        AppDispatcher.dispatch({
            actionType: ManageConstants.CHANGE_ORGANIZATION,
            organizationName: organizationName
        });
    },

    filterProjects: function (user, workspace,  name, status) {
        AppDispatcher.dispatch({
            actionType: ManageConstants.FILTER_PROJECTS,
            user: user,
            workspace: workspace,
            name: name,
            status: status
        });
    },

    changeProjectAssignee: function (idProject, user, organizationName) {
        AppDispatcher.dispatch({
            actionType: ManageConstants.CHANGE_PROJECT_ASSIGNEE,
            user: user,
            idProject: idProject,
            organizationName: organizationName
        });
    }







};

module.exports = ManageActions;