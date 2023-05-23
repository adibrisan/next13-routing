interface Props {
  params: { postId: string };
}

export async function generateStaticParams() {
  const posts = ["1", "2"];

  return posts.map((post) => {
    return {
      postId: post,
    };
  });
}

const page = async (props: any) => {
  console.log(props);

  return <div>page</div>;
};

export default page;
