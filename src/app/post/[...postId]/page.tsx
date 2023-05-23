interface Props {
  params: { postId: string };
}

const page = ({ params }: Props) => {
  console.log(params.postId);

  return <div>page</div>;
};

export default page;
