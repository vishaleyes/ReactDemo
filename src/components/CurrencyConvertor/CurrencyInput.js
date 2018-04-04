import React, { Component } from 'react';

class CurrencyInput extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e) {
        this.props.onCurrencyChange(e.target.value);
    }
    render() {
        let className = 'input-group ' + this.props.className;
        return (
                <div className={className}>
                    <input value={this.props.value}
                           onChange={this.handleChange}
                           type="number"
                           className="form-control"
                           />
                    <div className="input-group-append">
                        <div className="input-group-text">{this.props.symbol}</div>
                    </div>
                </div>

                );
    }
}
export default CurrencyInput;

