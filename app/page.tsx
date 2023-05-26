import Hero from "./components/Hero";
import Posts from "./components/Posts";

export default function Home() {
  return (
    <div className="container max-w-4xl py-6 lg:py-10">
      <Hero
        titre={"Blog"}
        sousTitre={"A blog built using Contentlayer. Posts are written in MDX."}
      />
      <hr className="my-8" />
      <Posts />
    </div>
  );
}
