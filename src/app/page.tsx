import { Container, Filtration, Title, TopBar } from "@/components/shared";

export default function Home() {
  return (
    <>
      <section className="pt-[40px]">
        <Container>
          <Title text={"Все пиццы"} />
        </Container>
      </section>
      <TopBar />
      <section className="pt-[36px]">
        <Container className="flex justify-between">
          <Filtration />
          <div className="w-[960px]"></div>
        </Container>
      </section>
    </>
  );
}
