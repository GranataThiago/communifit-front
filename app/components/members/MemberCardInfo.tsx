interface IMemberCardInfo{
    title: string;
    subtitle: string;
}
const MemberCardInfo = ({title, subtitle}: IMemberCardInfo) => {
  return (
    <div className="bg-primary flex flex-col items-center justify-center py-6 rounded-lg min-h-[80px] ">
        <h3>{title}</h3>
        <h4 className="font-normal">{subtitle}</h4>
    </div>
  )
}

export default MemberCardInfo