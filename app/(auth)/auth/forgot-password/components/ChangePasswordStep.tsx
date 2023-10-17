import { Controller } from "react-hook-form";
import { Input } from "../../../../components";
import { ForgotPasswordFormStep } from "../forgot-password";

const ChangePasswordStep = ({ register, control }: ForgotPasswordFormStep) => {
  return (
    <>
      <form
        aria-label="Reset password form"
        className="w-full flex flex-col gap-6"
      >
        <div
          aria-label="Password"
          className="flex flex-col justify-center  w-full"
        >
          <label htmlFor="password" className="text-base text-black">
            Password
          </label>
          <Controller
            name="password"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <Input {...field} ref={null} type="password" variant="outlined" />
            )}
          />
        </div>

        <div
          aria-label="Confirm Password"
          className="flex flex-col justify-center  w-full"
        >
          <label htmlFor="confirmPassword" className="text-base text-black">
            Confirm Password
          </label>
          <Controller
            name="confirmPassword"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <Input {...field} ref={null} type="password" variant="outlined" />
            )}
          />
        </div>
      </form>
    </>
  );
};

export default ChangePasswordStep;
