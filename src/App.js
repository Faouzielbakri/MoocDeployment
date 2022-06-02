import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img
          src={
            "http://crmefsm.ac.ma/wp-content/uploads/2016/07/logo_crmef_sm.png"
          }
          className="App-logo"
          alt="CRMEF LOGO"
        />
        <p>Group 4</p>
        <p></p>
      </header>
      {/* <p>
        Coded By <span>Faouzi ELbakri</span>
        {"\n"}
        Deployed By <span>Faouzi ELbakri</span>
      </p> */}
      <table style={{ width: "100%", height: "100%" }}>
        <thead>
          <tr>
            <td style={{ fontSize: 32, fontWeight: "bold", color: "white" }}>
              Members
            </td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Faouzi ELbakri</td>
          </tr>
          <tr>
            <td>Hassan EL GHIAT</td>
          </tr>
          <tr>
            <td>Laila Bara</td>
          </tr>
          <tr>
            <td>Sanae Elbaz</td>
          </tr>
          <tr>
            <td>Ghizlane Boujdid</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
