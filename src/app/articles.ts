// src/app/data/articles.ts
export type ArticleMeta = {
  slug: string;
  title: string;
  description: string;
  category: string;
  track: string;
  readingTime: string;
  date: string; // YYYY-MM-DD
};

// Observação: mantenha slugs únicos e datas em YYYY-MM-DD.
export const articles: ArticleMeta[] = [
  {
    slug: "guia-cloud-computing-para-iniciantes",
    title: "Guia Completo de Cloud Computing para Iniciantes",
    description:
      "Um guia direto ao ponto para entender o que é cloud computing, seus modelos e como começar do jeito certo.",
    category: "Fundamentos",
    track: "fundamentos",
    readingTime: "12 min",
    date: "2025-01-01",
  },
  {
    slug: "como-criar-vpc-na-aws",
    title: "Como criar VPC na AWS",
    description:
      "Guia prático para criar sua primeira VPC na AWS com sub-redes públicas e privadas, rota e boas práticas.",
    category: "AWS",
    track: "aws",
    readingTime: "8 min",
    date: "2025-11-26",
  },
  {
    slug: "fundamentos-de-iam-na-aws",
    title: "Fundamentos de IAM na AWS",
    description:
      "Entenda o que é IAM, como funcionam usuários, grupos, roles e políticas para controlar acesso na AWS.",
    category: "AWS",
    track: "aws",
    readingTime: "9 min",
    date: "2025-11-26",
  },
  {
    slug: "introducao-ao-amazon-s3",
    title: "Introdução ao Amazon S3",
    description:
      "O que é o Amazon S3, como funciona o armazenamento em buckets, classes de armazenamento e boas práticas.",
    category: "AWS",
    track: "aws",
    readingTime: "10 min",
    date: "2025-11-26",
  },
];
