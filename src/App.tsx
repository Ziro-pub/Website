import "./App.css";
import FirstSec from "./Compoments/1stSection/1st.tsx";
import SecondSec from "./Compoments/2ndSection/2nd.tsx";
import Third from "./Compoments/3rdSection/3rd.tsx";
import ContactButton from "./Compoments/ContactUs.tsx";

function App() {
  const handleContactClick = () => {
    console.log("Contact Us button clicked!");
  };

  return (
    <div>
      <ContactButton onClick={handleContactClick} />

      <div>
        <FirstSec />
      </div>

      <div>
        <SecondSec />
      </div>

      <div>
        <Third />
      </div>
    </div>
  );
}

export default App;
