var React = require('react');
var LocationDIV = require('./LocationDIV');
var cardTypes = require("../cardTypes.js");
var socket = io();

var dummyNeck =[]
for (var i = 0; i <= 6; i++){
    dummyNeck.push(new cardTypes.terrainCard("start"));
  }

var NeckDIV = React.createClass({
  getInitialState: function(){
    return {neck: dummyNeck};
  },

  componentDidMount(){
    self = this;
    socket.on("game started", this.__updateNeck);
  },

  __updateNeck(data) {
    this.setState({neck: data.neck});
  },

  render: function () {
    console.log("render", this.state.neck[2].name)
    var cardsInNeck = this.state.neck.map(function(card){
      return <LocationDIV className="cardDIV" card={card} />
    })

    return (
      <div  className="layoutDIV" id='NeckDIV'>
        
        <div id="allCardsDIV" className="layoutDIV">
        	{cardsInNeck}
        </div>
      </div>
    )
  }
});

module.exports = NeckDIV;


