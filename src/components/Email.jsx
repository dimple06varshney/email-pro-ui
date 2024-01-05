const Email = ({ email, emailSubDivision }) => {
    return (
      <div style={{ padding: "0px", display:"flex", justifyContent: "space-around",boxShadow: "0 -0.5px 0 0 #333, 0 0.5px 0 0 #333", background: "#fff" }}>
        <p>{emailSubDivision.name}</p>
        <p>{email.subject}</p>
        <p>{email.message}</p>
        <p>{email.timestamp}</p>
      </div>
    );
};

export default Email;