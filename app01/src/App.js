import React from 'react';
import './index.css';

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            nu1: null,
            nu2: null,
            operacao: '',
            resultado: null

        };
        this.handleChangeNu1 = this.handleChangeNu1.bind(this);
        this.handleChangeNu2 = this.handleChangeNu2.bind(this);
        this.handleChangeResul = this.handleChangeResul.bind(this);
    }

    handleChangeNu1 = (event) =>{
        this.setState({nu1: event.target.value});
    }

    handleChangeNu2 = (event) =>{
        this.setState({nu2: event.target.value});
    }

    handleChangeResul = (event) =>{
        let valor = 0;
        if(event.target.value === 'adicao'){
            valor = parseInt(this.state.nu1) + parseInt(this.state.nu2); 
        }

        else if(event.target.value === 'subtracao'){
            valor = parseInt(this.state.nu1) - parseInt(this.state.nu2);
        }

        else if(event.target.value === 'divisao'){
            valor = parseInt(this.state.nu1) / parseInt(this.state.nu2);
        }

        else if(event.target.value === 'multiplicacao'){
            valor = parseInt(this.state.nu1) * parseInt(this.state.nu2);
        }
        else{
            valor = '';
        }

        this.setState({resultado: valor});
    }

   render(){
       return(
            <form>
                <nav>
                    <div id="div1">
                        <label for="nu1">Número 1: </label>
                        <input type="number" name="nu1" value={this.state.nu1} onChange={this.handleChangeNu1}/>
                    </div>

                    <div id="div2">
                        <label for="nu2">Número 2: </label>
                        <input type="number" name="nu2" value={this.state.nu2} onChange={this.handleChangeNu2}/>
                    </div>

                    <div id="div3">
                        <label for="operacao">Escolha a operação desejada: </label>
                        <select name="operacao" onChange={this.handleChangeResul}>
                            <option value="selecione">Selecione</option>
                            <option value="adicao">Adição</option>
                            <option value="subtracao">Subtração</option>
                            <option value="divisao">Divisão</option>
                            <option value="multiplicacao">Multiplicação</option>
                        </select>
                    </div>
                        
                    <div id="div4">
                        <label for="resultado">Resultado: </label>
                        <input name="resultado" value={this.state.resultado}  onChange={this.handleChangeResul}/>
                    </div>
                </nav>
            </form>
       );
   }
}

export default App;