import { formatDate } from "../helpers/helper";

const Email = ({ email, emailSubDivision, style }) => {
  console.log("email, emailSubDivision_", email, emailSubDivision);
  const formattedDate = formatDate(email.timestamp);
    return (
      <div className="flex p-3 justify-around bg-white" style={{boxShadow: "0 -0.5px 0 0 #333, 0 0.5px 0 0 #333"}}>
        <p>{emailSubDivision.name}</p>
        <p>{email.subject}</p>
        <p>{email.message}</p>
        <p>{formattedDate}</p>
      </div>
    );
};

export default Email;