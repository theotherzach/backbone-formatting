app.models.LineItem = Backbone.Model.extend({
  saveWithFormat: function(val){
    // in the real version you do work here
    var regex = /[(),]/ig;
    var value = parseInt(val.replace(regex, ''),0);

    this.set('lineItem', val);
    this.set('value', value);
    return this; // I like to always return myself when it makes sense for chaining
  },

  getValue: function() {
    return this.get('value');
  },
  getFormatted: function(){
    var number = this.get('lineItem');
    // in the real version you do work here
    return number;
  }
});
