import { useState } from 'react';
import './3TextBox.css'

interface ParaTitleProps {
    WWW: string;
}

interface ResponsiveTextBoxProps {
  heading: string;
  text: string;
}

//Functions:

// Individual Responsive Text Box component
const ResponsiveTextBox: React.FC<ResponsiveTextBoxProps> = ({ heading, text }) => {
  return (
    <div className="individual-text-box-unit">
      <h3 className="text-box-heading">{heading}</h3>
      <div className="text-box">
        {text}
      </div>
    </div>
  );
};

// Main container for the responsive text boxes
const TextBoxContainer: React.FC = () => {
  return (
    <div className="responsive-text-boxes-wrapper"> {/* Use the new wrapper class */}
      <ResponsiveTextBox
        heading="Unified Workspace" // Individual heading
        text={
`Code, text, graphs,
all in one place.
Customization made simple using drag and drop.
Seamlessly integrate all your research assets.`}
      />
      <ResponsiveTextBox
        heading="AI-Powered Efficiency" // Individual heading
        text={
`Automated citations,
saving you valuable time.
A cognitive partner that
works around your needs,
streamlining your workflow.`
}
      />
      <ResponsiveTextBox
        heading="Privacy & Quality First" // Individual heading
        text={`Your data's security is our top priority.
We ensure rigorous privacy standards
and deliver high-quality, reliable results.
Work with confidence and peace of mind.`}
      />
    </div>
  );
};

// whole function
export default function Thrid() {
    const sectionStyle: React.CSSProperties = {
    backgroundColor: 'white',
    color: 'black',
    minHeight: '100vh',
    padding: '50px 20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    //justifyContent: 'center',
    gap: '20px'
};

  function ParaTitle ({WWW}: ParaTitleProps) {
    return(
      <>
        <h2
        style = {{
          color: 'grey',
          fontSize: '24px',
          margin: '0',
          fontWeight: 'normal'

        }}
        > {WWW}</h2>
      </>
    );
  }

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [Occupation, setOccupation] = useState('');

  const [isChecked, setIsChecked] = useState(false);

//this is when you click submitt
  const handleSubmit = (e: React.FormEvent) => { // Type the event
    e.preventDefault(); // Prevents the default form submission behavior
    console.log('Name : ', name);
    console.log('Email : ', email);
    console.log('Occupation : ', Occupation);
    alert('Thank you for your support');
    (isChecked === true ? console.log('Spam them mf'): console.log('still do it'))
  }
//handles chekced button
  const handleToggle = () => {
    setIsChecked(!isChecked); // Toggles the state between true and false
    console.log(`Item is now ${!isChecked ? 'checked' : 'unchecked'}.`);

};



//the return




  return ( // 3. Thrid component must return JSX
    <div style={sectionStyle}>
      {
        //The 3 Paragraphs
      }
      <div style = {{padding: '10px'}}>
        <ParaTitle WWW="Refine Your Research Workflow" /> {/* Changed "refine" to "Refine" for consistency */}
      </div>

    <div className="App" style={{ 
      fontSize: "1.3rem",
      }}>
      <TextBoxContainer /> {/* This will now render the responsive boxes */}
    </div>
    {
        //Where to contact us
    }
      <div>
        <ParaTitle WWW="Connect With Us" /> {/* Changed "bu" to a more descriptive text */}
      </div>

        {
            //Form
        }

      <form onSubmit={handleSubmit} 
      className='form-container'>
          
        <div className= 'form-group'>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        
        <div className= 'form-group'>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />


        </div>
        <div className= 'form-group'>
          <label htmlFor="Occupation">Occupation:</label> {/* Changed htmlFor to Occupation */}
          <input
            type="Text"
            id="Occupation"
            value={Occupation}
            onChange={(e) => setOccupation(e.target.value)}
            required
          />
        </div>

        <div className="checkbox-wrapper">

          <input
            type="checkbox"
            id="subscribe"
            checked={isChecked}
            onChange={handleToggle}
            style={{
              width: '18px', // Size of the checkbox
              height: '18px',
              cursor: 'pointer',
            }}
          />
          <label htmlFor="subscribe" style={{ fontSize: '1rem', color: '#333', cursor: 'pointer' }}>
            Subscribe to Newsletter
          </label>
        </div>


        <button
          type="submit"
          style={{
            backgroundColor: '#333', // Dark background for the submit button
            color: 'white',
            fontSize: '1rem',
            padding: '15px 30px',
            borderRadius: '5px',
            border: 'none', // No border as per the image
            cursor: 'pointer',
            marginTop: '0px', // Space above the submit button
            transition: 'background-color 0.2s ease', // Smooth hover effect
            fontWeight: '600'
          }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = '#555')}
          onMouseLeave={(e) => (e.target.style.backgroundColor = '#333')}
        >
          Submit
        </button>
      </form>
    </div>
  );
}