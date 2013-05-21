app.models.LineItem = Backbone.Model.extend({
  saveWithFormat: function(val){
    // in the real version you do work here
    this.set('lineItem' val);
    return this // I like to always return myself when it makes sense for chaining
  },

  getFormatted: function(){
    var number = this.get('lineItem');
    // in the real version you do work here
    return number;
  }
});
