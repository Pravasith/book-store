import Image from "next/image";

const Nav = () => {
  return (
    <nav className="flex justify-center m-8">
      <Image
        src="/bsoft-logo.svg"
        width={200}
        height={100}
        alt="BlazeSoft Logo"
      />
    </nav>
  );
};

export default Nav;
