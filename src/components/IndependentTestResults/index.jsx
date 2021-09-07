import { React } from "react";
import ApiItem from "./apiitem";

const apis = [
  // OTHER
  { method: "get", url: "/api/v1/status" },

  // OSCAR REST APIS
  { method: "get", url: "/api/v1/oscarrest/providers" },
  { method: "get", url: "/api/v1/oscarrest/notes/1" },
  {
    method: "post",
    url: "/api/v1/oscar/prescriptions",
    body: [
      {
        demographicNo: 0,
        drugs: [
          {
            drugId: 0,
            providerNo: 0,
            brandName: "string",
            takeMin: 0,
            takeMax: 0,
            rxDate: "2021-07-08T16:05:49.404Z",
            endDate: "2021-07-08T16:05:49.404Z",
            frequency: "",
            duration: 0,
            durationUnit: "",
            route: "",
            method: "",
            prn: false,
            repeats: 0,
            quantity: 0,
            instructions: "string",
            additionalInstructions: "",
            archived: false,
            archivedReason: "",
            archivedDate: null,
            strength: 0,
            strengthUnit: "",
            externalProvider: "",
            longTerm: true,
            noSubstitutions: true,
          },
        ],
      },
    ],
  },
  { method: "get", url: "/api/v1/oscarrest/patients" },
  { method: "get", url: "/api/v1/oscarrest/auth" },

  // PATIENTS
  { method: "get", url: "/api/v1/oscar/patients" },
  {
    method: "post",
    url: "/api/v1/oscar/patients",
    body: {
      firstName: "James",
      lastName: "Alex",
      email: "james.alex@gmail.com",
      sex: "M",
      dateOfBirth: "1978-12-31T00:00:00.000Z",
      address: {
        province: "ON",
        method: "post",
        al: "M6H 2L9",
        city: "Toronto",
        address: "92 Auburn Ave",
      },
    },
  },
  { method: "get", url: "/api/v1/oscar/patients/all" },
  { method: "get", url: "/api/v1/oscar/patients/1" },
  {
    method: "get",
    url: "/api/v1/oscar/patients/14/allergies",
  },
  {
    method: "get",
    url: "/api/v1/oscar/patients/14/measurements",
  },
  {
    method: "get",
    url: "/api/v1/oscar/patients/14/documents",
  },
  {
    method: "get",
    url: "/api/v1/oscar/patients/14/forms",
  },
  {
    method: "get",
    url: "/api/v1/oscar/patients/14/labResults",
  },
];

export default function IndependentResults() {
  return (
    <div className="menu">
      <h1>Oscar API Individual Test Routes</h1>

      {apis.map((api, i) => {
        console.log(api);
        return <ApiItem key={i} api={api} />;
      })}
    </div>
  );
}
