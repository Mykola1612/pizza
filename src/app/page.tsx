import { Categories, Container, SortPopup, Title } from "@/components/shared";

export default function Home() {
  return (
    <section className="pt-[40px]">
      <Container>
        <Title text={"Все пиццы"} />
        <Categories />
        <SortPopup />
      </Container>
    </section>
  );
}
