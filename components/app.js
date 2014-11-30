var React = require('react'),
    Menu = require('./menu');

var App = React.createClass({

  onSelectItem: function(index) {
    var item = this.props.items[index];
    
    this.setState({
      selectedItems: this.state.selectedItems.concat(item)
    });
  },

  getInitialState: function() {
    return {
      selectedItems: [] 
    };
  },

  getDefaultProps: function() {
    return {
      items: [{ title: 'Bread' }, { title: 'Milk' }, { title: 'Cheese' }]  
    };
  },

  render: function() {
    var t = this;
    var listItems = this.props.items.map(function(item, i) {
      return <li key={"item" + i} onClick={t.onSelectItem.bind(null, i)}>{item.title}</li>
    });

    return (
      <div> 
        <ul>{listItems}</ul>

        <Menu items={this.state.selectedItems} />
      </div>
    );
  }
});

module.exports = App;