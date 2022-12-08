const recent = () => {
  return (
    <div className="flex h-screen items-center m-b justify-center px-6   bg-gradient-to-r from-gray-800 to-purple-900">
      <h1 className="font-bold text-white text-xl">This is the Recent Page</h1>
    </div>
  );
};

export const getServerSideProps = async (context) => {
  const token = context.req.cookies.token;
  if (!token) {
    return { redirect: { permanent: true, destination: "/" }, props: {} };
  }
  const { params } = context;
  const { id } = params;

  let res = await fetch(`http://localhost:3002/getthisartwork/${id}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",

      Authorization: `Bearer ${token}`,
    },
  });
  res = await res.json();
  return {
    props: { artwork: res.artworks, token: token },
  };
};

export default recent;
