import Database from  '../data/dataProcessing.js'
import "../component/search.js";
import "../component/poke-list.js";

const main = ()=> {
    const searchItem = document.querySelector("search-widget");
    const itemList = document.querySelector("poke-list");

    const onButtonSearchClicked = async () => {
        try {
            const result = await Database.getPokemon(searchItem.value);
            renderItem(result);
        } catch (e) {
            // fallbackResult(e);
            document.getElementById("tips").innerHTML = "Error" 
        }
    };

    const renderItem = keyword => itemList.poke = keyword;
    const fallbackResult = message => itemList.renderError(message);

    searchItem.clickEvent = onButtonSearchClicked;
};

export default main;