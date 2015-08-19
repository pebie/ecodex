import React from 'react';
import InputMixin from './InputMixin';
import {Input, ButtonToolbar, Button} from 'react-bootstrap';

let InputWithValidation = React.createClass({

  propTypes: {
    action: React.PropTypes.string.isRequired,
    label: React.PropTypes.string.isRequired
  },

  mixins: [InputMixin],

  render() {
    return (
      <form>
        <Input bsStyle={this.state.style}
               ref="input"
               type="text"
               label={this.props.label}
               onChange={this.handleChange}
               hasFeedback/>
        <ButtonToolbar className="pull-right">
          <Button type="reset" onClick={this.resetValidation}>
            Réinitialiser
          </Button>
          <Button onClick={this.validHandler}
                  bsStyle={this.state.style}
                  disabled={this.state.disabled}>
            Valider
          </Button>
        </ButtonToolbar>


      </form>
    );
  }
});
export default InputWithValidation;
