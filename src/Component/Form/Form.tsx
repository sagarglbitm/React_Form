
import React, { useState, ChangeEvent, FormEvent } from "react";
import "./FormStyle.scss";

export interface FieldData {
  name: string;
  htmlElement: string;
  placeHolder: string;
  required:boolean;
  validation?: {
    // required?: boolean;
    pattern?: string;
    message?: string;
  };
}

export interface FormData {
  [key: string]: string;
}

interface FormProps {
  data: {
    fields: FieldData[];
    button: string;
    
    thankYouMessage: string;
  };
}

const Form: React.FC<FormProps> = ({ data }) => {
  const [formData, setFormData] = useState<FormData>({});
  const [errors, setErrors] = useState<FormData>({});
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Perform form validation
    const isValid = validateForm();

    if (isValid) {
      setFormSubmitted(true);
      setFormData({});
      setErrors({});
    }
  };

  const validateForm = () => {
    let formErrors: FormData = {};

    data.fields.forEach((fieldData) => {
      const value = formData[fieldData.name];
      const name = fieldData.name;
      const validation = fieldData.validation;

      if (validation) {
        // if (fieldData.required && (!value || value.trim() === "")) {
        //   formErrors[name] = "This field is required";
        // }

        

        if (validation.pattern && value && !new RegExp(validation.pattern).test(value)) {
          formErrors[name] = validation.message || "Invalid format";
        }
      }
    });

    setErrors(formErrors);

    // Return true if there are no errors, false otherwise
    return Object.keys(formErrors).length === 0;
  };

  return (
    <div className="form-container">
      {formSubmitted ? (
        <div className="message">{data.thankYouMessage}</div>
      ) : (
        <form onSubmit={handleSubmit}>
          {data.fields.map((fieldData, index) => (
            <div key={index} className="form-field">
              {fieldData.htmlElement === "textarea" ? (
                <textarea
                  name={fieldData.name}
                  value={formData[fieldData.name] || ""}
                  onChange={handleChange}
                  placeholder={fieldData.placeHolder}
                  required={fieldData.required}
                ></textarea>
              ) : (
                <input
                  type={fieldData.htmlElement}
                  name={fieldData.name}
                  value={formData[fieldData.name] || ""}
                  onChange={handleChange}
                  placeholder={fieldData.placeHolder}
                  required={fieldData.required}
                />
              )}
              {errors[fieldData.name] && (
                <div className="error">{errors[fieldData.name]}</div>
              )}
            </div>
          ))}
          <button type="submit">{data.button}</button>
        </form>
      )}
    </div>
  );
};

export default Form;














// import React, { useState, ChangeEvent, FormEvent } from "react";
// import "./FormStyle.scss";

// export interface FieldData {
//   name: string;
//   htmlElement: string;
//   placeHolder: string;
//   validation?: {
//     required?: boolean;
//     pattern?: string;
//     message?: string;
//   };
// }

// export interface FormData {
//   [key: string]: string;
// }

// interface FormProps {
//   data: {
//     fields: FieldData[];
//     button: string;
//   };
// }

// const Form: React.FC<FormProps> = ({ data }) => {
//   const [formData, setFormData] = useState<FormData>({});
//   const [errors, setErrors] = useState<FormData>({});

//   const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = event.target;
//     setFormData((prevFormData) => ({
//       ...prevFormData,
//       [name]: value,
//     }));
//     setErrors((prevErrors) => ({
//       ...prevErrors,
//       [name]: "",
//     }));
//   };

//   const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
  
//     // Perform form validation
//     const isValid = validateForm();
  
//     if (isValid) {
//       const updateFormData = (newFormData: FormData) => {
//         setFormData(newFormData);
//       };
  
//       console.log(formData);
  
//       alert("Form submitted successfully!");
  
//       updateFormData({});
  
//       setErrors({});
//     }
//   };
//   const validateForm = () => {
//     let formErrors: FormData = {};

//     data.fields.forEach((fieldData) => {
//       const value = formData[fieldData.name];
//       const name = fieldData.name;
//       const validation = fieldData.validation;

//       if (validation) {
//         if (validation.required && (!value || value.trim() === "")) {
//           formErrors[name] = "This field is required";
//         }

//         if (validation.pattern && value && !new RegExp(validation.pattern).test(value)) {
//           formErrors[name] = validation.message || "Invalid format";
//         }


//       }
//     });

//     setErrors(formErrors);

//     // Return true if there are no errors, false otherwise
//     return Object.keys(formErrors).length === 0;
//   };

//   return (
//     <div className="form-container">
//       <form onSubmit={handleSubmit}>
//         {data.fields.map((fieldData, index) => (
//           <div key={index} className="form-field">
//             {fieldData.htmlElement === "textarea" ? (
//               <textarea
//                 name={fieldData.name}
//                 value={formData[fieldData.name] || ""}
//                 onChange={handleChange}
//                 placeholder={fieldData.placeHolder}
//               ></textarea>
//             ) : (
//               <input
//                 type={fieldData.htmlElement}
//                 name={fieldData.name}
//                 value={formData[fieldData.name] }
//                 onChange={handleChange}
//                 placeholder={fieldData.placeHolder}
//               />
//             )}
//             {errors[fieldData.name] && (
//               <div className="error">{errors[fieldData.name]}</div>
//             )}
//           </div>
//         ))}
//         <button type="submit">{data.button}</button>
//       </form>
//     </div>
//   );
// }

// export default Form;

// import React from "react";
// import "./FormStyle.scss";

// export interface FormData {
//   name: string;
//   placeHolder: string;
//   label: string;
//   fullwidth: boolean;
//   required: boolean;
//   validation?: {
//     minLength?: number;
//     maxLength?: number;
//     pattern?: string;
//     message?:string;
//   };

//   htmlElement: string;
// }

// interface FormProps {
//   data: {
//     button: string;
//     fields: FormData[];
//   };
// }

// const Form: React.FC<FormProps> = ({ data }) => {
//   return (
//     <div className="form-container">
//       <form>
//         {data.fields.map((field, index) => {

//           return (
//             <div key={index} className="form-field">
//               {field.htmlElement === "textarea" ? (
//                 <textarea
//                   className="input-textarea"
//                   name={field.name}
//                   placeholder={field.placeHolder}
//                   required={field.required}
//                   minLength={field.validation?.minLength}
//                   maxLength={field.validation?.maxLength}
//                 ></textarea>
//               ) : (
//                 <input
//                   className="input-text"
//                   type={field.htmlElement}
//                   name={field.name}
//                   placeholder={field.placeHolder}
//                   required={field.required}
//                   maxLength={field.validation?.maxLength}
//                   pattern={field.validation?.pattern}

//                 />
//               )}
//             </div>
//           );
//         })}
//         <button type="submit" className="submit-button">
//           {data.button}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Form;