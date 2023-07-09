import { GoogleLogin, googleLogout, useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { FaAppStore, FaApple } from 'react-icons/fa';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';

const Login = () => {
  const [ user, setUser ] = useState([]);
  const [ profile, setProfile ] = useState([]);

  // normal login
  const history = useNavigate();

    const [inpval, setInpval] = useState({
        email: "",
        password: ""
    })

    const [data, setData] = useState([]);
    console.log(inpval);

    const getdata = (e) => {
        // console.log(e.target.value);


        const { value, name } = e.target;
        // console.log(value,name);


        setInpval(() => {
            return {
                ...inpval,
                [name]: value
            }
        })

    }

    //validation
    const addData = (e) => {
      e.preventDefault();

      const getuserArr = localStorage.getItem("useryoutube");
      console.log(getuserArr);

      const { email, password } = inpval;
      if (email === "") {
          toast.error('email field is requred', {
              position: "top-center",
          });
      } else if (!email.includes("@")) {
          toast.error('plz enter valid email addres', {
              position: "top-center",
          });
      } else if (password === "") {
          toast.error('password field is requred', {
              position: "top-center",
          });
      } else if (password.length < 5) {
          toast.error('password length greater five', {
              position: "top-center",
          });
      } else {

          if (getuserArr && getuserArr.length) {
              const userdata = JSON.parse(getuserArr);
              const userlogin = userdata.filter((el, k) => {
                  return el.email === email && el.password === password
              });

              if (userlogin.length === 0) {
                  alert("invalid details")
              } else {
                  console.log("user login succesfulyy");

                  localStorage.setItem("user_login", JSON.stringify(userlogin))

                  history("/profile")
              }
          }
      }

  }

  const login = useGoogleLogin({
      onSuccess: (codeResponse) => setUser(codeResponse),
      onError: (error) => console.log('Login Failed:', error)
  });

  useEffect(
      () => {
          if (user) {
              axios
                  .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
                      headers: {
                          Authorization: `Bearer ${user.access_token}`,
                          Accept: 'application/json'
                      }
                  })
                  .then((res) => {
                      setProfile(res.data);
                  })
                  .catch((err) => console.log(err));
          }
      },
      [ user ]
  );

  // log out function to log the user out of google and set the profile array to null
  const logOut = () => {
      googleLogout();
      setProfile(null);
  };
  return (
    <section className='container  bg-login-image md:pt-0'>
      <div className="shadow border lg:w-1/3  mx-auto bg-white md:w-7/12">
      <div className='text-center'>
        <div class="p-8">
          <svg className='mx-auto'
            height="100"
            viewBox="0 0 188 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Evernote</title>
            <path
              d="M0 29.6683L1.53769 29.3522C2.89447 28.9909 3.25628 28.8103 3.25628 26.1009V4.83182C3.25628 2.12239 2.84925 1.8966 1.53769 1.5805L0 1.2644V0H24.5126L24.9648 8.98628H23.5628C22.4322 6.50264 21.7085 5.19308 21.0301 4.19962C19.5829 2.12239 18.6332 1.94176 15.5126 1.94176C13.206 1.94176 12.0754 2.2127 11.397 2.39333V13.9084H12.6181C15.7839 13.9084 16.5075 13.5472 17.0503 12.5537C17.6834 11.4248 18.0452 10.5668 18.4523 9.12175H19.809V20.7723H18.4523C18.0452 19.3724 17.6834 18.4693 17.0503 17.1597C16.5075 16.0308 15.9196 15.805 12.6181 15.805H11.397V24.4752C11.397 28.4942 11.5327 28.9458 15.9196 28.9458C19.5377 28.9458 20.2613 28.4942 21.7538 26.2815C22.5678 25.0622 23.4271 23.1656 24.603 20.3207H26.0503L25.4171 30.9327H0.0452261L0 29.6683ZM29.804 12.7343C28.7638 10.2055 28.2663 9.57333 27.1357 9.21207L26.2764 8.94113V7.76704H39.7085V8.94113L38.4874 9.25723C37.5377 9.52817 37.0854 9.97974 37.0854 11.0635C37.0854 11.6957 37.3116 12.4634 37.6734 13.4568L41.4271 23.7527H41.6533L45.2714 13.4568C45.6784 12.3731 45.8593 11.6054 45.8593 10.9732C45.8593 9.97974 45.407 9.48301 44.4573 9.25723L43.2362 8.94113V7.76704H51.5126V8.94113L50.6533 9.21207C49.4774 9.61848 48.9799 10.2958 47.8945 13.2311L40.9749 30.9327H37.1759L29.804 12.7343ZM50.4724 19.237C50.4724 11.4699 56.2161 7.18 62.1407 7.18C68.2915 7.18 72.1357 10.2507 72.2714 18.3338H57.5276C57.6633 25.6493 60.4221 27.6362 65.0352 27.6362C67.794 27.6362 69.9196 26.8234 71.593 25.9654V27.4556C70.01 29.1716 66.6181 31.5197 62.1407 31.5197C54.3618 31.4294 50.4724 26.8234 50.4724 19.237ZM57.5276 16.6179L65.1708 16.2114C65.1708 10.8377 64.4472 8.85081 61.7789 8.85081C59.5176 8.85081 57.7085 11.0184 57.5276 16.6179ZM84.0754 10.6119C85.3417 9.25723 87.9196 7.04452 90.9045 7.04452C92.804 7.04452 94.3869 8.57987 94.3869 10.5216C94.3869 12.4634 92.8492 13.9987 90.9045 13.9987C89.5025 13.9987 88.2362 13.1407 87.7387 11.9215C87.4673 11.4248 86.8794 11.2893 86.4724 11.2893C85.6583 11.2893 84.7085 11.8763 84.1206 12.4182V26.8685C84.1206 28.9458 84.3015 29.1716 85.6583 29.3973L87.1508 29.7134V30.9327H74.2613V29.7134L75.4372 29.3973C76.9296 28.9909 77.1105 28.7651 77.1105 26.8685V13.0053C77.1105 11.1087 76.8844 10.9732 75.6181 10.1152L74.1256 9.12175V8.21861L83.5327 7.13484L84.0301 7.4961L83.9397 10.5668L84.0754 10.6119ZM95.6985 29.7134L96.8744 29.3973C98.3668 28.9909 98.5477 28.7651 98.5477 26.8685V13.0053C98.5477 11.1087 98.3216 10.9732 97.0553 10.1152L95.5628 9.12175V8.21861L104.97 7.13484L105.467 7.45094L105.377 10.2958H105.558C107.91 8.62503 110.849 7.13484 114.106 7.13484C117.905 7.13484 119.94 9.0766 119.94 13.0956V26.8234C119.94 28.7651 120.121 28.9909 121.568 29.3522L122.744 29.6683V30.8875H110.307V29.6683L111.392 29.3973C112.749 29.0361 112.884 28.9006 112.884 26.8234V14.8567C112.884 12.1473 111.889 11.2893 109.809 11.2893C108.226 11.2893 106.643 11.6506 105.648 11.8763V26.8685C105.648 28.9909 105.784 29.0812 107.141 29.4425L108.226 29.7134V30.9327H95.7889V29.7134H95.6985ZM123.603 19.3724C123.603 10.8377 129.663 7.18 135.678 7.18C142.146 7.18 147.799 11.0635 147.799 19.1467C147.799 27.6814 141.829 31.4294 135.678 31.4294C129.211 31.4294 123.603 27.5459 123.603 19.3724ZM140.337 19.5982C140.337 10.6119 138.618 8.89597 135.543 8.89597C132.739 8.89597 131.065 10.928 131.065 18.6048C131.065 27.7265 132.558 29.7134 135.814 29.7134C138.482 29.7134 140.337 28.1329 140.337 19.5982ZM151.688 25.288V10.3862H148.884V9.30238C152.367 7.94767 155.035 5.37371 156.301 1.80629H158.834V7.76704H164.759L164.171 10.3862H158.834V24.8365C158.834 27.0492 159.513 27.9523 161.729 27.9523C162.814 27.9523 164.126 27.7265 164.94 27.5459V28.8103C163.854 29.8038 161.638 31.4294 157.884 31.4294C153.859 31.4294 151.688 29.6683 151.688 25.288ZM165.844 19.237C165.844 11.4699 171.588 7.18 177.513 7.18C183.663 7.18 187.508 10.2507 187.643 18.3338H172.899C173.035 25.6493 175.794 27.6362 180.407 27.6362C183.166 27.6362 185.291 26.8234 186.965 25.9654V27.4556C185.382 29.1716 181.99 31.5197 177.513 31.5197C169.688 31.4294 165.844 26.8234 165.844 19.237ZM172.854 16.6179L180.497 16.2114C180.497 10.8377 179.774 8.85081 177.106 8.85081C174.844 8.85081 173.035 11.0184 172.854 16.6179Z"
              transform="translate(0.200684 67.9463)"
              fill="black"
            ></path>
            <path
              d="M14.6533 12.2376C14.6533 12.7795 14.608 13.6826 14.0653 14.2697C13.4774 14.8116 12.5729 14.8567 12.0302 14.8567H6.24121C4.56784 14.8567 3.57287 14.8567 2.89448 14.947C2.53267 14.9922 2.08041 15.1728 1.85428 15.2631C1.76382 15.3083 1.76382 15.2631 1.80905 15.218L15.0151 1.80629C15.0603 1.76113 15.1055 1.76113 15.0603 1.85145C14.9698 2.07723 14.7889 2.5288 14.7437 2.89006C14.6533 3.56742 14.6533 4.56088 14.6533 6.23169V12.2376ZM26.9095 52.7888C25.3719 51.7953 24.5578 50.4857 24.2412 49.6729C23.9246 48.9052 23.7437 48.0473 23.7437 47.1893C23.7437 43.4412 26.8191 40.3705 30.6181 40.3705C31.7487 40.3705 32.6533 41.2737 32.6533 42.4026C32.6533 43.1703 32.2462 43.8025 31.6131 44.1637C31.3869 44.2992 31.0704 44.3895 30.8442 44.4347C30.6181 44.4798 29.7588 44.5702 29.3518 44.9314C28.8995 45.2927 28.5377 45.8797 28.5377 46.5119C28.5377 47.1893 28.809 47.8215 29.2613 48.273C30.0754 49.0859 31.1608 49.5374 32.3367 49.5374C35.4121 49.5374 37.8995 47.0538 37.8995 43.9831C37.8995 41.2285 36.0452 38.79 33.603 37.7063C33.2412 37.5256 32.6533 37.3902 32.1106 37.2547C31.4322 37.1192 30.799 37.0289 30.7538 37.0289C28.8543 36.8031 24.1055 35.3129 23.7889 31.1133C23.7889 31.1133 22.3869 37.4353 19.5829 39.1513C19.3116 39.2868 18.9498 39.4222 18.5427 39.5125C18.1357 39.6029 17.6834 39.648 17.5477 39.648C12.9799 39.919 8.14071 38.4739 4.79398 35.042C4.79398 35.042 2.53267 33.1905 1.35679 27.9975C1.08543 26.7331 0.542713 24.4752 0.22613 22.3528C0.090452 21.5851 0.0452259 20.9981 0 20.4562C0 18.2435 1.35679 16.7533 3.07538 16.5275C3.1206 16.5275 3.25628 16.5275 3.34674 16.5275C4.38694 16.5275 12.3015 16.5275 12.3015 16.5275C13.8844 16.5275 14.7889 16.1211 15.3769 15.5792C16.1457 14.8567 16.3266 13.8181 16.3266 12.5989C16.3266 12.5989 16.3266 4.38025 16.3266 3.34163C16.3266 3.29648 16.3266 3.11585 16.3266 3.07069C16.5528 1.39987 18.0452 0 20.2613 0C20.2613 0 20.9397 0 21.3467 0C21.799 0 22.3417 0.0451572 22.8392 0.0903144C23.201 0.135472 23.5176 0.225786 24.0603 0.361258C26.8191 1.03862 27.407 3.83836 27.407 3.83836C27.407 3.83836 32.608 4.74151 35.2312 5.19308C37.7186 5.64465 43.8693 6.05106 45.0452 12.2376C47.804 26.9588 46.1307 41.2285 45.995 41.2285C44.0503 55.1369 32.4724 54.4596 32.4724 54.4596C30.0302 54.5047 28.1759 53.6468 26.9095 52.7888ZM37.3116 23.2108C35.8191 23.0753 34.5528 23.6624 34.1005 24.7913C34.0101 25.0171 33.9196 25.288 33.9648 25.4235C34.01 25.559 34.1005 25.6041 34.191 25.6493C34.7337 25.9202 35.6382 26.0557 36.9498 26.1912C38.2613 26.3266 39.1658 26.417 39.7538 26.3266C39.8442 26.3266 39.9347 26.2815 40.0251 26.146C40.1156 26.0105 40.0704 25.7396 40.0704 25.5138C39.9347 24.2946 38.804 23.3914 37.3116 23.2108Z"
              transform="translate(66.6831 0.120117)"
              fill="#00A82D"
            ></path>
          </svg>
        </div>
        <p className='mb-5'>Remember everything important.</p>
      </div>
      {/* google login */}
      <div className='w-1/2 mx-auto md:w-8/12'>
        <div className=''>
        {/* {profile ? (
              <div>
              <img src={profile.picture} alt="user image" />
              <h3>User Logged in</h3>
              <p>Name: {profile.name}</p>
              <p>Email Address: {profile.email}</p>
              <br />
              <br />
              <button onClick={logOut}>Log out</button>
          </div>
            ) : (
              
                <button className='w-full' onClick={() => login()}><GoogleLogin className=""  /></button>
            )} */}
            <button className='w-full' onClick={() => login()}><GoogleLogin className=""  /></button>
        </div>
        <div className='border rounded-md border-gray-300 border-1 py-2 px-2  mt-2 flex space-x-2'>
        <a href='a'>< FaApple className='text-2xl ml-2' /></a><p className='text-center translate-x-9 font-light text-base text-gray-600 '>Sign With Apple</p>
        </div>
      </div>
      {/* end */}
      <div className="relative w-1/2 mx-auto p-5 md:w-8/12">
  <div className="border-t-0 border-b-2 border-gray-200 h-1 absolute top-1/2 left-0 right-0"></div>
  <span className="relative bg-white px-4">or</span>
</div>
      <div className='w-1/2 mx-auto mt-2 md:w-8/12'>
        <input className='border border-solid border-gray-200 px-4 md:px-6 py-2 mt-4 placeholder-gray-500::placeholder rounded-md
         ' type='text' onChange={getdata} name='email' placeholder='Email Address or username' />

        <input className='border border-solid border-gray-200 px-4 md:px-6 py-2 mt-4 placeholder-gray-500::placeholder rounded-md
         ' type='password' onChange={getdata} name='password' placeholder='Password' />

        <button onClick={addData} className='bg-green-600 text-white w-full px-5 py-3 rounded-md mt-2'>Continue</button>
        <div className='flex space-x-1 mt-8 m'>
          <input type='checkbox'/>
          <label>Remember me for 30 days</label>
        </div>
      </div>

      <div className='pt-8 pb-10'>
        <p className='text-gray-500 font-light text-sm'>Don't have an account?</p>
        <a href='/sign-up' className='text-green-600'>Create account</a>
      </div>
    </div>
    </section>
  );
}

export default Login