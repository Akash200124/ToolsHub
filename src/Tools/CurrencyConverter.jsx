import React from 'react'
import { useState, useEffect, useId } from 'react'
import image from '../assets/currency-converter.jpeg'



function useCurrentInfo(currency) {
    const [data, setData] = useState({});

    useEffect(() => {
        fetch(`https://open.er-api.com/v6/latest/${currency}`)
            .then((res) => res.json())
            .then((res) => setData(res.rates))
        // console.log(data)
    }, [currency])

    // console.log(data)
    return data
}

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOption = [],
    selectCurrency = "",
    amountDisble = false,
    currecnyDisable = false,
    className = ""
}) {
    const amountInputId = useId();

    return (
        <div className={`bg-white p-3 rounded text-muted d-flex ${className}`}>
            <div className="w-50">
                <label htmlFor={amountInputId} className="text-muted mb-2 d-inline-block">
                    {label}
                </label>
                <input
                    id={amountInputId}
                    className="form-control bg-transparent py-1"
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisble}
                    value={amount}
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                    min={0}
                />
            </div>
            <div className="w-50 d-flex flex-wrap justify-content-end text-end">
                <p className="text-muted mb-2 w-100">Currency Type</p>
                <select
                    className="form-select border-2 rounded px-1 py-1 bg-light cursor-pointer text-dark"
                    value={selectCurrency}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                    disabled={currecnyDisable}
                >
                    {/* remember keys */}
                    {<option value={selectCurrency}>{selectCurrency}</option>}
                    {currencyOption &&
                        currencyOption
                            .filter((curr) => curr !== selectCurrency)
                            .map((currency) => (
                                <option key={currency} value={currency}>
                                    {currency}
                                </option>
                            ))}
                </select>
            </div>
        </div>
    );
}

function CurrencyConverter() {
    const [amount, setAmount] = useState("");
    const [from, setFrom] = useState("USD");
    const [to, setTo] = useState("INR");
    const [convertedAmount, setConvertedAmout] = useState("");

    const curencyInfo = useCurrentInfo(from);
    const option = Object.keys(curencyInfo);

    const swap = () => {
        setFrom(to);
        setTo(from);
        setAmount(convertedAmount);
        setConvertedAmout(amount);
    };

    const convert = () => {
        setConvertedAmout(amount * curencyInfo[to.toUpperCase()]);
    };

    return (
        <div
            className="w-100  mt-5 h-100 d-flex flex-wrap justify-content-center align-items-center ">
            <div className="w-50">
                <div className="max-w-md mx-auto border border-secondary rounded p-4 backdrop-blur-sm bg-white bg-opacity-30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            convert();
                        }}
                    >
                        <div className="w-100 mb-3">
                            <InputBox
                                label="From"
                                amount={amount}
                                currencyOption={option}
                                onCurrencyChange={(currency) => setFrom(currency)}
                                selectCurrency={from}
                                onAmountChange={(amount) => setAmount(amount)}
                            />
                        </div>
                        <div className="position-relative w-100 my-2">
                            <button
                                type="button"
                                className="position-absolute start-50 translate-middle border border-white rounded bg-primary text-white py-1 px-2"
                                onClick={swap}
                            >
                                Swap
                            </button>
                        </div>
                        <div className="w-100 mt-3 mb-4">
                            <InputBox
                                label="To"
                                amount={convertedAmount}
                                currencyOption={option}
                                selectCurrency={to}
                                onCurrencyChange={(currency) => setTo(currency)}
                                amountDisble
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-100 btn btn-primary py-2 rounded"
                        >
                            Convert {from.toUpperCase()} to {to.toUpperCase()}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default CurrencyConverter
