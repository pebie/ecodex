/**
 * Created by Pebie on 18/08/15.
 */
let InputMixin = {
  getInitialState() {
    return {
      disabled: true,
      style: null
    };
  },
  resetValidation() {
    this.setState({
      disabled: true,
      style: null
    });
  },

  validationState() {
    let length = this.refs.input.getValue().length;
    let style = 'danger';

    if (length > 1) {
      style = 'success';
    }

    let disabled = style !== 'success';

    return {style, disabled};
  },

  handleChange() {
    this.setState(this.validationState());
  },

  validHandler(){
    var data = {
      'name': this.refs.input.getValue()
    };
    this.props.action(data);
  }
};

export default InputMixin;
