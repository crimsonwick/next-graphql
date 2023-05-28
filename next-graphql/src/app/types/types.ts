export type Character = {
  name: string;
  image: string;
  id: string;
}

export type PageProps = {
  data: {
    results: Character[];
  }
}