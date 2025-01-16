// import React, { useContext } from "react";
// import { useState } from "react";
// import AppContext from "../../context/AppContext";
// import { useNavigate } from "react-router-dom";

// const Register = () => {
//   const { register } = useContext(AppContext);
//   const navigate = useNavigate()
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });
//   const onChangerHandler = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };
//   const { name, email, password } = formData;
//   const [error,setError]=useState('')


//   const submitHandler = async (e) => {
//     e.preventDefault();
//     if(password.length<4){
//     setError('Password must be at least 4 characters');
//     return;
//     // console.log(a)
//     }
//  const result=   await register(name, email, password);
//     console.log(formData);
//    if(result.success){
//     navigate('/login')
//    }

//     // console.log(formData);
//   };
//   return (
//     <>
//       <div
//         className="container my-5 p-4"
//         style={{
//           width: "600px",
//           border: "2px solid yellow",
//           borderRadius: "10px",
//         }}
//       >
//         <h1 className="text-center">User Register</h1>
//         <form onSubmit={submitHandler} className="my-3">
//           <div className="mb-3">
//             <label htmlFor="exampleInputEmail1" className="form-label">
//               Name
//             </label>
//             <input
//               name="name"
//               value={formData.name}
//               onChange={onChangerHandler}
//               type="text"
//               className="form-control"
//               id="exampleInputEmail13"
//               aria-describedby="emailHelp"
//             />
//           </div>
//           <div className="mb-3">
//             <label htmlFor="exampleInputEmail1" className="form-label">
//               Email
//             </label>
//             <input
//               name="email"
//               value={formData.email}
//               onChange={onChangerHandler}
//               type="email"
//               className="form-control"
//               id="exampleInputEmail1"
//               aria-describedby="emailHelp"
//             />
//           </div>
//           <div className="mb-3">
//             <label htmlFor="exampleInputPassword1" className="form-label">
//               Password
//             </label>
//             <input
//               name="password"
//               value={formData.password}
//               onChange={onChangerHandler}
//               type="password"
//               className="form-control"
//               id="exampleInputPassword1"
//             />
//           </div>
//           {error&&(
//             {error}
//           )}
//           <div className="d-grid col-6 mx-auto my-3">
//             <button type="submit" className="btn btn-primary">
//               Register
//             </button>
//           </div>
//         </form>
//       </div>
//     </>
//   );
// };

// export default Register;



import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import AppContext from "../../context/AppContext";

const Register = () => {
  const { register } = useContext(AppContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const onChangerHandler = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const { name, email, password } = formData;

  const submitHandler = async (e) => {
    e.preventDefault();

    if (password.length < 4) {
      setError("Password must be at least 4 characters.");
      return;
    }

    try {
      const result = await register(name, email, password);

      if (result.success) {
        navigate("/"); // Navigate to the home page
      } else {
        setError(result.message || "Registration failed. Please try again.");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <div
      className="container my-5 p-4"
      style={{
        width: "600px",
        border: "2px solid yellow",
        borderRadius: "10px",
      }}
    >
      <h1 className="text-center">User Register</h1>
      <form onSubmit={submitHandler} className="my-3">
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            name="name"
            value={formData.name}
            onChange={onChangerHandler}
            type="text"
            className="form-control"
            id="name"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            name="email"
            value={formData.email}
            onChange={onChangerHandler}
            type="email"
            className="form-control"
            id="email"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            name="password"
            value={formData.password}
            onChange={onChangerHandler}
            type="password"
            className="form-control"
            id="password"
          />
        </div>
        {error && (
          <div className="alert alert-danger" role="alert">
            {error}
          </div>
        )}
        <div className="d-grid col-6 mx-auto my-3">
          <button type="submit" className="btn btn-primary">
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
