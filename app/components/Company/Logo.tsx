import { poppins } from "../fonts";

const Logo = () => {
  return (
    <div
      role="heading"
      aria-label="CommuniFit logo"
      className={`${poppins.className} text-surface-light text-4xl font-bold`}
    >
      Communi<span className="text-primary">fit</span>.
    </div>
  );
};

export default Logo;
