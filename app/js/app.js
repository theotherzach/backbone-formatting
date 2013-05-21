$(document).ready(function(){
  app.models.lineItem = new app.models.LineItem();
  app.views.bodyView = new app.views.BodyView({
    model: app.models.lineItem,
  });
});
