export const exreciseOptions = {
    method: 'GET',
    // url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
    headers: {
      'X-RapidAPI-Key':'feef6f7c03mshcd700b93afd50b0p16a890jsn4dd5bf5f5da5' ,
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };

export const fetchData = async(url,options) =>{
    const response = await fetch(url,options);
    const data = await response.json();

    return data

}