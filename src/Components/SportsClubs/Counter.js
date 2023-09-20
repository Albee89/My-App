import React from "react"

const Button = (props) => (
    <button onClick={props.increase}>Send 
    {console.log(`$button clicked {props.counter}`)}
    
    </button>
  )
  
  const Label = (props) => (
    <label onMouseOut={props.increase}>
    {console.log(`$button clicked {props.counter}`)}
    </label>
  )

  
  // Higher Order Component
  const WithCount = (WrappedComponent) => {
    return class extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
          counter: 0
        }
      }
      
      increaseCounter() {
        this.setState(
          prevState => ({
            counter: prevState.counter + 1
          })
        )
      }
      
      render() {
        return (
         
          <WrappedComponent {...this.state} increase={() => this.increaseCounter()} />
        )
      }
    }
  }
  
  const EnhancedButton = WithCount(Button)
  const EnhancedLabel = WithCount(Label)
  

  const Count = () => (
    <div>
      <EnhancedButton/>
      <br/>
      <EnhancedLabel />
    </div>
  )

  export default Count;