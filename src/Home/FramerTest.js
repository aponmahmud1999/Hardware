import ParallaxText from "./ParallaxText";

export default function FramerTest() {
  return (
    <section className="flex justify-center">
      <ParallaxText baseVelocity={2}>
        Welcome to Carpet World - Global Source for Unique Carpet.
      </ParallaxText>
      {/* <ParallaxText baseVelocity={2}>
        MongoDB ExpressJS ReactJS NodeJS NextJS{" "}
      </ParallaxText>
      <ParallaxText baseVelocity={-2}>This is another test </ParallaxText> */}
    </section>
  );
}
