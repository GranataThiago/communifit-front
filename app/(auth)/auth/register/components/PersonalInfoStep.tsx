import React from "react";
import { Control, Controller, UseFormRegister } from "react-hook-form";
import { BsGenderFemale, BsGenderMale } from "react-icons/bs";
import { RegisterForm } from "./Onboarding";
import { montserrat } from "../../../../components/fonts";
import { RadioCard } from "../../../../components";

const gendersOptions = [
  {
    label: "Men",
    value: "men",
    icon: <BsGenderMale className="text-5xl" />,
  },
  {
    label: "Women",
    value: "women",
    icon: <BsGenderFemale className="text-5xl" />,
  },
];

interface PersonalInfoStepProps {
  register: UseFormRegister<RegisterForm>;
  control?: Control<RegisterForm, any>;
}

export const PersonalInfoStep = (props: PersonalInfoStepProps) => {
  const { register, control } = props;
  return (
    <div className={`flex-1 ${montserrat.className}`}>
      <p className="font-bold text-xl">Gender</p>
      <p className="font-medium text-lg">
        Select an <span className="text-primary">option</span>
      </p>

      <Controller
        name="gender"
        control={control}
        render={({ field }) => (
          <fieldset {...field} name="gender" className="flex flex-col gap-5">
            {gendersOptions.map((gender, index) => (
              <div  className="flex gap-2" role="button" aria-label={`Select gender ${gender.value}`} {...field}  tabIndex={index+1}>
                <RadioCard
                {...field}
                  key={gender.value}
                  icon={gender.icon}
                  ref={null}
                  id={gender.value}
                  value={gender.value}
                  label={gender.label}
                  height={60}
                  tabIndex={index+1}
              />
              </div>
            ))}
          </fieldset>
        )}
      />

      <div className="w-full mt-6">
        <p className="font-bold text-xl mb-2">Birthday</p>
        <div className="flex justify-between w-full gap-2">
          <input
            {...register("birthdate.day")}
            className="text-center flex-1 w-0 border border-gray-400 rounded-lg p-1"
            type="number"
            placeholder="Day"
          />
          <input
            {...register("birthdate.month")}
            className="text-center flex-1 w-0 border border-gray-400 rounded-lg p-1"
            type="number"
            placeholder="Month"
          />
          <input
            {...register("birthdate.year")}
            className="text-center flex-1 w-0 border border-gray-400 rounded-lg p-1"
            type="number"
            placeholder="Year"
          />
        </div>
      </div>
    </div>
  );
};
