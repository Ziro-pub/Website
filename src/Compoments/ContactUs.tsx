// Compoments/ContactButton.tsx

interface ContactButtonProps {
  onClick: () => void;
}

const ContactButton: React.FC<ContactButtonProps> = ({ onClick }) => {
  return (
    <>
      <style>{`
        .contact-button {
          position: fixed;
          top: 20px;
          right: 20px;

          background-color: white;
          color: black;
          border: 2px solid white;
          border-radius: 10px;
          padding: 10px 15px;
          font-size: 16px;
          cursor: pointer;
          z-index: 1000;
          font-family: 'Poppins', sans-serif;
          transition: background-color 0.3s ease, color 0.3s ease;
        }

        .contact-button:hover {
          background-color: black;
          color: white;
          border: 2px solid black;
        }
      `}</style>
      <button className="contact-button" onClick={onClick}>
        Contact Us
      </button>
    </>
  );
};

export default ContactButton;