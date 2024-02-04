import { formatDate } from "../helpers/helper";

const Email = ({ email, emailSubDivision, style }) => {
  console.log("email, emailSubDivision_", email, emailSubDivision);
  const formattedDate = formatDate(email.timestamp);
    return (
      <div style={{ padding: "0px", display:"flex", justifyContent: "space-around",boxShadow: "0 -0.5px 0 0 #333, 0 0.5px 0 0 #333", background: "#fff" }}>
        <p>{emailSubDivision.name}</p>
        <p>{email.subject}</p>
        <p>{email.message}</p>
        <p>{formattedDate}</p>
      </div>
    );
};

export default Email;