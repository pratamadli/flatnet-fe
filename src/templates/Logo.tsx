// import { AppConfig } from "../utils/AppConfig";
import Image from "next/image";
import logoFlatnet from "../../public/logo.png";
type ILogoProps = {
  xl?: boolean;
};

const Logo = (props: ILogoProps) => {
  const size = props.xl ? "88" : "64";
  const fontStyle = props.xl
    ? "font-semibold text-3xl"
    : "font-semibold text-xl";

  return (
    <span className={`inline-flex items-center text-gray-900 ${fontStyle}`}>
      <Image
        src={logoFlatnet}
        alt="Logo Flatnet"
        className="mr-1 stroke-current text-primary-50"
        width={size}
        height={size}
      />
    </span>
  );
};

export { Logo };
