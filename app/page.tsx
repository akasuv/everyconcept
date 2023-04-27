import React from "react";

export const revalidate = Infinity;

const Card = ({ title, body }: { title: string; body: string }) => (
  <div className="card w-1/2 bg-base-100 shadow-sm border border-black">
    <div className="card-body p-4">
      <h2 className="card-title">{title}</h2>
      <p>{body}</p>
    </div>
  </div>
);

const getConcepts = async () => {
  const res = await fetch("http://localhost:1337/api/concepts").then((res) =>
    res.json()
  );

  return res.data;
};

export default async function Home() {
  const concepts = await getConcepts();

  return (
    <div className="flex flex-col items-center p-16 gap-y-16">
      <h1 className="text-3xl font-black">EveryConcept</h1>
      <div className="flex flex-col gap-y-8 items-center">
        {concepts &&
          concepts.map((concept: any) => (
            <Card
              key={concept.id}
              title={concept.attributes.title}
              body={concept.attributes.body}
            />
          ))}
      </div>
    </div>
  );
}
