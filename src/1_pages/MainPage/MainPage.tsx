import { useGetSamples } from "@/4_entities/api/useGetSamples";

type MainPageProps = {};

const MainPage = ({}: MainPageProps) => {
  const { data } = useGetSamples();

  return <div>{JSON.stringify(data)}</div>;
};
export default MainPage;
