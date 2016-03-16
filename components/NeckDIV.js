var React = require('react');
var LocationDIV = require('./LocationDIV');
var PlayerPiece = require('./PlayerPiece');
var cardTypes = require("../cardTypes.js");
var socket = io();



var NeckDIV = React.createClass({
  render: function () {

    var count = 0;
    var cardsInNeck = this.props.neck.map(function(card){
      var key = "card" + count;
      count++
      return <LocationDIV card={card} key={key} name={key}/>
    })

    var playersInGame = this.props.players.map(function(player){
      return <PlayerPiece player={player} />
    })

    return (
      <div  className="layoutDIV" id='NeckDIV'>
        <div id="playerPiecesDIV">
          {playersInGame}
        </div>
        <div id="allCardsDIV" className="layoutDIV">
          {cardsInNeck}
        </div>
      </div>
    )
  }
});

module.exports = NeckDIV;


