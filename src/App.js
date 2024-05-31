import { Button } from "./components/Button.styled";
import { Flex } from "./components/Flex.styled";
import { GlobalStyles } from "./components/Global.styled";
import { Input } from "./components/Input.styled";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <div className="container">
        <h1 className="display-4 mb-5 fw-bold">Learn Styled Components</h1>
        <form id="test-form">
          <Flex direction="column">
            <div className="col-md-6 mb-3">
              <Input type="text" name="name" placeholder="Name" />
            </div>
            <div className="col-md-6 mb-3">
              <Input type="email" name="email" placeholder="Email" />
            </div>
            <div className="col-md-6 mb-3">
              <Input type="tel" name="phone" placeholder="Phone" />
            </div>
            <div className="col-md-6 mb-3">
              <Input type="password" name="password" placeholder="Password" />
            </div>
            <Flex className="form-group">
              <Button color="#fff" bgColor="#000">
                Submit
              </Button>
            </Flex>
          </Flex>
        </form>
      </div>
    </div>
  );
}

export default App;
