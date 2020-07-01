
/* function getQuestions(){
    const url =
} */

export const getCategories = async () => {
    try{
        const res = await fetch("https://opentdb.com/api_category.php");
        const result = await res.json();
        console.log(result)
        return result;
    }
    catch (e){
        console.log(e)
        return null;
    }
}
