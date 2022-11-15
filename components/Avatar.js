import Image from "next/image";

function Avatar() {
  return (
    <Image
      src="/home.jpg"
      alt="me"
      height={900}
      width={500}
      className="rounded hover:bg-white"
    />
  );
}

export default Avatar;
