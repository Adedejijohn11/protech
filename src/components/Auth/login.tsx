import { IoMdClose } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";

type NavbarProps = {
  uniToggle: (menu: string) => void;
  showLogin: boolean;
};

const Loginbar = ({ uniToggle, showLogin }: NavbarProps) => {
  return (
    <AnimatePresence initial={false}>
      {showLogin && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => uniToggle("login_menu")}
            className={`absolute top-0 right-0 z-40 h-full w-full inset-0 bg-white/30 lg:bg-transparent  `}
          ></motion.div>
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: "0" }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.8 }}
            className="z-50 absolute top-0 right-0 h-full w-[100%] md:w-[70%] lg:w-[30%] flex items-center justify-center   text-black bg-white"
          >
            <div className=" h-[98%] w-[95%] ">
              <button
                onClick={() => uniToggle("login_menu")}
                className="p-[2px] mt-1 border-none text-2xl bg-white focus:outline-none"
              >
                <IoMdClose />
              </button>
              <div className="flex flex-col items-center  justify-center">
                <div className="h-full w-[90%] flex flex-col items-center mt-6">
                  <div className="flex flex-col items-center ">
                    <h1 className="text-[20px] font-bold  lg:text-[27px] mb-4">
                      Login or create your account
                    </h1>
                    <div className=" flex flex-col items-center ">
                      <button className=" flex items-center justify-center gap-5 md:gap-10 h-11  md:h-auto w-[300px] md:w-[370px] lg:w-[390px] py-3 bg-white border-black">
                        <FaFacebook className="text-blue-600 text-2xl" />
                        CONTINUE WITH FACEBOOK
                      </button>
                      <p className="w-[300px] md:w-[350px] mt-4 text-center text-[14px]">
                        By login with social ID, I agree to link my account in
                        accordance with the <span>Privacy Policy</span>
                      </p>
                      <p className="my-5 lg:my-10">Or</p>
                    </div>
                  </div>
                  <div className="flex flex-col w-full ">
                    <form className="flex flex-col gap-8" action="">
                      <div className="relative flex flex-col">
                        <input
                          type="text"
                          name="email"
                          placeholder="E-mail"
                          required
                          className="h-[40px] bg-white border-gray-300 border-2 px-3 text-black"
                        />
                        <div className="absolute right-2 top-3  h-[20px] w-[20px] rounded-full border-2 border-gray-600"></div>
                      </div>
                      <div className="relative flex flex-col">
                        <input
                          type="text"
                          name="Password"
                          placeholder="Password"
                          required
                          className="h-[40px] bg-white border-gray-300 border-2 px-3 text-black"
                        />
                        <div className="absolute right-2 top-3 h-[20px] w-[20px] rounded-full border-2 border-gray-600">
                          <FiEye />
                        </div>
                      </div>
                    </form>
                    <div className="my-6 md:my-10 flex items-center justify-between">
                      <div className="flex items-center">
                        <input
                          className="h-6 w-4 mr-[10px] bg-white "
                          type="checkbox"
                        />
                        <p className="text-[13px] md:text-[14px]">
                          Keep the session
                        </p>
                      </div>
                      <a href="/" className="text-[12px] md:text-[14px]">
                        Forgot your password?
                      </a>
                    </div>
                    <button className="mb-6 text-white">LOGIN</button>

                    <p className=" text-center">
                      Don't have account?
                      <span className="text-black font-bold">
                        <a href="/">Sign up</a>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Loginbar;
