import TextPressure from "./TextPressure";
import RotatingText from "./RotatingText";

export default function SecondSec() {
  //
  const sectionStyle: React.CSSProperties = {
    backgroundColor: "black", // This sets the background color
    color: "white", // This makes the text readable on a black background

    minHeight: "100vh", // Makes the section take up the full screen height
    width: "auto",

    display: "flex",
    flexDirection: "column",
    alignItems: "center", // Centers the items horizontally
    justifyContent: "center",
    overflow: "hidden", // Hide any overflow from absolutely positioned elements
  };

  function CognitivePartnerSection() {
    const sectionStyle: React.CSSProperties = {
      color: "white",
      padding: "70px 20px", // Add some padding around the section
      display: "flex",
      flexDirection: "column",
      alignItems: "center", // Center content horizontally
      textAlign: "center", // Center text within its lines
      minHeight: "30vh", // Give it some height
      justifyContent: "center", // Vertically center content if there's extra space
    };

    const mainParagraphStyle: React.CSSProperties = {
      fontSize: "30px", // Larger font for the main statement
      maxWidth: "970px", // Constrain width for readability
      marginBottom: "20px", // Space below the main paragraph
      lineHeight: "1.4",
    };

    const featuresGridStyle: React.CSSProperties = {
      display: "grid",
      gridTemplateColumns: "1fr 1fr", // Two columns of equal width
      maxWidth: "900px", // Max width for the grid
      width: "100%", // Take full width up to maxWidth
      fontSize: "30px", // Font size for the feature points
      lineHeight: "0.7",
    };

    const emphasizedTextStyle: React.CSSProperties = {
      color: "#9662f7ff", // The purple color
    };

    return (
      <div style={sectionStyle}>
        <p style={mainParagraphStyle}>
          ZirO is more than your average AI productivity tool, it's a cognitive
          partner that
        </p>

        <div style={featuresGridStyle}>
          <p>learns your patterns</p>
          <p>
            <span style={emphasizedTextStyle}>optimizes autonomously</span>
          </p>
          <p>
            <span style={emphasizedTextStyle}>
              adapts to your working style
            </span>
          </p>
          <p>protects your data seamlessly</p>
        </div>
      </div>
    );
  }

  return (
    <div style={sectionStyle}>
      <div
        style={{
          display: "flex",
          flexDirection: "column", // Stack ZIRO and its rotating text/slogan vertically
          alignItems: "center", // Center horizontally
          justifyContent: "center", // Center vertically within its available space
          width: "77%",
          position: "relative",
          // No fixed height here. Let its content define its height,
          // and let the parent section's `justifyContent` handle its vertical position.
        }}
      >
        <TextPressure
          text="ZIRO"
          scale={false}
          flex={true}
          alpha={false}
          stroke={false}
          width={true}
          textColor="#ffffff"
          strokeColor="#ff0000"
          minFontSize={36}
        />

        {
          //wrap this in a div with postion relative so its alligns fully
        }
        {/* This div now holds the rotating text and the slogan, side-by-side */}
        <div
          style={{
            display: "flex",
            alignItems: "center", // Vertically align items in the middle
            gap: "20px", // Space between the rotating text and the slogan
            paddingTop: "40px", // Space below ZIRO
            flexWrap: "wrap", // Allow items to wrap on smaller screens if needed
            justifyContent: "right", // Center content when wrapped or not full width

            // Remove absolute positioning here
            // position: 'absolute',
            // top: '114%',
            // right: '45%',

            color: "#9662f7ff", // The purple color
            fontSize: "70px", // Apply font size to this container for consistency
            width: "100%", // Take full width of its parent
            marginTop: "20px", // Add margin to separate from ZIRO

            // To ensure it appears below ZIRO, we remove absolute positioning
            // and let it flow naturally in the column layout
          }}
        >
          <RotatingText
            texts={["Code", "Text", "Graphs"]}
            mainClassName="text:11x1 px-2 sm:px-2 md:px-3 bg-cyan-300 text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
            staggerFrom={"last"}
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "-120%", opacity: 0 }}
            staggerDuration={0.045}
            splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            rotationInterval={2000}
          />

          {/* Stationary text, now directly next to RotatingText */}
          <p
            style={{
              fontSize: "60px", // Adjusted font size for better visual balance
              margin: 0, // Remove default paragraph margin
              color: "white", // Ensure it's white as it's not inheriting from the purple color div
            }}
          >
            in one unified workspace
          </p>
        </div>
      </div>
      {
        //this is new textboxes
      }

      <div
        style={{
          marginTop: "80px",
          fontSize: "60px",
          textAlign: "center", // Center text horizontally
          position: "relative",
        }}
      >
        <p>from research to publication ready in</p>

        <div
          style={{
            position: "absolute",
            fontSize: "65px",
            color: "#9662f7ff", // The purple color

            top: "7.5vh",
            right: "0vh",
          }}
        >
          <p>Seconds</p>
        </div>
      </div>

      <CognitivePartnerSection />
    </div>
  );
}
