import { VariantProps, cva } from "class-variance-authority";
import { cn } from "../../lib/utils";

interface IProgressProps extends React.ProgressHTMLAttributes<HTMLProgressElement>, VariantProps<typeof progressVariants>{
    value: number;
    maxValue: number;
}

const progressVariants = cva(
    "w-full [&::-webkit-progress-bar]:rounded-xl [&::-webkit-progress-value]:rounded-xl",
    {
        variants: {
            variant: {
                light: '[&::-webkit-progress-bar]:bg-secondary-light [&::-webkit-progress-value]:bg-primary',
                dark: '[&::-webkit-progress-bar]:bg-secondary-dark [&::-webkit-progress-value]:bg-primary'
            }
        },
        defaultVariants: {
			variant: "light",
		},
    }
)

const Progress = ({ value, maxValue, variant, className, ...props }: IProgressProps) => {

    return (
        <progress 
            {...props}
            className={progressVariants({className, variant})} 
            value={value}
            max={maxValue}
        > 
            { value } / { maxValue }
        </progress>
    )
}

export default Progress;