import React, { Component } from "react";
import Coin from "../Coin/Coin";
import "./CoinFlipper.css";

class CoinFlipper extends Component {
  constructor(props) {
    super(props);
    // State üzerinde paranın başlangıçtaki durumunu veriyoruz, başlangıçta "tura" olsun.
    // Daha sonra şu anda paranın dönüp dönmeme durumunu da veriyoruz, başlangıçta para atılmamış olduğundan "false" olarak verdik.
    this.state = {
      side: "tura",
      flipping: false,
      toplam:0,
      yazi:0,
      tura:0
      
    };
  }
  
  handleClick = () => {
    // "At!" butonuna tıkladığımızda paranın dönmesini istiyoruz, bu yüzden "flipping" durumunu "true" yapıyoruz.
    this.setState({ flipping: true });
    this.setState({toplam: this.state.toplam + 1})
    {if(this.state.side === "tura"){
      this.setState({tura: this.state.tura + 1})
    }else{
      this.setState({yazi:this.state.yazi + 1})
    }}
    {let olasilik = Math.round(Math.random())
    olasilik ===  0 ? this.setState({side:"tura"}) : this.setState({side:"yazi"})}
    // 1 saniye kadar dönmesi yeterli, bu yüzden 1 saniye sonra "flipping" durmunu tekrar "false" yapıyoruz.
    setTimeout(() => this.setState({ flipping: false }), 1000);
  };
  
  render() {
    return (
      <div className="CoinFlipper">
        <h1>Yazı mı Tura mı?</h1>
        <Coin side={this.state.side} flipping={this.state.flipping} atis={this.state.atis}/>
        
        <button onClick={this.handleClick}>At!</button>
        <p>
          Toplam
          <strong> {this.state.toplam} </strong>
          atıştan
          <strong> {this.state.tura}</strong>ü tura
          <strong> {this.state.yazi} </strong>
          si yazı geldi.
        </p>
      </div>
    );
  }
}

export default CoinFlipper;
