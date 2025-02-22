 export const checkValidData=(email,password)=>{
      const isEmailValid=/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
      const isPasswordValid=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm.test(password);

      if(!isEmailValid) return "Provided Email is not valid";
      if(!isPasswordValid) return "Password is not valid"

      return null; 
 }

 export const checkValidDataSignup=(email,password,repetedPassword)=>{

     const isEmailValid=/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
      const isPasswordValid=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm.test(password);

      if(!isEmailValid) return "Provided Email is not valid";
      if(!isPasswordValid) return "Password is not valid"


      if(password!=repetedPassword) return "Password Mismatch";

      return null;
 }