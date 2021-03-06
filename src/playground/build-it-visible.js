/*jshint esversion: 6 */ 
class VisibilityApp extends React.Component {
  constructor(props){
    super(props);
    this.HandleVisibility = this.HandleVisibility.bind(this);    
    this.state = {
      visibility: false
    };
  }
  HandleVisibility(){
    this.setState((prevState) => {
      return {
        visibility: !prevState.visibility
      };      
    });
  }
  render() {        
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.HandleVisibility}>{this.state.visibility ? 'Hide details' : 'Show Details'}</button>
        {this.state.visibility && (
          <div>
            <p>Hey. These are some details you can now see!</p>
          </div>)
        }
      </div>
    );
  }
}

ReactDOM.render(<VisibilityApp />, document.getElementById('app'));

