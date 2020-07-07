import React from 'react';
import '../css/AddButton.css';
import '../css/Input.css';

class Counter extends React.Component {
    constructor(props) {
        super(props);

        this.state = {n: 0, numberCap: "10", value: "", factorial: 1, fibonacci: "0"};

        this.handleChange = this.handleChange.bind(this);
        this.handleButton = this.handleButton.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.updateCalculators = this.updateCalculators.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    
    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleButton(e) {
        if (this.state.n < parseInt(this.state.numberCap)) {
            this.setState({ n: this.state.n + 1 });
            this.updateCalculators(this.state.n + 1);
        }
    }
    
    handleReset(e) {
        this.setState({ n: 0 });
        this.updateCalculators(0);
    }
    
    onSubmit(e) {
        if (this.state.value === "") {
            if (this.state.n > 10) {
                this.setState({ n: 10 });
            }
            this.setState({ numberCap: 10 });
            this.updateCalculators(10);

            document.getElementById("numberCapInput").value = "";
            this.setState({value: ""});
            return;
        }

        if (this.state.n > parseInt(this.state.value)) {
            this.setState({ n: parseInt(this.state.value) });
            this.updateCalculators(parseInt(this.state.value));
        }

        this.setState({ numberCap: parseInt(this.state.value) });
        this.setState({value: ""});
        document.getElementById("numberCapInput").value = "";
    }

    updateCalculators(n) {
        this.setState({ factorial: this.calculateFactorial(n) });
        this.setState({ fibonacci: this.calculateFibonnaci(n) });
    }

    calculateFactorial(n) {
        var i;
        var result = 1;
        
        for (i = 1; i <= n; i++) {
            result *= i;
        }
        
        return result;
    }

    calculateFibonnaci(n) {
        var i;
        var numberList = [0, 1];

        for (i = 0; i < n; i++) {
            numberList.push(numberList[numberList.length - 1] + numberList[numberList.length - 2]);
        }

        return numberList[n];
    }

    render () {
        return (
            <div>
                <div style={{boxShadow: "1px 2px 5px 1px #1d1d1d", marginBottom: "10px", paddingBottom: "5px"}}>
                    <span className="TitleText">A Counter</span>
                </div>

                <div style={{display: "flex"}}>
                    <div style={{display: "flex"}}>
                        <button className="ButtonAdd" onClick={this.handleButton}>{this.state.n}</button>
                        <button className="ButtonReset" onClick={this.handleReset}>Reset</button>
                    </div>
                    <div style={{display: "flex"}}>
                        <input type="text" id="numberCapInput" name="numberCap" autoComplete="off" placeholder="Set the number cap!" onChange={this.handleChange} className="Input" />
                        <button className="SubmitButton" onClick={this.onSubmit}>Apply</button>
                    </div>
                </div>
                
                <div style={{display: "flex"}}>
                    <div>
                        <span className="LabelText">Factorial</span>
                        <span className="LabelText">{this.state.factorial}</span>
                    </div>
                    <div>
                        <span className="LabelText">Fibonacci</span>
                        <span className="LabelText">{this.state.fibonacci}</span>
                    </div>
                </div>

                <span className="TipText">Tip: You can leave the number cap field empty and clicking apply will reset it to 10.</span>
            </div>
        );
    }
}

export default Counter;