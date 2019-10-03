import React from "react";
import CurrencyFormat from "react-currency-format";
import { Input as InputAntd } from "antd";
import "./index.scss";

class Input extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    value: this.props.initialValue || ""
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.initialValue !== prevState.value) {
      return {
        value: nextProps.initialValue
      };
    }

    return null;
  }

  onChangeInternal = event => {
    let val = event.formattedValue ? event.formattedValue : event.target.value;

    this.props.onChange && this.props.onChange(event);

    this.setState({
      value: val
    });
  };

  onValueChange = values => {
    let val = values.floatValue;

    if (this.props.valueAsString) {
      val = values.formattedValue;
    }

    let fakeEvent = {
      target: {
        id: this.props.id,
        value: val || ""
      },
      currentTarget: {
        id: this.props.id,
        value: val || ""
      },
      formattedValue: values.formattedValue
    };

    this.onChangeInternal(fakeEvent);
  };

  getInput = () => {
    const {
      type,
      placeholder,
      format,
      prefix,
      sufix,
      decimalScale,
      decimalSeparator,
      thousandSeparator
    } = this.props;

    switch (type) {
      case "numeric": {
        return (
          <CurrencyFormat
            customInput={InputAntd}
            decimalScale={decimalScale}
            decimalSeparator={decimalSeparator}
            format={format}
            prefix={prefix}
            sufix={sufix}
            thousandSeparator={thousandSeparator}
            placeholder={placeholder}
            value={this.state.value}
            onValueChange={this.onValueChange}
          />
        );
      }
      case "text": {
        return (
          <InputAntd
            customInput={InputAntd}
            placeholder={placeholder}
            value={this.state.value}
            onChange={this.onChangeInternal}
          />
        );
      }
      default:
        return (
          <InputAntd
            placeholder={placeholder}
            value={this.state.value}
            onChange={this.onChangeInternal}
          />
        );
    }
  };

  render() {
    const { label, required, id } = this.props;
    return (
      <React.Fragment>
        {label && (
          <label htmlFor={id}>
            {label}
            {required && <span className="label-required"> *</span>}
          </label>
        )}
        {this.getInput()}
      </React.Fragment>
    );
  }
}

export default Input;
