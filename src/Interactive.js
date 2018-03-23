import preact from 'preact';

export default class Interactive extends preact.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
    }
  }

  render() {
    const minChar = Math.ceil((this.state.value.length + 11) / 10) * 10;
    return (
      <div className="form">
        <h1>Bias Complaints Form</h1>
        <textarea
        placeholder="I think you have unfairly covered Owen by not talking about how amazing he is..."
        className="input" value={this.state.value} onInput={(e) => this.setState({ value: e.target.value })} />
        <div className="meta">
          <div className="count">
            Please write {minChar} minimum characters.
          </div>
          <div className="button">
            <button disabled>Submit</button>
          </div>
        </div>
      </div>
    );
  }
}