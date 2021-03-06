'use strict';

module.exports = function (app) {
  // Root routing
  var core = require('../controllers/core.server.controller');

  //Routes to access database

  app.route('/api/requirements')
    .get(core.listRequirements)
    .post(core.createNewRequirement)
    .put(core.updateRequirement);

  app.route('/api/requirements' + '/:requirementId')
    .delete(core.deleteRequirement);

  app.route('/api/requirements' + '/:databaseName')
    .get(core.findOneRequirement);

  app.route('/api/archive')
    .get(core.listArchives)
    .post(core.archiveStudy);

  app.route('/api/archive' + '/:archiveStudyId')
    .delete(core.deleteStudy);

  app.route('/api/studies')
    .get(core.listStudies)
    .post(core.createStudy)
    .put(core.updateStudy);

  app.route('/api/studies' + '/:studyId')
    .delete(core.deleteStudy);

  app.route('/api/contact')
    .post(core.send);

  // Define error pages
  app.route('/server-error').get(core.renderServerError);

  // Return a 404 for all undefined api, module or lib routes
  app.route('/:url(api|modules|lib)/*').get(core.renderNotFound);

  // Define application route
  app.route('/*').get(core.renderIndex);

  app.param('studyId', core.studyById);
  app.param('requirementId', core.requirementById);
  app.param('archiveStudyId', core.archiveStudyById);
  app.param('databaseName', core.requirementByDatabaseName);
};
