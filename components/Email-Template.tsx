import React from "react";

export interface EmailTemplateProps {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  email,
  subject,
  message,
}) => (
  <div className="flex flex-1 items-center justify-center bg-amber-50 min-h-screen">
    <div className="flex items-center justify-center text-center font-bold ">
      Enes <span className="text-num-1">SARIHAN</span>{" "}
    </div>

    <h1>From , {name}!</h1>
    <h2> Email address: {email}</h2>
    <h3 className="font-bold">Subject: {subject} </h3>
    <p className="">Message : {message}</p>
  </div>
);
