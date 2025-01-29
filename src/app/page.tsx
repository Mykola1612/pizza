import {
  Categories,
  Container,
  Filtration,
  SortPopup,
  Title,
} from "@/components/shared";

export default function Home() {
  return (
    <>
      <section className="pt-[40px]">
        <Container>
          <Title text={"Все пиццы"} />
          <div className="flex justify-between items-center mt-[20px]">
            <Categories />
            <SortPopup />
          </div>
        </Container>
      </section>
      <section className="pt-[36px]">
        <Container>
          <div className="flex justify-between">
            <Filtration />
            <div className="w-[960px]"></div>
          </div>
        </Container>
      </section>
    </>
  );
}
