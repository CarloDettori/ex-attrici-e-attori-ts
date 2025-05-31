//MILESTONE 1

type Person = {
  readonly id: number,
  readonly name: string,
  birth_year: number,
  death_year?: number,
  biography: string,
  image: string,
}



//MILESTONE 2

type Actress = Person & {
  most_famous_movies: [string, string, string],
  awards: string,
  nationality: "American" | "British" | "Australian" | "Israeli-American" | "South African" | "French" | "Indian" | "Israeli" | "Spanish" | "South Korean" | "Chinese"
}



//MILESTONE 3

function isActress(data: unknown): data is Actress {
  if (
    data && typeof data === "object" &&

    "id" in data && typeof data.id === "number" &&

    "name" in data && typeof data.name === "string" &&

    "birth_year" in data && typeof data.birth_year === "number" &&

    "biography" in data && typeof data.biography === "string" &&

    "image" in data && typeof data.image === "string" &&

    "most_famous_movies" in data && Array.isArray(data.most_famous_movies) && data.most_famous_movies.length === 3 && data.most_famous_movies.every((movie: string) => typeof movie === "string") &&

    "awards" in data && typeof data.awards === "string" &&

    "nationality" in data && typeof data.nationality === "string"

  ) {
    return true
  }
  return false

}

async function getActress(id: number): Promise<Actress | null> {

  try {

    const url = "http://localhost:3333/actresses/" + id
    const response = await fetch(url)
    //console.log(response)
    if (!response.ok) { throw new Error("chiamata fetch fallita") }

    const data = await response.json()

    if (!isActress(data)) { throw new Error("formato dati non valido") }

    //console.log(data)
    return data



  } catch (error) {

    if (error instanceof Error) { console.error("errore durante il recupero dei dati:", error.message) }
    else { console.error("errore sconociuto") }

    return null

  }

}

getActress(2).then(obj => console.log(obj))



//MILESTONE 4




//MILESTONE 5



//BONUS 1


//BONUS 2


//BONUS 3