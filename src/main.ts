//MILESTONE 1
type Person = {
  readonly id: number,
  readonly name: string,
  birth_year: number,
  death_year?: number,
  biography: string,
  image: string,
}

type Actress = Person & {
  most_famous_movies: [string, string, string],
  awards: string,
  nationality: "American" | "British" | "Australian" | "Israeli-American" | "South African" | "French" | "Indian" | "Israeli" | "Spanish" | "South Korean" | "Chinese"
}

//MILESTONE 3


//MILESTONE 2

async function getActress(id: number): Promise<Actress | null> {

  try {

    const url = "http://localhost:3333/actresses/" + id
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error("chiamata fetch fallita")
    }
    const dataJson = await response.json()
    return dataJson

  } catch (error) {
    console.error(error)
  }
}

getActress(1).then(obj => console.log(obj))

//MILESTONE 4


//MILESTONE 5


//BONUS 1


//BONUS 2


//BONUS 3