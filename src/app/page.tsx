import {
  Container,
  Filtration,
  ProducktsGroupList,
  Title,
  TopBar,
} from "@/components/shared";

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
          <div className="w-[960px]">
            <ProducktsGroupList
              title="Кебаб"
              categoryId={1}
              items={[
                {
                  id: 5,
                  name: "Диабло",
                  imageUrl:
                    "https://media.dodostatic.com/image/r:292x292/11ef02823dba2cb09ee4f90cbc5e227a.avif",
                  items: [
                    {
                      price: 340,
                    },
                  ],
                },
                {
                  id: 6,
                  name: "Диабло",
                  imageUrl:
                    "https://media.dodostatic.com/image/r:292x292/11ef02823dba2cb09ee4f90cbc5e227a.avif",
                  items: [
                    {
                      price: 340,
                    },
                  ],
                },
                {
                  id: 7,
                  name: "Диабло",
                  imageUrl:
                    "https://media.dodostatic.com/image/r:292x292/11ef02823dba2cb09ee4f90cbc5e227a.avif",
                  items: [
                    {
                      price: 340,
                    },
                  ],
                },
                {
                  id: 8,
                  name: "Диабло",
                  imageUrl:
                    "https://media.dodostatic.com/image/r:292x292/11ef02823dba2cb09ee4f90cbc5e227a.avif",
                  items: [
                    {
                      price: 340,
                    },
                  ],
                },
                {
                  id: 9,
                  name: "Диабло",
                  imageUrl:
                    "https://media.dodostatic.com/image/r:292x292/11ef02823dba2cb09ee4f90cbc5e227a.avif",
                  items: [
                    {
                      price: 340,
                    },
                  ],
                },
                {
                  id: 10,
                  name: "Диабло",
                  imageUrl:
                    "https://media.dodostatic.com/image/r:292x292/11ef02823dba2cb09ee4f90cbc5e227a.avif",
                  items: [
                    {
                      price: 340,
                    },
                  ],
                },
                {
                  id: 11,
                  name: "Диабло",
                  imageUrl:
                    "https://media.dodostatic.com/image/r:292x292/11ef02823dba2cb09ee4f90cbc5e227a.avif",
                  items: [
                    {
                      price: 340,
                    },
                  ],
                },
                {
                  id: 12,
                  name: "Диабло",
                  imageUrl:
                    "https://media.dodostatic.com/image/r:292x292/11ef02823dba2cb09ee4f90cbc5e227a.avif",
                  items: [
                    {
                      price: 340,
                    },
                  ],
                },
                {
                  id: 13,
                  name: "Диабло",
                  imageUrl:
                    "https://media.dodostatic.com/image/r:292x292/11ef02823dba2cb09ee4f90cbc5e227a.avif",
                  items: [
                    {
                      price: 340,
                    },
                  ],
                },
                {
                  id: 14,
                  name: "Диабло",
                  imageUrl:
                    "https://media.dodostatic.com/image/r:292x292/11ef02823dba2cb09ee4f90cbc5e227a.avif",
                  items: [
                    {
                      price: 340,
                    },
                  ],
                },
                {
                  id: 15,
                  name: "Диабло",
                  imageUrl:
                    "https://media.dodostatic.com/image/r:292x292/11ef02823dba2cb09ee4f90cbc5e227a.avif",
                  items: [
                    {
                      price: 340,
                    },
                  ],
                },
              ]}
            />
            <ProducktsGroupList
              title="Пицца"
              categoryId={2}
              items={[
                {
                  id: 1,
                  name: "Диабло",
                  imageUrl:
                    "https://media.dodostatic.com/image/r:292x292/11ef02823dba2cb09ee4f90cbc5e227a.avif",
                  items: [
                    {
                      price: 340,
                    },
                  ],
                },
                {
                  id: 2,
                  name: "Диабло",
                  imageUrl:
                    "https://media.dodostatic.com/image/r:292x292/11ef02823dba2cb09ee4f90cbc5e227a.avif",
                  items: [
                    {
                      price: 340,
                    },
                  ],
                },
                {
                  id: 3,
                  name: "Диабло",
                  imageUrl:
                    "https://media.dodostatic.com/image/r:292x292/11ef02823dba2cb09ee4f90cbc5e227a.avif",
                  items: [
                    {
                      price: 340,
                    },
                  ],
                },
                {
                  id: 4,
                  name: "Диабло",
                  imageUrl:
                    "https://media.dodostatic.com/image/r:292x292/11ef02823dba2cb09ee4f90cbc5e227a.avif",
                  items: [
                    {
                      price: 340,
                    },
                  ],
                },
              ]}
            />
            <ProducktsGroupList
              title="Суши"
              categoryId={3}
              items={[
                {
                  id: 1,
                  name: "Диабло",
                  imageUrl:
                    "https://media.dodostatic.com/image/r:292x292/11ef02823dba2cb09ee4f90cbc5e227a.avif",
                  items: [
                    {
                      price: 340,
                    },
                  ],
                },
                {
                  id: 2,
                  name: "Диабло",
                  imageUrl:
                    "https://media.dodostatic.com/image/r:292x292/11ef02823dba2cb09ee4f90cbc5e227a.avif",
                  items: [
                    {
                      price: 340,
                    },
                  ],
                },
                {
                  id: 3,
                  name: "Диабло",
                  imageUrl:
                    "https://media.dodostatic.com/image/r:292x292/11ef02823dba2cb09ee4f90cbc5e227a.avif",
                  items: [
                    {
                      price: 340,
                    },
                  ],
                },
                {
                  id: 4,
                  name: "Диабло",
                  imageUrl:
                    "https://media.dodostatic.com/image/r:292x292/11ef02823dba2cb09ee4f90cbc5e227a.avif",
                  items: [
                    {
                      price: 340,
                    },
                  ],
                },
              ]}
            />
          </div>
        </Container>
      </section>
    </>
  );
}
