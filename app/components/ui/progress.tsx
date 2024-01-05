
interface IProgressProps{
    value: number;
    maxValue: number;
}

const Progress = ({ value, maxValue }: IProgressProps) => {

    return (
        <progress 
            className="w-full [&::-webkit-progress-bar]:rounded-xl [&::-webkit-progress-value]:rounded-xl [&::-webkit-progress-bar]:bg-secondary-light [&::-webkit-progress-value]:bg-primary" 
            value={value}
            max={maxValue}
        > 
            { value } / { maxValue }
        </progress>
    )
}

export default Progress;