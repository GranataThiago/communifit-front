import { Controller } from "react-hook-form";
import { ForgotPasswordFormStep } from "../page";
import { Input } from "../../../../components/ui/input";

const InsertEmailStep = ({ register, control }: ForgotPasswordFormStep) => {
  return (
    <>
      <form aria-label="Reset password form" className="w-full">
        <div
          aria-label="Email"
          className="flex flex-col justify-center  w-full"
        >
          <label htmlFor="email" className="text-base text-surface-light">
            Enter your email address
          </label>
          <Controller
            name="email"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <Input placeholder="mail@example.com"{...field} ref={null} type="email" variant="outlined" />
            )}
          />
        </div>
      </form>
    </>
  );
};

export default InsertEmailStep;
