import React, { Component } from 'react';
import CurrencyConvertor from './../../components/CurrencyConvertor/CurrencyConvertor';

class CurrencyConvertorTab extends Component {
    render() {
        return (
                <div className="container">
                <div className="row mt-3">
                    <div className="col-md-12">
                        <ul className="list-group">
                            <li className="list-group-item">
                            <CurrencyConvertor 
                            rate="60"
                            fromSymbol="$"
                            toSymbol="INR"
                            />
                            </li>
                            <li className="list-group-item">
                            <CurrencyConvertor 
                            rate="90"
                            fromSymbol="POUND"
                            toSymbol="INR"
                            />
                            </li>
                            <li className="list-group-item">
                            <CurrencyConvertor 
                            rate="1.6"
                            fromSymbol="INR"
                            toSymbol="YEN"
                            />
                            </li>
                            <li className="list-group-item">
                            <CurrencyConvertor 
                            rate="18"
                            fromSymbol="INR"
                            toSymbol="DINAR"
                            />
                            </li>
                            <li className="list-group-item">
                            <CurrencyConvertor 
                            rate="80"
                            fromSymbol="EURO"
                            toSymbol="INR"
                            />
                            </li>
                        </ul>
                    </div>
                </div>
                </div>
                );
    }
    onClick() {
        alert(this.props.name);
    }
}
export default CurrencyConvertorTab;