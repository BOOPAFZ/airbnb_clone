'use client';

import Modal from "./Modal";
import useSignupModal from "@/app/hooks/useSignupModal";
import CustomButton from "../forms/CustomButton";

const SignupModal = () => {
    const signupModalState = useSignupModal(); // Renamed to avoid conflict

    const content = (
        <> 
            <form className="space-y-4">
                <input 
                    placeholder="Your e-mail address" 
                    type='email' 
                    className="w-full h-[54px] px-4 border border-gray-300 rounded-xl"
                />
                <input 
                    placeholder="Your password" 
                    type='password' 
                    className="w-full h-[54px] px-4 border border-gray-300 rounded-xl"
                />
                <input 
                    placeholder="Repeat password" 
                    type='password' 
                    className="w-full h-[54px] px-4 border border-gray-300 rounded-xl"
                />
                <div className="p-5 bg-airbnb text-white rounded-xl opacity-80">
                    The error message
                </div>
                <CustomButton
                    label="Submit"
                    onClick={() => console.log('clicked')}
                    className="w-full h-[54px] bg-airbnb text-white rounded-xl"
                />
            </form>
        </>
    );

    return (
        <Modal 
            isOpen={signupModalState.isOpen}
            close={signupModalState.close}
            label="Sign Up" // Updated label
            content={content}
        />
    );
};

export default SignupModal;
