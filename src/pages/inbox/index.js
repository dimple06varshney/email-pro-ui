import { Reorder, useMotionValue } from "framer-motion";
import { useState } from "react";
import { useRaisedShadow } from "../user-raised-shadow";
import Email from "../../components/Email";

export default function InboxEmail({ data }) {
  const [emailSections, setEmailSections] = useState(data);
  const y = useMotionValue(0);
  const boxShadow = useRaisedShadow(y);

  const handleReorder = (reorderedKeys) => {
    const reorderedData = {};
    reorderedKeys.forEach((key) => {
      reorderedData[key] = emailSections.inboxEmails[key];
    });
    console.log("Reordered sections:", reorderedData);
    setEmailSections({ ...emailSections, inboxEmails: reorderedData });
  };
  return (
    <Reorder.Group
      axis="y"
      onReorder={handleReorder}
      values={Object.keys(emailSections.inboxEmails)}
    >
      {Object.entries(emailSections.inboxEmails).map(
        ([section, emails], index) => (
          <Reorder.Item
            key={section}
            value={section}
            id={section}
            style={{ boxShadow, y }}
          >
            <p style={{paddingLeft: "5px"}}>{emailSections?.emailSubdivisions[section]['name']}</p>
            {emails.map((email) => (
              <Email key={email.id} email={email} emailSubDivision={emailSections?.emailSubdivisions[section]}/>
            ))}
          </Reorder.Item>
        )
      )}
    </Reorder.Group>
  );
}
