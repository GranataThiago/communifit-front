
import { SocialMediaForm } from '../../components/SocialMediaForm';
import { RegisterFormStep } from "./Onboarding/Onboarding";
import { Controller } from "react-hook-form";
import { montserrat } from "../../../../components/fonts";
import { LabeledInput } from "../../../../components";

export const RegisterForm = ({ register, control }: RegisterFormStep) => {

  return (
    <div className={`flex-1 flex flex-col justify-center gap-8 ${montserrat.className}`}>
        <Controller 
          name='fullname'
          control={control}
          defaultValue=''
          render={({field}) => (
            <LabeledInput 
              {...field}
              ref={null}
              label='Full name'
              type='text'
              variant='outlined'
            />
          )}
        />

        <Controller 
          name='username'
          control={control}
          defaultValue=''
          render={({field}) => (
            <LabeledInput 
              {...field}
              ref={null}
              label='Username'
              type='text'
              variant='outlined'
            />
          )}
        />

        <Controller 
          name='email'
          control={control}
          defaultValue=''
          render={({field}) => (
            <LabeledInput 
              {...field}
              ref={null}
              label='Email'
              type='email'
              variant='outlined'
            />
          )}
        />

        <Controller 
          name='password'
          control={control}
          defaultValue=''
          render={({field}) => (
            <LabeledInput 
              {...field}
              ref={null}
              label='Password'
              type='password'
              variant='outlined'
            />
          )}
        />

        <SocialMediaForm />
    </div>
  )
}
