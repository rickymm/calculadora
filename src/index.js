import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  state = {
    altura: null,
    peso: null,
    imc: null,
    resultado: "Favor preencher",
    cor: "blue"
  };

  onFormSubmit = e => {
    e.preventDefault();
    this.calcularIMC();
  };

  calcularIMC = () => {
    const altura = this.state.altura;
    const peso = this.state.peso;

    const calculo = parseFloat(peso / (altura * altura)).toFixed(2);
    this.setState({ imc: calculo });

    if (calculo < 18.5) {
      this.setState({
        resultado: "Você está abaixo do peso!",
        cor: "red"
      });
    } else if (calculo >= 18.5 && calculo < 25) {
      this.setState({
        resultado: "Seu peso está normal, parabéns!",
        cor: "green"
      });
    } else if (calculo >= 25 && calculo < 30) {
      this.setState({
        resultado: "Você está acima do peso!",
        cor: "yellow"
      });
    } else if (calculo > 30) {
      this.setState({
        resultado: "Você está com obesidade!",
        cor: "red"
      });
    } else {
      this.setState({
        resultado: "Ocorreu algum erro, favor preencher novamente",
        imc: null,
        cor: "yellow"
      });
    }
  };

  render() {
    return (
      <div className="ui container">
        <div className="ui segment">
          <form className="ui form">
            <h4 className="ui dividing header">Calculadora IMC</h4>
            <div className="field">
              <label>Dados</label>
              <div className="fields">
                <div className="two wide field">
                  <input
                    type="text"
                    name="peso"
                    placeholder="Peso"
                    onChange={e => this.setState({ peso: e.target.value })}
                  />
                </div>
                <div className="two wide field">
                  <input
                    type="text"
                    name="altura"
                    placeholder="Altura"
                    onChange={e => this.setState({ altura: e.target.value })}
                  />
                </div>
                <div
                  className="ui animated button"
                  tabIndex="0"
                  onClick={this.onFormSubmit}
                >
                  <div className="hidden content">Calcular</div>
                  <div className="visible content">
                    <i className="calculator icon" />
                  </div>
                </div>
              </div>
            </div>
          </form>
          <div className="ui list">
            <h4 className="ui dividing header">Resultado</h4>
            <div className="item">
              <div className={`ui ${this.state.cor} horizontal label`}>
                {this.state.imc}
              </div>
              {this.state.resultado}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
