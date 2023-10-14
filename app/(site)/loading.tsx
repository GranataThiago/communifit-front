interface ILoading {
  containerClasses?: string;
  spinnerClasses?: string;
}
export default function Loading({containerClasses = 'h-screen', spinnerClasses = 'w-32 h-32 border-[1rem] border-gray-400 border-t-[1rem]'}: ILoading) {
  return (
    <div className={`flex items-center justify-center  w-full ${containerClasses}`}>
      <div className={`animate-spin bg-transparent   border-t-primary rounded-full ${spinnerClasses}`}></div>
    </div>
  );
}
