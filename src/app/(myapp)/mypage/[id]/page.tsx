export default function MyPostPage({ params }: { params: { id: string } }) {
  return <>{params.id}</>;
}
