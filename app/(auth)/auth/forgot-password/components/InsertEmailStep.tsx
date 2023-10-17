import { Controller } from "react-hook-form";
import { ForgotPasswordFormStep } from "../forgot-password";
import { Input } from "../../../../components/ui/input";

const InsertEmailStep = ({ register, control }: ForgotPasswordFormStep) => {
  return (
    <>
      <form aria-label="Reset password form" className="w-full">
        <div
          aria-label="Email"
          className="flex flex-col justify-center  w-full"
        >
          <label htmlFor="email" className="text-base text-black">
            Enter your email address
          </label>
          <Controller
            name="email"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <Input {...field} ref={null} type="email" variant="outlined" />
            )}
          />
        </div>
      </form>
    </>
  );
};

export default InsertEmailStep;
