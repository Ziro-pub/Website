import './1st.css'


const ZIRO = "../assets/ZIRO.png";
const Arrow = '../assets/Arrow.png';

interface bulletPointProps{
  bigText: string
  smallText: string
}

function FirstSec() {


  //overall Style 
  const sectionStyle: React.CSSProperties ={
    paddingTop: '150px',
    flexDirection: 'column',
  }

  //Overall Blues Bullet point function
  const StatRow = ({ bigText, smallText}:bulletPointProps) => (
  <div 
  style={{ 
    display: 'flex', 
    alignItems: 'center', 
    margin: '35px',
    }}>
    
    <div 
    style={{ 
      fontSize: '3em', 
      fontWeight: 'bold', 
      color: 'blue', 
      marginRight: '10px', 
      lineHeight: '1',
      }}>
      {bigText}
    </div>
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column',
      alignItems: 'baseline', 
      fontSize: '1.2em',
      flexWrap: 'wrap',
      fontFamily: 'Poppins, sans-serif', 
      }}>
      {smallText.split('\n').map((line, index) => (
        <span key={index}>{line}</span>
      ))}
    </div>
  </div>
);


//First section returb
  return (
    <div style = {sectionStyle}>
      <img src={ZIRO} alt="Large Centered Logo" style={{
        width: '650px',
        height: "auto",
        marginBottom: "1px",
        gap: '10px'
      }} />

      <div>
      <p className='centered-paragraph'>
          your all-in-one  
          AI driven
          publication studio
      </p>

      </div>

      <img src={Arrow} alt="Large Centered Logo" style={{
        width: '50px',
        height: "auto",
        margin: "100px",
      }} />

      <p className='sub-Heading'>
        about us
      </p>
        
      <p className='paragraph'>
        At Zir0, we strive to revolutionize research, so that brilliant minds can focus on breakthrough ideas, not fragmented workflows
      </p>

      <p className='sub-Heading'>
        Why research is broken
      </p>

      <div 
      style={{ 
        fontFamily: 'Arial, sans-serif', 
        padding: '20px',
        justifyItems: 'center', 
        }}>
      <StatRow
        bigText="32" 
        smallText="days lost to context switching"
      />
      <StatRow
        bigText="~75%"
        smallText="time spent on data preparation vs data analysis"
      />
      <StatRow
        bigText="17"
        smallText='months average workflow length 
        80% desk rejection rate'
      />
      <StatRow
        bigText="25%"
        smallText="notebook reproducibility"
      />
    </div>

    <p className='sub-Heading'>
      we're here to help
    </p>

    <p className='paragraph'>
      Say goodbye to countless platforms and broken workflows.
    </p>
    
    <p style = {{
      fontSize: '30px',

    }}>
      Say Hello To
    </p>
    </div>
  );

}
export default FirstSec;

