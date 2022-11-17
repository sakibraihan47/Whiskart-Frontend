import Image from "next/image";

function AvatarClone() {
  return (
    <Image
      src="/whiskart.jpeg"
      alt="me"
      height={500}
      width={300}
      className="rounded bg-transparent bg-opacity-10 overlay"
    />
  );
}

export default AvatarClone;
