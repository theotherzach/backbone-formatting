window.app.views.BodyView = Backbone.View.extend({
  el: $("body"),
  events: {
    "click #app-submit":  "save",
  },
  save: function () {
    var lineItem = $('#line-item').val()
    this.model.saveWithFormat(lineItem)
  }
});
