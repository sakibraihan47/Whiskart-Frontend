import Image from "next/image";

function Avatar() {
  return (
    <Image
      src="/whiskart_alter.jpeg"
      alt="me"
      height={500}
      width={300}
      className="rounded bg-transparent bg-opacity-10 overlay"
    />
  );
}

export default Avatar;
