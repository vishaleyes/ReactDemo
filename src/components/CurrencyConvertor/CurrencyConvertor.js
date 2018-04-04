import React, { Component } from 'react';
import CurrencyInput from './CurrencyInput';

class CurrencyConvertor extends Component {
    constructor(props) {
        super(props);
        this.handleFromToConversion = this.handleFromToConversion.bind(this);
        this.handleToFromConversion = this.handleToFromConversion.bind(this);
        this.state = {direction: 'f_t', value: '1'};
    }
    handleFromToConversion(value) {
        this.setState({direction: 'f_t', value: value});
    }
    handleToFromConversion(value) {
        this.setState({direction: 't_f', value: value});
    }
    render() {
        const direction = this.state.direction;
        const rate = parseFloat(this.props.rate)
        const fromValue = direction === 'f_t' ? this.state.value : this.state.value / rate;
        const toValue = direction === 't_f' ? this.state.value : this.state.value * rate;
        return (
                <div className="row">
                    <div className="col-md-6">
                        <CurrencyInput 
                            value ={tryConvert(fromValue)}
                            symbol ={this.props.fromSymbol}
                            onCurrencyChange={this.handleFromToConversion}
                            className="mb-2 mb-sm-0"
                            />
                    </div>
                    <div className="col-md-6">
                        <CurrencyInput 
                            value ={tryConvert(toValue)}
                            symbol ={this.props.toSymbol}
                            onCurrencyChange={this.handleToFromConversion}
                            />
                    </div>
                </div>
                );
    }
}
export default CurrencyConvertor;
function tryConvert(value) {
    const input = parseFloat(value);
    if (Number.isNaN(input)) {
        return '';
    }
    return value;
}

